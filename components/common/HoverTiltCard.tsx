"use client";

import { useRef, useState, useCallback } from "react";

interface HoverTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
}

export function HoverTiltCard({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.04,
  perspective = 1000,
}: HoverTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

      animFrameRef.current = requestAnimationFrame(() => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        // Normalised mouse position: -1 to +1
        const nx = (e.clientX - cx) / (rect.width / 2);
        const ny = (e.clientY - cy) / (rect.height / 2);

        const rotateX = -ny * maxTilt;
        const rotateY = nx * maxTilt;

        card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

        // Dynamic glow shadow following tilt direction
        const shadowX = rotateY * 1.5;
        const shadowY = -rotateX * 1.5;
        card.style.boxShadow = `
          ${shadowX}px ${shadowY}px 40px rgba(56, 189, 248, 0.35),
          0px 0px 60px rgba(99, 102, 241, 0.2),
          0px 0px 20px rgba(34, 211, 238, 0.3)
        `;

        // Glare effect angle
        if (glareRef.current) {
          const angle = Math.atan2(ny, nx) * (180 / Math.PI) + 90;
          const intensity = Math.min(Math.sqrt(nx * nx + ny * ny) * 0.3, 0.25);
          glareRef.current.style.background = `linear-gradient(
            ${angle}deg,
            rgba(255, 255, 255, ${intensity}),
            transparent 60%
          )`;
          glareRef.current.style.opacity = "1";
        }
      });
    },
    [maxTilt, scale, perspective]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (cardRef.current) {
      cardRef.current.style.transition =
        "transform 0.08s ease-out, box-shadow 0.08s ease-out";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    if (cardRef.current) {
      cardRef.current.style.transition =
        "transform 0.4s ease-out, box-shadow 0.4s ease-out";
      cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      cardRef.current.style.boxShadow =
        "0px 0px 30px rgba(56, 189, 248, 0.1)";
    }

    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      className={`relative cursor-pointer will-change-transform ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.4s ease-out, box-shadow 0.4s ease-out",
        boxShadow: "0px 0px 30px rgba(56, 189, 248, 0.1)",
        borderRadius: "1.5rem",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-3xl z-20"
        style={{
          opacity: 0,
          transition: "opacity 0.15s ease-out",
          background: "transparent",
          mixBlendMode: "overlay",
        }}
      />

      {/* Floating ring glow when hovered */}
      <div
        className="pointer-events-none absolute -inset-0.75 rounded-3xl z-10 transition-opacity duration-400"
        style={{
          opacity: isHovered ? 1 : 0,
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.5), rgba(99,102,241,0.4), rgba(34,211,238,0.5))",
          filter: "blur(6px)",
        }}
      />
    </div>
  );
}
