"use client";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import IframeLoader from "@/components/common/IframeNewsletter";
import IframeNewsletter from "@/components/common/IframeNewsletter";
import LoadingNewsletter from "./loading";

export default function Newsletter() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un retraso antes de mostrar el contenido de la página
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos de retraso
  }, []);

  if (isLoading) {
    return <LoadingNewsletter />;
  }
  return (
    <div className="flex flex-col items-center justify-center text-white bg-slate-50">
      <div className="relative z-10 w-full bg-slate-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 py-10 md:py-20 md:px-14 xl:px-auto mx-auto xl:px-0 ">
          <div className="space-y-6 md:w-2/3 lg:pl-10 xl:pl-0">
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-bold">
              Estrategias para Disminuir el Tiempo Frente a Pantallas y
              <span className="underline decoration-8 decoration-custom-yellow">
                {" "}
                Mejorar Tu Calidad de Vida
              </span>
            </h1>
            <p className="text-black text-center md:text-left lg:text-xl">
              Cada domingo, recibirás un mini-boletín directo a tu correo con
              estrategias, herramientas y motivación para menos pantalla y más
              vida real.
            </p>
            <p className="text-black text-center md:text-left font-semibold lg:text-xl">
              ¿Qué puedes esperar?
            </p>
            <ul className="text-black text-center md:text-left font-semibold list-disc list-inside lg:text-xl">
              <li>
                <strong>Estrategias Efectivas:</strong> Estas estrategias te
                ayudarán a mejorar tu enfoque y productividad.
              </li>
              <li>
                <strong>Herramientas Prácticas:</strong> Te equipamos con
                aplicaciones útiles y consejos de expertos, simplificando tu
                vida digital.
              </li>
              <li>
                <strong>Inspiración Semanal:</strong> Escucha las historias de
                quienes han roto con sus cadenas digitales.
              </li>
            </ul>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <IframeNewsletter src="https://embeds.beehiiv.com/4bac08d8-cef4-44c7-ac9d-4cb41094e2c3?slim=true" />

              {/* <Input
                className="flex-1"
                placeholder="Tu mejor Email"
                fullWidth
                color="primary"
              />
              <Button
                className="w-full md:w-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-lg text-white py-6 px-6 lg:px-10"
                size="lg"
              >
                Suscríbete Gratis
              </Button> */}
            </div>
            <div className="text-black text-sm mt-4">
              Ya somos 23 lectores! ⭐⭐⭐⭐⭐
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0 lg:px-6">
            <Image
              src="newsletter.png"
              alt="Newsletter image"
              width={300} // Default width, you can adjust it based on your design requirement
              height={400} // Default height, adjust accordingly
              className="w-auto h-auto transform transition-all duration-300 ease-in-out md:w-64 md:h-85 lg:w-96 lg:h-128"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
