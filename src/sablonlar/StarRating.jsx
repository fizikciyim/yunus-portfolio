import { Toast } from "bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import React, { useState, useRef } from "react";
import { useAuth } from "./AuthContext";

function Star({ fill = 1, size = 24 }) {
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
    >
      <FaRegStar
        color="lightgray"
        size={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
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
        <FaStar color="gold" size={size} />
      </div>
    </div>
  );
}

function StarRating({ initialRating = 0 }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const { kullanici } = useAuth();
  const toastRef = useRef(null);

  const handleClick = (value) => {
    if (!kullanici) {
      const toast = new Toast(toastRef.current, { delay: 2000 });
      toast.show();
      return;
    }
    // backend yok → sadece local efekt
    setRating(value);
  };

  const currentRating = hover || rating;

  return (
    <>
      {[1, 2, 3, 4, 5].map((value) => {
        const fill = Math.min(Math.max(currentRating - (value - 1), 0), 1);
        return (
          <span
            key={value}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            <Star fill={fill} />
          </span>
        );
      })}

      <div
        ref={toastRef}
        className="toast position-fixed text-bg-danger"
        style={{
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
      >
        <div className="toast-body">Puan vermek için giriş yapmalısınız.</div>
      </div>
    </>
  );
}

export default StarRating;
