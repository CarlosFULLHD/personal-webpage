import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <>
      <div className="relative px-0 container flex flex-col lg:flex-row lg:flex-grow xl:max-w-none text-black dark:text-white m-0 min-h-lvh">
        <div className="relative z-10 w-full bg-off-white dark:bg-background-dark bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1b1b1b_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1b_1px,transparent_1px)]">
          <div className="relative py-6 md:mt-28 flex flex-col lg:flex-row">
            <div className="p-4">
              <h1 className="text-4xl font-bold text-yellow-dark tracking-tighter lg:text-5xl xl:text-7xl md:px-16">
                Junior Full Stack Developer
              </h1>
              <h2 className="text-2xl tracking-tighter pt-3 md:px-32 lg:text-3xl xl:text-4xl">
                Hello!! I'm Carlos Nina, currently living in Bolivia. I'm
                proactive, competitive, and always eager to learn. I love
                tackling challenges and often teach myself new technologies.
                Currently, I am learning Keycloak and applying Spring Boot with
                microservices in my Thesis.
              </h2>
            </div>
            <div className="p-4 rounded-xl">
              <Image
                src="jamesclear-photo.webp" // Use your Cloudflare URL pointing, FALLBACK
                alt="Foto de James Clear de Hábitos Atómicos"
                width={100} // Specify width
                height={100} // Specify height
                className="w-full aspect-square object-cover xl:max-w-80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-full">
            <div className="w-full px-4 lg:w-auto">
              <Button
                onClick={() => {
                  const section = document.getElementById("modalidades");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full md:w-80 lg:mt-7 mx-auto text-2xl font-bold bg-yellow-light dark:bg-yellow-dark hover:text-black shadow-lg shadow-blue-light  text-white py-6 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              >
                Descubre Más
              </Button>
            </div>
            <div className="w-full px-4 lg:w-auto mt-4 lg:mt-0 lg:px-0">
              <Button
                href="#inscripcion"
                className="w-full md:w-80 mx-auto text-xl lg:text-2xl font-bold text-yellow-dark md:mt-6  py-6 px-6 lg:px-10 flex items-center justify-center"
              >
                Inscríbete Ahora ⮕
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
