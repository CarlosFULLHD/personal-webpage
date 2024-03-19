import Image from "next/image";
import { Skeleton } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

export const AuthorsSection = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Función para cambiar el estado a cargado una vez que la imagen ha terminado de cargar
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="m-0 lg:max-w-3xl">
      <div className="container lg:p-0 flex flex-col md:flex-row lg:flex-grow xl:max-w-none py-3 text-black m-0 md:my-0">
        <div className=" lg:text-left md:flex md:items-center md:basis-1/3 lg:basis-2/8 lg:p-0 xl:text-3xl 2xl:text-4xl xl:justify-end bg-white rounded-2xl max-w-44 max-h-44 overflow-hidden md:mx-3 md:my-auto md:max-h-80 lg:max-w-md xl:max-w-lg">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <picture>
              {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/jamesclear-photo.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/jamesclear-photo.jpg"
                type="image/jpeg"
              />
              <Image
                src="jamesclear-photo.jpg" // Use your Cloudflare URL pointing, FALLBACK
                alt="Foto de James Clear de Hábitos Atómicos"
                width={256} // Specify width
                height={256} // Specify height
                className="w-full aspect-square object-cover xl:max-w-80"
                onLoad={handleImageLoad} // Se llama a esta función una vez que la imagen ha terminado de cargar
              />
            </picture>
          </Skeleton>
        </div>
        <div className="md:basis-1/2 lg:basis-6/8 md:ml-6 text-xl mt-2 p-4 lg:text-left text-black bg-white rounded-xl  lg:max-w-sm ">
          <span className="text-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl ">
            James Clear
          </span>
          <br />
          Es como ese amigo que te muestra que el cambio monumental comienza con
          el mínimo esfuerzo. Su libro, "Hábitos Atómicos", te enseñará que con
          pequeñas acciones consistentes puedes reformar tu vida entera. Él te
          guiará para que esculpas tus días con hábitos que realmente cuentan.
        </div>
      </div>
      {/* DIV AL LADO CONTRARIO */}
      <div className="container md:my-0 lg:p-0 lg:mt-2 flex flex-col md:flex-row-reverse lg:flex-grow xl:max-w-none py-3 text-black m-0">
        <div className=" lg:text-left md:flex md:items-center md:basis-1/3 lg:basis-2/8 lg:p-0 xl:text-3xl 2xl:text-4xl xl:justify-end bg-white rounded-2xl max-w-44 max-h-44 overflow-hidden md:mx-3 my-auto md:max-h-80 lg:max-w-md xl:max-w-lg">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <picture>
              {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/jordanpeterson-photo.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/jordanpeterson-photo.jpg"
                type="image/jpeg"
              />
              <Image
                src="jordanpeterson-photo.jpg" // Use your Cloudflare URL pointing, FALLBACK
                alt="Jordan Peterson de 12 Reglas para Vivir Un antidoto al caos"
                width={256} // Specify width
                height={256} // Specify height
                className="w-full aspect-square object-cover xl:max-w-80"
                onLoad={handleImageLoad} // Se llama a esta función una vez que la imagen ha terminado de cargar
              />
            </picture>
          </Skeleton>
        </div>
        <div className="md:basis-2/3 lg:basis-6/8 md:ml-6 text-xl mt-2 p-4 lg:text-left text-black bg-white rounded-xl  lg:max-w-sm ">
          <span className="text-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl ">
            Jordan Peterson
          </span>
          <br />
          Cuando sientas que la vida te desafía, Jordan Peterson te dirá, como
          lo hace en "12 Reglas para Vivir", que en el corazón del caos siempre
          puedes encontrar orden. Él conversará contigo sobre cómo enfrentar la
          vida con valentía y cómo cada regla puede ser una luz en tus momentos
          más oscuros.
        </div>
      </div>
      {/* OTRO AUTOR */}
      <div className="container md:my-0 md:py-0 md:px-6 lg:p-0 flex flex-col md:flex-row lg:flex-grow xl:max-w-none py-3 text-black m-0 lg:mt-2">
        <div className=" lg:text-left md:flex md:items-center md:basis-1/3 lg:basis-2/8 lg:p-0 xl:text-3xl 2xl:text-4xl xl:justify-end bg-white rounded-2xl max-w-44 max-h-44 overflow-hidden md:mx-3 my-auto md:max-h-80 lg:max-w-md xl:max-w-lg">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <picture>
              {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/tonyrobbins-img.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/tonyrobbins-img.jpg"
                type="image/jpeg"
              />
              <Image
                src="tonyrobbins-img.jpg"
                alt="Foto de Tony Robbins de Poder sin Límites y Despertando al gigante interior"
                width={256} // Specify width
                height={256} // Specify height
                className="w-full aspect-square object-cover xl:max-w-80"
                onLoad={handleImageLoad} // Se llama a esta función una vez que la imagen ha terminado de cargar
              />
            </picture>
          </Skeleton>
        </div>
        <div className="md:basis-1/2 lg:basis-6/8 md:ml-6 text-xl mt-2 p-4 lg:text-left text-black bg-white rounded-xl  lg:max-w-sm ">
          <span className="text-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl ">
            Tony Robbins
          </span>
          <br /> Es como ese entrenador incansable que te impulsa a ir más allá
          de tus límites. En sus libros, como "Poder sin Límites", te alienta a
          que despiertes al gigante que llevas dentro. Con Tony, aprenderás a
          redirigir tu energía del scroll infinito hacia metas que enciendan tu
          pasión.
        </div>
      </div>
      {/* DIV AL LADO CONTRARIO */}
      <div className="container md:my-0 md:py-0 md:px-6 lg:p-0 lg:mt-2 flex flex-col md:flex-row-reverse lg:flex-grow xl:max-w-none py-3 text-black m-0">
        <div className=" lg:text-left md:flex md:items-center md:basis-1/3 lg:basis-2/8 lg:p-0 xl:text-3xl 2xl:text-4xl xl:justify-end bg-white rounded-2xl max-w-44 max-h-44 overflow-hidden md:mx-3 my-auto md:max-h-80 lg:max-w-md xl:max-w-lg">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <picture>
              {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/ryanholiday-img.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/ryanholiday-img.jpg"
                type="image/jpeg"
              />
              <Image
                src="ryanholiday-photo.jpg"
                alt="Foto de Ryan Holiday de El Obstáculo es el
            Camino - Disciplina es el destino, Diario para estoicos, el ego es el enemigo"
                width={256} // Specify width
                height={256} // Specify height
                className="w-full aspect-square object-cover xl:max-w-80"
                onLoad={handleImageLoad} // Se llama a esta función una vez que la imagen ha terminado de cargar
              />
            </picture>
          </Skeleton>
        </div>
        <div className="md:basis-2/3 lg:basis-6/8 md:ml-6 text-xl mt-2 p-4 lg:text-left text-black bg-white rounded-xl  lg:max-w-sm ">
          <span className="text-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl ">
            Ryan Holiday
          </span>
          <br />
          Te introduce a la atemporalidad del estoicismo en "El Obstáculo es el
          Camino", haciéndote ver que cada distracción es una oportunidad para
          crecer. Él conversa contigo sobre cómo cada desvío puede fortalecer tu
          enfoque y tu resolución.
        </div>
      </div>
      <div className="container md:my-0 md:py-0 md:px-6 lg:p-0 flex flex-col md:flex-row lg:flex-grow xl:max-w-none py-3 text-black m-0 lg:mt-2">
        <div className=" lg:text-left md:flex md:items-center md:basis-1/3 lg:basis-2/8 lg:p-0 xl:text-3xl 2xl:text-4xl xl:justify-end bg-white rounded-2xl max-w-44 max-h-44 overflow-hidden md:mx-3 my-auto md:max-h-80 lg:max-w-md xl:max-w-lg">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <picture>
              {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/calnewport-img.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/calnewport-img.jpg"
                type="image/jpeg"
              />
              <Image
                src="calnewport-photo.jpg"
                alt="Foto de Cal Newport de Enfócate - Minimalismo digital"
                width={256} // Specify width
                height={256} // Specify height
                className="w-full aspect-square object-cover xl:max-w-80"
                onLoad={handleImageLoad} // Se llama a esta función una vez que la imagen ha terminado de cargar
              />
            </picture>
          </Skeleton>
        </div>
        <div className="md:basis-1/2 lg:basis-6/8 md:ml-6 text-xl mt-2 p-4 lg:text-left text-black bg-white rounded-xl  lg:max-w-sm ">
          <span className="text-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl ">
            Cal Newport
          </span>
          <br />
          Tendrás a un aliado en la batalla contra la sobrecarga tecnológica.
          Cal te invita a simplificar tu vida digital para que puedas
          concentrarte en lo que realmente importa, te enseña a declinar
          gentilmente la constante demanda de atención de tu celular.
        </div>
      </div>
      {/* DIV AL LADO CONTRARIO */}
      <div className="container md:my-0  md:py-0 md:px-6 lg:p-0 lg:mt-2 flex flex-col md:flex-row-reverse lg:flex-grow xl:max-w-none py-3 text-black m-0">
        <div className=" lg:text-left md:flex md:items-center md:basis-1/3 lg:basis-2/8 lg:p-0 xl:text-3xl 2xl:text-4xl xl:justify-end bg-white rounded-2xl max-w-44 max-h-44 overflow-hidden md:mx-3 my-auto md:max-h-80 lg:max-w-md xl:max-w-lg">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <picture>
              {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/viktorfrakl-img.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/viktorfrakl-img.jpg"
                type="image/jpeg"
              />
              <Image
                src="viktorfrakl-img.jpg"
                alt="Foto de Viktor Frankl de El Hombre en Busca de Sentido"
                width={256} // Specify width
                height={256} // Specify height
                className="w-full aspect-square object-cover xl:max-w-80"
                onLoad={handleImageLoad} // Se llama a esta función una vez que la imagen ha terminado de cargar
              />
            </picture>
          </Skeleton>
        </div>
        <div className="md:basis-2/3 lg:basis-6/8 md:ml-6 text-xl mt-2 p-4 lg:text-left text-black bg-white rounded-xl  lg:max-w-sm ">
          <span className="text-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl ">
            Viktor Frankl
          </span>
          <br />
          Se convertirá en tu consejero espiritual a través de su conmovedor
          libro, "El Hombre en Busca de Sentido". Desde las profundidades del
          sufrimiento humano, te mostrará cómo encontrar un propósito que sea
          más fuerte que cualquier cadena de notificaciones.
        </div>
      </div>
    </section>
  );
};
