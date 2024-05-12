import React, { useState, useEffect, useRef } from "react";
import { Link } from "@nextui-org/link";

import { Avatar, Button, Tooltip } from "@nextui-org/react";

import Image from "next/image";

import CountdownTimer from "@/components/CountdownTimer";

import WistiaVideo from "@/components/WistiaVideo";
import SocialProof from "@/components/SocialProof";

export const HeroSection = () => {
  return (
    <>
      <div className="relative px-0 first-letter:container flex flex-col lg:flex-row lg:flex-grow xl:max-w-none bg-white text-black m-0 text-center">
        {/* Fondo específico para HeroSection con posición relativa y altura mínima */}
        <div className="relative z-10 w-full bg-slate-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          {/* <div className="bg-[radial-gradient(circle_800px_at_100%_200px,#FFE3A4,transparent)]"> */}
          {/* Contenido del HeroSection */}
          <div className="relative p-6 md:mt-28 ">
            <h1 className=" text-4xl font-bold tracking-tighter lg:text-5xl xl:text-7xl md:px-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
                Libertad Digital:{" "}
              </span>
              Convierte Tiempo Perdido en
              <span className="underline decoration-8 decoration-custom-yellow">
                {" "}
                Logros Reales y un Futuro con Propósito
              </span>
              🎯
            </h1>
            <h2 className="text-2xl tracking-tighter pt-3 md:px-32  lg:text-3xl xl:text-4xl">
              Siempre supe que pasaba demasiado tiempo en mi teléfono, pero no
              sabía cómo parar. Me perdía en las redes sociales, viendo la vida
              de otros en lugar de vivir la mía. Como muchos, caí en las garras
              de las nuevas adicciones digitales.
              <br /> ¿Estás listo para cambiar eso juntos?
            </h2>
            <div className="text-center font-bold px-4 mt-6">
              ⏳ Oferta Limitada: ¡Inscríbete antes de que se cierre el acceso!
              ⏳
              <br />
              <span className="font-bold text-xl">
                <CountdownTimer />
              </span>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-full">
              <div className="w-full px-4 lg:w-auto">
                <Button
                  onClick={() => {
                    const section = document.getElementById("seccion-compra");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full md:w-80 lg:mt-7 mx-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-lg shadow-custom-blue animate-pulse text-white py-6 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                >
                  <Image
                    src="shoppingcart.png"
                    alt="Carrito de compras"
                    width={32}
                    height={32}
                    className="w-8 h-8 absolute left-4 md:left-6 lg:left-8"
                  />
                  Comienza Ahora
                </Button>
                <p className="italic text-center text-lg lg:text-xl mt-2">
                  Garantía exclusiva de 30 días
                </p>
              </div>
              <div className="w-full px-4 lg:w-auto mt-4 lg:mt-0 lg:px-0">
                <Button
                  href="https://carlitosnina.notion.site/Una-Vida-M-s-All-de-las-Pantallas-GRATIS-35df50bd12e84052821efc9f6a4087b9?pvs=4"
                  as={Link}
                  isExternal
                  color="primary"
                  variant="light"
                  className="w-full md:w-80 mx-auto text-xl lg:text-2xl font-bold text-custom-orange py-6  px-6 lg:px-10 flex items-center justify-center"
                >
                  Ver Demo ⮕
                </Button>
              </div>
            </div>
            <div className=" lg:p-6 mt-4 lg:mx-32 xl:mx-52">
              <WistiaVideo />
            </div>
            <div className="lg:p-6 mt-4 mx-auto md:w-[550px] flex">
              <SocialProof />
            </div>
            <h2 className="text-center font-bold md:px-4 text-xl tracking-tighter lg:text-xl xl:text-2xl 2xl:mx-auto">
              Basado en las estrategias comprobadas de los maestros del
              desarrollo personal y la productividad
            </h2>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
