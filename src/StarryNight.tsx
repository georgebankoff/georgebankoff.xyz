import React, { useEffect, useRef } from "react";
import "./StarryNight.css";

type StarSize = 1 | 2;

interface GridPosition {
  column: number;
  row: number;
}

interface Star extends GridPosition {
  size: StarSize;
  opacity: number;
  revealDelay: number;
  twinkleSpeed: number;
}

interface ShootingStar extends GridPosition {
  columnStep: number;
  rowStep: number;
  opacity: number;
  trail: GridPosition[];
  trailLength: number;
  size: StarSize;
}

const gridCellSize = 2;
const staticStarCount = 200;
const staticStarRevealDuration = 1800;
const largeStarProbability = 0.2;
const shootingStarStepMs = 40;
const shootingStarFadePerStep = 0.035 *
  (shootingStarStepMs / (1000 / 60));

const shootingStarDirections = [
  { columnStep: 6, rowStep: 2 },
  { columnStep: 5, rowStep: 3 },
  { columnStep: 4, rowStep: 4 },
  { columnStep: 3, rowStep: 5 },
  { columnStep: 2, rowStep: 6 },
] as const;

const randomInteger = (maxExclusive: number) =>
  Math.floor(Math.random() * Math.max(1, maxExclusive));

const randomStarSize = (): StarSize =>
  Math.random() < largeStarProbability ? 2 : 1;

const StarryNight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const backgroundColor = () => colorScheme.matches ? "#000000" : "#12121F";

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    const starRevealStartedAt = performance.now();
    let animationFrameId = 0;
    let shootingStarTimeout = 0;
    let lastShootingStarStep = 0;
    let isAnimating = false;
    let devicePixelRatio = 1;
    let viewportWidth = 0;
    let viewportHeight = 0;
    let columnCount = 0;
    let rowCount = 0;

    const generateStars = () => {
      stars.length = 0;
      const occupiedCells = new Set<string>();
      let attempts = 0;

      while (
        stars.length < staticStarCount && attempts < staticStarCount * 20
      ) {
        attempts++;
        const size = randomStarSize();
        const column = randomInteger(columnCount - size + 1);
        const row = randomInteger(rowCount - size + 1);
        const starCells: string[] = [];

        for (let columnOffset = 0; columnOffset < size; columnOffset++) {
          for (let rowOffset = 0; rowOffset < size; rowOffset++) {
            starCells.push(`${column + columnOffset}:${row + rowOffset}`);
          }
        }

        if (starCells.some((cell) => occupiedCells.has(cell))) continue;
        starCells.forEach((cell) => occupiedCells.add(cell));

        stars.push({
          column,
          row,
          size,
          opacity: Math.random(),
          revealDelay: Math.random() * staticStarRevealDuration,
          twinkleSpeed: (Math.random() * 0.003 + 0.0015) *
            (Math.random() < 0.5 ? 1 : -1),
        });
      }
    };

    const resizeCanvas = () => {
      const previousColumnCount = columnCount;
      const previousRowCount = rowCount;
      devicePixelRatio = window.devicePixelRatio || 1;
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      columnCount = Math.ceil(viewportWidth / gridCellSize);
      rowCount = Math.ceil(viewportHeight / gridCellSize);

      canvas.width = viewportWidth * devicePixelRatio;
      canvas.height = viewportHeight * devicePixelRatio;
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);

      if (
        stars.length === 0 ||
        columnCount !== previousColumnCount ||
        rowCount !== previousRowCount
      ) {
        generateStars();
      }
      shootingStars.length = 0;
    };

    const drawStar = (star: GridPosition & { size: StarSize }) => {
      ctx.fillRect(
        star.column * gridCellSize,
        star.row * gridCellSize,
        star.size * gridCellSize,
        star.size * gridCellSize,
      );
    };

    const drawBackground = () => {
      ctx.clearRect(0, 0, viewportWidth, viewportHeight);
      ctx.fillStyle = backgroundColor();
      ctx.fillRect(0, 0, viewportWidth, viewportHeight);
    };

    const drawStaticStars = (timestamp: number | null) => {
      ctx.fillStyle = "#f5f5f7";

      stars.forEach((star) => {
        if (
          timestamp !== null &&
          timestamp - starRevealStartedAt < star.revealDelay
        ) {
          return;
        }

        if (timestamp !== null) {
          star.opacity += star.twinkleSpeed;
          if (star.opacity > 0.8) {
            star.opacity = 0.8;
            star.twinkleSpeed *= -1;
          } else if (star.opacity < 0.3) {
            star.opacity = 0.3;
            star.twinkleSpeed *= -1;
          }
        }

        ctx.globalAlpha = timestamp === null ? 0.7 : star.opacity;
        drawStar(star);
      });

      ctx.globalAlpha = 1;
    };

    const createShootingStar = () => {
      const direction = shootingStarDirections[
        randomInteger(shootingStarDirections.length)
      ];
      const size = randomStarSize();

      shootingStars.push({
        column: randomInteger(columnCount - size + 1),
        row: randomInteger(Math.ceil(rowCount / 2)),
        columnStep: direction.columnStep,
        rowStep: direction.rowStep,
        opacity: 1,
        trail: [],
        trailLength: randomInteger(4) + 4,
        size,
      });
    };

    const stepShootingStars = () => {
      for (let index = shootingStars.length - 1; index >= 0; index--) {
        const star = shootingStars[index];

        star.trail.unshift({ column: star.column, row: star.row });
        if (star.trail.length > star.trailLength) star.trail.pop();

        star.column += star.columnStep;
        star.row += star.rowStep;

        if (star.trail.length === star.trailLength) {
          star.opacity -= shootingStarFadePerStep;
        }

        if (
          star.opacity <= 0 ||
          star.column > columnCount + star.columnStep ||
          star.row > rowCount + star.rowStep
        ) {
          shootingStars.splice(index, 1);
        }
      }
    };

    const drawShootingStars = () => {
      ctx.fillStyle = "#f5f5f7";

      shootingStars.forEach((star) => {
        star.trail.forEach((position, index) => {
          const trailProgress = 1 - (index + 1) / (star.trail.length + 1);
          ctx.globalAlpha = Math.max(0, star.opacity * trailProgress);
          drawStar({ ...position, size: star.size });
        });

        ctx.globalAlpha = Math.max(0, star.opacity);
        drawStar(star);
      });

      ctx.globalAlpha = 1;
    };

    const draw = (timestamp: number) => {
      if (!isAnimating) return;

      if (timestamp - lastShootingStarStep >= shootingStarStepMs) {
        stepShootingStars();
        lastShootingStarStep = timestamp;
      }

      drawBackground();
      drawStaticStars(timestamp);
      drawShootingStars();
      animationFrameId = window.requestAnimationFrame(draw);
    };

    const drawReducedMotionFrame = () => {
      drawBackground();
      drawStaticStars(null);
    };

    const scheduleShootingStar = () => {
      if (!isAnimating || document.hidden) return;

      const delay = 4500 + Math.random() * 5500;
      shootingStarTimeout = window.setTimeout(() => {
        if (!isAnimating || document.hidden) return;

        createShootingStar();
        scheduleShootingStar();
      }, delay);
    };

    const stopAnimation = () => {
      isAnimating = false;
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(shootingStarTimeout);
      shootingStars.length = 0;
    };

    const startAnimation = () => {
      if (isAnimating || document.hidden) return;

      isAnimating = true;
      lastShootingStarStep = performance.now();
      animationFrameId = window.requestAnimationFrame(draw);
      scheduleShootingStar();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
        return;
      }

      resizeCanvas();
      startAnimation();
    };

    const handleResize = () => {
      resizeCanvas();
      if (reducedMotion) drawReducedMotionFrame();
    };

    resizeCanvas();
    window.addEventListener("resize", handleResize);

    if (reducedMotion) {
      drawReducedMotionFrame();
      colorScheme.addEventListener("change", drawReducedMotionFrame);

      return () => {
        colorScheme.removeEventListener("change", drawReducedMotionFrame);
        window.removeEventListener("resize", handleResize);
      };
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startAnimation();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      stopAnimation();
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-night-canvas" />;
};

export default StarryNight;
