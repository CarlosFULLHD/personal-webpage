import Image from "next/image";
import React, { useState, useEffect } from "react";

interface PopUpProps {
  sectionInView: string; // La sección actual visible en la vista
}

interface SectionMessages {
  [key: string]: {
    title: string;
    message: string;
    image: string;
  };
}

const messages: SectionMessages = {
  introduction: {
    title: "Cal Newport ⚠️",
    message:
      "Deja que tu tecnología trabaje para ti, no al revés. Recupera tu enfoque y tu vida.",
    image: "calnewport-img.webp",
  },
  instructor: {
    title: "Instructor Insight",
    message: "Conoce al cerebro detrás de tu éxito.",
    image: "/path/to/instructor-img.webp",
  },
  modules: {
    title: "Explore Modules",
    message: "Descubre cómo cada módulo te acerca a tu libertad digital.",
    image: "/path/to/modules-img.webp",
  },
  bonuses: {
    title: "Bonus exclusivos",
    message: "Descubre bonuses",
    image: "url.webp",
  },
  pricing: {
    title: "Explore Modules",
    message: "Descubre cómo cada módulo te acerca a tu libertad digital.",
    image: "/path/to/modules-img.webp",
  },
  guarantee: {
    title: "Explore Modules",
    message: "Descubre cómo cada módulo te acerca a tu libertad digital.",
    image: "/path/to/modules-img.webp",
  },
  faqs: {
    title: "Explore Modules",
    message: "Descubre cómo cada módulo te acerca a tu libertad digital.",
    image: "/path/to/modules-img.webp",
  },
  // Agregar más secciones según sea necesario
};

const PopUp = ({ sectionInView }: PopUpProps) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (sectionInView && messages[sectionInView]) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 10000); // Mensaje visible por 5 segundos
      return () => clearTimeout(timer);
    }
  }, [sectionInView]);

  if (!showPopup || !messages[sectionInView]) return null;

  const { title, message, image } = messages[sectionInView];

  return (
    <div className="fixed top-10 right-8 left-0 z-50 flex justify-end animate-slideInFromTop">
      <div className="w-[330px] sm:w-[350px] md:w-[400px] mb-1 flex items-start space-x-3 bg-gray-200/75 backdrop-blur-md p-3 shadow-lg rounded-2xl text-base">
        <div className="shrink-0">
          <Image
            className="w-12 h-12 object-cover rounded-xl"
            src={image}
            alt={image}
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{title}</div>
          <div className="text-gray-700 leading-tight">{message}</div>
        </div>
        <div>
          <p className="text-gray-600">hace 7 minutos</p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
