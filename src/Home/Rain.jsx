import React from "react";

const NUM_DROPS = 120;

const Rain = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {Array.from({ length: NUM_DROPS }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 1.5 + Math.random();
        const height = 12 + Math.random() * 20; // 12px to 32px
        const width = 2 + Math.random() * 2; // 2px to 4px
        const opacity = 0.4 + Math.random() * 0.4; // 0.4 to 0.8
        return (
          <div
            key={i}
            className="absolute top-[-10%] rounded-full"
            style={{
              left: `${left}%`,
              width: `${width}px`,
              height: `${height}px`,
              opacity: opacity,
              background:
                "linear-gradient(to bottom, #60a5fa 60%, rgba(96,165,250,0.2) 100%)",
              animation: `rain-fall ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes rain-fall {
          0% { top: -10%; opacity: 0.7; }
          80% { opacity: 0.7; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Rain;
