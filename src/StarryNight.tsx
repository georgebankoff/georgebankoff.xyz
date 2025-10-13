import React, { useRef, useEffect } from "react";
import "./StarryNight.css";

const StarryNight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const pixelSize = 1.5; // smaller pixels for subtle stars

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // clear transform
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars: any[] = [];
    const shootingStars: any[] = [];
    const numStars = 200;

    // Smaller pixelated square stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        size: Math.random() * 1 + 1, // 1 to 2
        opacity: Math.random(),
        twinkleSpeed:
          (Math.random() * 0.003 + 0.0015) * (Math.random() < 0.5 ? 1 : -1),
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
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "#1a1a2e";
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
        ctx.fillStyle = "#fff";
        ctx.fillRect(
          star.x,
          star.y,
          star.size * pixelSize,
          star.size * pixelSize,
        );
        ctx.globalAlpha = 1;
      });

      // Shooting star with randomized directions
      shootingStars.forEach((star, i) => {
        // Update trail
        star.trail.unshift({ x: star.x, y: star.y });
        if (star.trail.length > star.trailLen) star.trail.pop();

        // Move star dot
        star.x += star.vx;
        star.y += star.vy;

        // Fade out at end of trail
        if (star.trail.length === star.trailLen) star.opacity -= 0.035;

        // Draw the trailing pixel squares
        for (let t = star.trail.length - 1; t >= 0; t--) {
          let fade = Math.max(0, star.opacity * (t / star.trailLen));
          ctx.globalAlpha = fade;
          ctx.fillStyle = "#fff";
          ctx.fillRect(
            star.trail[t].x,
            star.trail[t].y,
            star.size * pixelSize,
            star.size * pixelSize,
          );
        }

        // Draw the "dot"
        ctx.globalAlpha = Math.max(0, star.opacity);
        ctx.fillStyle = "#fff";
        ctx.fillRect(
          star.x,
          star.y,
          star.size * pixelSize,
          star.size * pixelSize,
        );
        ctx.globalAlpha = 1;

        // Remove if faded or off screen
        if (
          star.opacity <= 0 ||
          star.x > window.innerWidth + 10 ||
          star.y > window.innerHeight + 10
        ) {
          shootingStars.splice(i, 1);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const shootingStarInterval = setInterval(createShootingStar, 3000);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-night-canvas" />;
};

export default StarryNight;
