// FooterComponent.tsx
import React from "react";
import IframeNewsletter from "@/components/common/IframeNewsletter";
import { Logo } from "../icons";
import { Link } from "@nextui-org/link";
import { Twitter, Youtube } from "lucide-react";
// Asumiendo que tienes un componente Logo

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-custom-background text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10 lg:mx-16">
          <div>
            <Logo />
            <ul className="flex flex-row space-x-4 mt-2">
              <li>
                {/* Iconos de redes sociales */}
                <a
                  href="https://youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our YouTube channel"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-current"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-current"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">
              Estrategias para Disminuir el Tiempo Frente a Pantallas y Mejorar
              Tu Calidad de Vida
            </h2>
            <p className="mb-4">
              Cada domingo, recibirás un mini-boletín directo a tu correo con
              estrategias, herramientas y motivación para menos pantalla y más
              vida real.
            </p>
            <IframeNewsletter src="https://embeds.beehiiv.com/4bac08d8-cef4-44c7-ac9d-4cb41094e2c3?slim=true" />
          </div>
        </div>
        <hr className="my-8" />
        <span className="block text-sm text-gray-300 sm:text-center ">
          © 2024 Carlitos Nina. Todo mi trabajo tiene licencia abierta a través
          de{" "}
          <Link
            href="https://creativecommons.org/licenses/by-nd/4.0/"
            className="hover:underline"
          >
            CC BY-ND
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
