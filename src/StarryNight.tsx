import React, { useEffect, useRef } from "react";
import "./StarryNight.css";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  trail: { x: number; y: number }[];
  trailLen: number;
  size: number;
}

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

    let animationFrameId = 0;
    const pixelSize = 1.5;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    const numStars = 200;
    let isAnimating = false;

    // Smaller pixelated square stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        size: Math.random() * 1 + 1, // 1 to 2
        opacity: Math.random(),
        twinkleSpeed: (Math.random() * 0.003 + 0.0015) *
          (Math.random() < 0.5 ? 1 : -1),
      });
    }

    const createShootingStar = () => {
      const startX = Math.floor(Math.random() * window.innerWidth);
      const startY = Math.floor((Math.random() * window.innerHeight) / 2);
      const speed = Math.random() * 3 + 4;
      const trailLen = Math.floor(Math.random() * 8) + 8;
      const angle = Math.random() * (Math.PI / 3) + Math.PI / 12; // between 15°-75°
      shootingStars.push({
        x: startX,
        y: startY,
        vx: speed * Math.cos(angle),
        vy: speed * Math.sin(angle),
        opacity: 1,
        trail: [],
        trailLen: trailLen,
        size: Math.random() * 1 + 1.5, // Make the shooting star dot a bit bigger
      });
    };

    const draw = () => {
      if (!isAnimating) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = backgroundColor();
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Pixel stars as crisp small squares
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 0.8) {
          star.opacity = 0.8;
          star.twinkleSpeed *= -1;
        } else if (star.opacity < 0.3) {
          star.opacity = 0.3;
          star.twinkleSpeed *= -1;
        }
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "#f5f5f7";
        ctx.fillRect(
          star.x,
          star.y,
          star.size * pixelSize,
          star.size * pixelSize,
        );
        ctx.globalAlpha = 1;
      });

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.trail.unshift({ x: star.x, y: star.y });
        if (star.trail.length > star.trailLen) star.trail.pop();

        star.x += star.vx;
        star.y += star.vy;

        if (star.trail.length === star.trailLen) star.opacity -= 0.035;

        for (let t = star.trail.length - 1; t >= 0; t--) {
          const fade = Math.max(0, star.opacity * (t / star.trailLen));
          ctx.globalAlpha = fade;
          ctx.fillStyle = "#f5f5f7";
          ctx.fillRect(
            star.trail[t].x,
            star.trail[t].y,
            star.size * pixelSize,
            star.size * pixelSize,
          );
        }

        ctx.globalAlpha = Math.max(0, star.opacity);
        ctx.fillStyle = "#f5f5f7";
        ctx.fillRect(
          star.x,
          star.y,
          star.size * pixelSize,
          star.size * pixelSize,
        );
        ctx.globalAlpha = 1;

        if (
          star.opacity <= 0 ||
          star.x > window.innerWidth + 10 ||
          star.y > window.innerHeight + 10
        ) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    if (reducedMotion) {
      // Single static frame, no animation loop or shooting stars.
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = backgroundColor();
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      stars.forEach((star) => {
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = "#f5f5f7";
        ctx.fillRect(
          star.x,
          star.y,
          star.size * pixelSize,
          star.size * pixelSize,
        );
        ctx.globalAlpha = 1;
      });
      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }

    let shootingStarTimeout = 0;
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
      cancelAnimationFrame(animationFrameId);
      clearTimeout(shootingStarTimeout);
      shootingStars.length = 0;
    };

    const startAnimation = () => {
      if (isAnimating || document.hidden) return;

      isAnimating = true;
      draw();
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

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startAnimation();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", resizeCanvas);
      stopAnimation();
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-night-canvas" />;
};

export default StarryNight;
