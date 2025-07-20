import { Toast } from "bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";

function Star({ fill = 1, size = 24, color = "gold", ...props }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-block",
        cursor: "pointer",
        marginRight: 4,
      }}
      {...props}
    >
      {/* Boş yıldız */}
      <FaRegStar
        color="lightgray"
        size={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      {/* Dolu yıldız - genişliği fill oranına göre */}
      <div
        style={{
          overflow: "hidden",
          width: `${fill * 100}%`,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
        }}
      >
        <FaStar color={color} size={size} />
      </div>
    </div>
  );
}

function StarRating({ initialRating = 0, onRate }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const { kullanici } = useAuth();

  const toastRef = useRef(null);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleClick = (value, e) => {
    if (!kullanici) {
      const x = e.clientX;
      const y = e.clientY;
      const toastEl = toastRef.current;
      toastEl.style.left = `${x}px`;
      toastEl.style.top = `${y}px`;
      const toast = new Toast(toastEl, { delay: 2000, autohide: true });
      toast.show();
      return;
    }
    setRating(value);
    if (onRate) onRate(value);
  };

  const currentRating = hover || rating;

  return (
    <>
      <span>
        {[1, 2, 3, 4, 5].map((value) => {
          // Doluluk oranını hesapla: örn. rating=4.25, value=5 => fill=0.25
          const fill = Math.min(Math.max(currentRating - (value - 1), 0), 1);
          return (
            <Star
              key={value}
              fill={fill}
              color="gold"
              size={24}
              onClick={(e) => handleClick(value, e)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </span>

      <div
        ref={toastRef}
        className="toast position-fixed text-bg-danger"
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body d-flex justify-content-between align-items-center">
          Puan vermek için giriş yapmalısınız!
        </div>
      </div>
    </>
  );
}
export default StarRating;
