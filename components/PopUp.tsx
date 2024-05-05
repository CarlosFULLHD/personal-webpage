import Image from "next/image";
import React, { useState, useEffect } from "react";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  let timeoutId: NodeJS.Timeout;
  let hideTimeoutId: NodeJS.Timeout;

  const handleActivity = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (hideTimeoutId) clearTimeout(hideTimeoutId);
    timeoutId = setTimeout(() => {
      setShowPopup(true);
      // Establecer otro temporizador para ocultar el pop-up después de 5 segundos
      hideTimeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 10000); // 5 seconds
    }, 3000); // 30 seconds de inactividad
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("scroll", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed top-10 right-8 left-0 z-50 flex justify-end animate-slideInFromTop">
      <div className="w-[330px] sm:w-[350px] md:w-[40           0px] mb-1 flex items-start space-x-3 bg-gray-200/75 backdrop-blur-md p-3 shadow-lg rounded-2xl text-base">
        <div className="shrink-0">
          <Image
            className="w-12 h-12 object-cover rounded-xl"
            src="calnewport-img.webp"
            alt="Profile"
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">Cal Newport ⚠️</div>
          <div className="text-gray-700 leading-tight">
            Deja que tu tecnología trabaje para ti, no al revés. Recupera tu
            enfoque y tu vida.
          </div>
        </div>
        <div>
          <p className="text-gray-600">Hace 7 min</p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
