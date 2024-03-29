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
          Si te desprecias a ti mismo o te culpas por lo que haces, hablandote mal a tí mismo, eso afecta a tu autopercepción(identidad) la
          persona quien eres,{" "}
          <span className="font-bold">
            James te guiará para que esculpas tus días con hábitos que realmente
            cuentan. Dará vuelta a ese discurso de desprecio que te tienes y lo
            mejorará con el tiempo hasta que pase lo contrario gracias a tus
            hábitos, por eso debemos empezar pequeño.
          </span>
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
          Si te comparas con los demás, en instagram, facebook, al mirar sus vidas magníficas te sientes mal, porque cuando miras tu vida te encuentras
          caos y pura tragedia, tienes malos amigos y no tomas responsabilidad
          por tu vida.{" "}
          <span className="font-bold">
            Jordan te enseñará a enfrentar la vida con valentía y a convertirte
            en una luz en tus momentos más oscuros.
          </span>
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
          <br />
          Si crees que no puedes lograr algo que sueñas y piensas que no puedes vivir sin el
          celular, que debes estar conectado siempre, porque puede pasar una
          emegencia.{" "}
          <span className="font-bold">
            Tony te enseñará a encontrar un mejor camino, a desafiar esas
            creencias limitantes, a encontrar el camino hacia la libertad y a
            dejar que otras personas decidan como te sientes, para despertar el
            gigante que tienes dentro.
          </span>
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
          Si te dejas dominar por la opinion de los demás, que ellos decidan
          que harás con tu vida y solamente te quejas de los problemas, sin ver
          un sentido a la vida.{" "}
          <span className="font-bold">
            Ryan te enseñará a dejar de vivir para los demás, a ver que cada
            distracción es una oportunidad para crecer. Él conversa contigo
            sobre cómo golpe de la vida puede fortalecerte.
          </span>
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
          Si no puedes concentrarte, tienes problemas con la tecnología y no puedes para de usarla...
          <br />
          <span className="font-bold">
            Cal Newport te enseñará a batallar contra la sobrecarga tecnológica,
            a simplificar tu vida digital para que puedas concentrarte en lo que
            realmente importa.
          </span>
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
          Si te preguntas cual es el sentido de la vida,¿Por qué viniste a este mundo?, ¿Cual es tú propósito?...
          <span className="font-bold">
            Viktor Frankl tiene las respuestas, él te mostrará cómo encontrar un
            propósito que sea más fuerte que la dependencia hacia la tecnología.
          </span>
        </div>
      </div>
    </section>
  );
};
