"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DetailedCard from "@/components/DetailedCard";
import { Avatar, Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import BonusCard from "@/components/BonusCard";
import { AuthorsSection } from "@/components/AuthorsSection";
import { ModulesSection } from "@/components/ModulesSection";
import { FaqsSection } from "@/components/FaqsSection";
import { BonusSection } from "@/components/BonusSection";
import Image from "next/image";
import { FooterSection } from "@/components/FooterSection";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="container md:pt-16 md:px-6 flex flex-col lg:flex-row lg:flex-grow xl:max-w-none py-3 bg-white text-black m-0  ">
        <div className=" lg:text-left lg:basis-1/2 lg:p-0  xl:text-3xl 2xl:text-4xl xl:pl-14">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl xl:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
              Libertad Digital:{" "}
            </span>
            Transforma 1,460 Horas de Celular en
            <span className="underline decoration-8 decoration-custom-yellow">
              {" "}
              Logros Reales y un Futuro con Propósito
            </span>
            🎯
          </h1>
          <h2 className="md:px-4 text-2xl tracking-tighter pt-3 lg:max-w-[600px] lg:text-3xl xl:text-4xl">
            Un programa completo, Domina hábitos de vanguardia, potencia tu
            rendimiento, maximiza tu productividad y revitaliza tu descanso con
            <span className="underline decoration-4 decoration-custom-blue">
              {" "}
              un cambio duradero en tu vida.
            </span>
            <span className="block md:inline">
              {" "}
              (En una plantilla de Notion)
              <Image
                src="Notion_app_logo.png"
                alt="Logo de Notion"
                width={32} // Specify width
                height={32} // Specify height
                className="w-8 h-8 inline lg:w-12 lg:h-12"
              />
            </span>
            <span className="block font-bold">
              Estás a un clic de transformar tu vida
            </span>
          </h2>
          <Button
            onClick={() => {
              const section = document.getElementById("seccion-compra");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mx-auto md:mx-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-lg shadow-custom-blue animate-pulse text-white w-40 mt-6 py-6 px-36 lg:px-44 xl:px-40 xl:py-8 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:animate-none"
          >
            <Image
              src="shoppingcart.png"
              alt="Carrito de compras"
              width={32} // Specify width
              height={32} // Specify height
              className="w-8 h-8 absolute left-4"
            />
            Quiero unirme!
          </Button>
          <p className="italic mb-6 block text-center lg:text-xl">
            Garantía exclusiva de 30 días
          </p>

          <div className="flex gap-4 items-center justify-center lg:absolute lg:left-48 lg:w-8/12 lg:z-10 xl:left-64 2xl:static 2xl:mx-auto 2xl:w-full">
            <Avatar
              isBordered
              color="warning"
              size="lg"
              src="https://d1kdkr2pswehq6.cloudfront.net/jamesclear-photo.webp"
              className="lg:w-20 lg:h-20 lg:text-large"
            />
            <Avatar
              isBordered
              color="warning"
              size="lg"
              src="https://d1kdkr2pswehq6.cloudfront.net/jordanpeterson-photo.webp"
              className="lg:w-20 lg:h-20 lg:text-large"
            />
            <Avatar
              isBordered
              color="warning"
              size="lg"
              src="https://d1kdkr2pswehq6.cloudfront.net/tonyrobbins-img.webp"
              className="lg:w-20 lg:h-20 lg:text-large"
            />
            <Avatar
              isBordered
              color="warning"
              size="lg"
              src="https://d1kdkr2pswehq6.cloudfront.net/calnewport-img.webp"
              className="lg:w-20 lg:h-20 lg:text-large"
            />
            <Avatar
              isBordered
              color="warning"
              size="lg"
              className="absolute invisible md:static md:visible lg:w-20 lg:h-20 lg:text-large"
              src="https://d1kdkr2pswehq6.cloudfront.net/ryanholiday-img.webp"
            />
            <Avatar
              isBordered
              color="warning"
              size="lg"
              className="absolute invisible md:static md:visible lg:w-20 lg:h-20 lg:text-large"
              src="https://d1kdkr2pswehq6.cloudfront.net/viktorfrakl-img.webp"
            />
          </div>
          <div className="lg:h-96 bg-white lg:relative ">
            <div className="lg:absolute lg:left-64 lg:w-full lg:top-20 2xl:static 2xl:items-center">
              <h2 className="text-center font-bold md:px-4 text-xl tracking-tighter pt-3 lg:max-w-[600px] lg:text-2xl xl:text-3xl 2xl:mx-auto">
                Basado en las estrategias comprobadas de los maestros del
                desarrollo personal y la productividad
              </h2>
              <h3 className="text-center mt-4 italic font-bold md:px-4 text-xl tracking-tighter pt-3 lg:max-w-[600px] lg:text-2xl xl:text-3xl 2xl:mx-auto">
                Desbloquea 4 Lecciones Clave y 4 Plantillas Premium sin costo
                alguno.
                <br />
              </h3>

              <Button
                href="https://carlitosnina.notion.site/Una-Vida-M-s-All-de-las-Pantallas-GRATIS-35df50bd12e84052821efc9f6a4087b9?pvs=4"
                as={Link}
                isExternal
                color="primary"
                className="mb-4 mx-auto md:mx-auto text-xl lg:text-2xl font-bold hover:text-white hover:bg-custom-yellow shadow-lg shadow-custom-background text-black bg-white border-custom-yellow border-2 w-10 mt-1 py-6 px-28 lg:px-30 flex items-center justify-center relative"
              >
                🎁Abrir mi regalo
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:basis-1/2 lg:p-6">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md h-auto"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source
              src="https://d1kdkr2pswehq6.cloudfront.net/notion_libertaddigital_adiccionalcelular.webm"
              type="video/webm"
            />
            <source
              src="https://d1kdkr2pswehq6.cloudfront.net/notion_libertaddigital_adiccionalcelular.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta la etiqueta "video".
          </video>
        </div>
      </div>

      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 text-white">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-2xl tracking-espaciadomas font-bold md:text-3xl lg:text-4xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            EL MUNDO ESTÁ CAMBIANDO
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            ¿Por Qué Debería Importarme la Desintoxicación Digital?
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            El futuro de vivir plenamente está en reconectar con lo esencial.
          </em>
        </div>
      </div>
      <h2 className="container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black mt-6 shadow-inner ">
        <span className="font-bold">
          Más de 1,460 horas al año se esfuman frente a la pantalla de tu
          celular.
        </span>{" "}
        <br />
        <br />
        Eso son 4 horas diarias que podrías invertir en
        <span className="font-bold">
          {" "}
          realizar tus sueños, mejorar tu físico y mentalidad.
        </span>
        <br />
        <br />
        Puede parecer tu culpa... en parte sí lo es, pero en esta era digital en
        la que las industrias hacen lo mejor para
        <span className="font-bold"> obtener nuestra atención</span> es
        complicado no hacerlo.
        <br />
        <br />
        Cada notificación, cada alerta, te encadena nuevamente a esos malos
        comportamientos.
        <br />
        <br />
        Noches en vela, mirando la pantalla hasta que tus ojos arden. El celular
        no solo roba tu sueño, sino que también agota tu salud mental y física.
        <br />
        <br />
        Estrés, ansiedad, y un ciclo de insomnio que parece no tener fin.
        <span className="font-bold">
          {" "}
          Un sentimiento de culpa por desperdiciar esas horas te atormenta...
        </span>
        <br />
        <br />
        <span className="font-bold">
          ¿Cuánto más vas a permitir que este pequeño dispositivo dicte cómo te
          sientes?
        </span>
        <br />
        <br />
        Necesitas cambiar tu autopercepción para mantener un cambio permanente y
        así te liberes de esa adicción al celular
        <br />
        <br />
        Eso lo haces con:
        <span className="font-bold">
          {" "}
          La autopercepción de uno mismo también llamado identidad.
        </span>
        <br />
        <br />
        No se trata de simples trucos o soluciones temporales como afirmaciones
        sin sentido.
        <br />
        <br />
        Son Varias habilidades y conocimientos que una a una se complementan
        ayudandote a cambiar tu autopercepción.
        <br />
        <br />
        Estas habilidades y conocimientos no solo se pueden aprender, sino que
        <span className="underline decoration-4 decoration-custom-blue">
          {" "}
          son esenciales
        </span>{" "}
        para cualquier persona que desee liberar su máximo potencial con una
        vida plena.
        <br />
        <br />
        <span className="text-bold">Este curso es para ti si:</span>
        <ul className="list-disc px-8">
          <li>
            Anhelas{" "}
            <span className="text-bold">
              liberarte del ciclo constante de distracción y procrastinación
            </span>
            que el celular impone en tu vida.
          </li>
          <li>
            Te preocupas por{" "}
            <span className="text-bold">
              desperdiciar tu vida en trivialidades digitales
            </span>
            , soñando con lo que podrías lograr si solo pudieras desconectar.
          </li>
          <li>
            Sientes que{" "}
            <span className="text-bold">
              la adicción al celular te ha robado momentos irreemplazables
            </span>{" "}
            con seres queridos, oportunidades de crecimiento personal y la
            capacidad de disfrutar del aquí y ahora.
          </li>
          <li>
            Buscas una forma de{" "}
            <span className="text-bold">
              vivir con propósito, sentido y autenticidad
            </span>{" "}
            en un mundo que parece valorar lo opuesto.
          </li>
          <li>
            Intentaste mejorar tu vida sin éxito porque no tienes disciplina
            necesaria, no tienes dirección y no sabes que hacer.
          </li>
          <li>
            Sabes que hay muchos cursos en las redes sociales gratuitos y de
            pago
            <span className="text-bold">
              {" "}
              pero se siente que todos son lo mismo
            </span>{" "}
            (y no estas seguro en cual debes invertir tu TIEMPO y dinero)
          </li>
        </ul>
        <br />
        <span className="text-bold">
          ¿Te identificas con alguno de estos puntos?
        </span>
        <br />
        <br />
        Si es así, te ayudaré a transformar tu vida y resolver esos problemas de
        una vez por todas. 💪
        <br />
      </h2>
      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 my-6 text-white">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-2xl tracking-espaciadomas font-bold md:text-3xl lg:text-4xl text-gradient leading-none bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            EL INSTRUCTOR
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            ¿Quién es este tipo que dice todas estas tonterías?
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            Solo soy alguien que quiere ayudarte
          </em>
        </div>
      </div>
      <h2 className="container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        Probé todas las soluciones superficiales:
        <ul className="list-disc px-8">
          <li>Aplicaciones de bloqueo</li>
          <li>Rutinas de desconexión</li>
          <li>Ayuno de dopamina</li>
          <li>Meditaciones guiadas</li>
        </ul>
        Lo intenté todo...
        <br />
        Después de incontables horas pegado a la pantalla, innumerables intentos
        fallidos y noches en vela buscando la solución, estaba exhausto
        <br />
        <br />
        No solo había fallado en cada táctica, sino que cada intento me alejaba
        más de la verdadera solución <br />
        <br />
        Sabía que necesitaba una respuesta que atacara la raíz de mi problema,
        algo que finalmente encontré tras años de lectura y experimentación{" "}
        <br />
        <br />
        Quizás era porque estaba demasiado enganchado al celular, o tal vez era
        especial y necesitaba una solución excepcional para romper el ciclo{" "}
        <br />
        <br />A pesar de mi adicción de más de 14 horas diarias frente a
        pantallas, principalmente el celular, logré controlarla y cambiar mi
        vida radicalmente
      </h2>
      <div className="container my-4 md:my-0 md:py-4 md:px-6 flex flex-col md:flex-row lg:flex-grow xl:max-w-none py-3 text-black m-0 relative">
        <div className=" lg:text-left md:basis-1/2 lg:p-0 xl:text-3xl 2xl:text-4xl">
          <div className="relative w-32 h-32 mx-auto md:w-44 md:h-44 md:mr-10 lg:mr-20 xl:mr-36">
            <picture className="">
              {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/carlitos_photo.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d1kdkr2pswehq6.cloudfront.net/carlitos_photo.jpg"
                type="image/jpeg"
              />
              <Image
                src="carlitos_photo.jpg"
                alt="Foto del instructor carlitos"
                objectFit="contain"
                fill
                className=""
              />
            </picture>
          </div>
        </div>
        <div className="text-xl lg:text-2xl lg:text-left md:basis-1/2 lg:p-0  text-white lg:max-w-sm">
          <span className="text-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-4xl ">
            Hey, soy Carlitos
          </span>
          <br />
          Estudiante de último año en ingeniería de sistemas y contabilidad
          <br />
          Soy un lector amante de la filosofía y psicología
        </div>
      </div>
      <h2 className="container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        Mi historia comienza sumergido en el peor escenario posible con las
        redes sociales
        <br />
        <br />
        Una espiral de consumo sin fin, donde cada notificación era una cadena
        más en mi prisión digital
        <br />
        <br />
        Cientas de horas desperdiciadas en el celular, así nadie puede lograr
        sus sueños y objetivos, me dí cuenta de eso por las malas
        <br />
        <br />
        Reprobando asignaturas en la universidad, viendo como otros mejoran y yo
        me quedo en el mismo lugar...
        <br />
        <br />
        Pero, poco a poco, aplicando las lecciones de cada libro que leía,
        empecé a mejorar mi vida, gracias a esos maestros que tuve
        <br />
        <br />
        Cada día era una conversación con mentores que conocí por sus libros y
        trabajos, esas palabras resonaban como un diálogo interno conmigo
        <br />
        <br />
        Me tomaba las noches para reflexionar sobre mis éxitos, para celebrar y
        planificar mejoras aún más significativas
        <br />
        <br />
        Pequeños pasos incrementales hacia un futuro que, según Jordan Peterson
        prometía ser mejor
        <br />
        <br /> Y así fue como gradualmente rompí las cadenas de la tecnología y
        comencé a utilizarla como una herramienta, en lugar de ser devorado por
        ella.
        <br />
        <br />
        Es por eso que creé este curso moderno
        <br />
        <br />
        <span className="font-bold">
          Todos saben que una gran adicción de este siglo es la tecnología,
          principalmente... <br /> El celular.
        </span>
        <br />
        <br />
        Pero nadie ofrecía una solución verdadera y mucho menos clara
        <br />
        <br />
        Existen soluciónes que no duran con el tiempo, la que te ofrezco te
        <span className="font-bold"> durará de por vida </span> y finalmente te
        devolverá cientas de horas que podrías haber desperdiciado.
        <br />
        <br />
        <span className="font-bold">
          Podrás lograr tus objetivos, tus metas, crear un futuro del que
          siempre soñaste, un futuro que quizá pensaste que no nunca serías
          capaz de lograr.
        </span>
        <br />
        <br />
        Con este programa, sé que serás capaz de hacerlo.
        <br />
        <br />
        Puede sonar increíble, pero en realidad como dije antes, no lo descubri
        yo.
        <br />
        Fueron ellos: (Aplausos por favor)
        <br />
      </h2>
      <AuthorsSection />
      <h2 className="mt-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        David Goggins, Alex Hormozi, Chris Williamson, Ali Abdaal..., hay muchos
        más nombres conocidos y toda su sabiduría esta concentrada en estas
        lecciones
        <br />
        <span className="font-bold">
          Ahora, vengo a compartir contigo las lecciones clave para que puedas
          triunfar sobre esta adicción que te roba incontables horas de tu vida.
        </span>
      </h2>
      <Button
        onClick={() => {
          const section = document.getElementById("seccion-compra");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="mx-auto md:mx-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-2xl shadow-custom-yellow  text-white w-40 my-6 mb-12 py-6 px-40 lg:px-50 xl:px-50 xl:py-8 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:animate-none"
      >
        Estoy listo para unirme
      </Button>
      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 my-6 text-white">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-2xl tracking-espaciadomas font-bold md:text-3xl lg:text-4xl text-gradient leading-none bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            LA HABILIDAD DEL SIGLO
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            Vivir Intencionalmente en la Era Digital
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            En este mundo acelerado, la desintoxicación digital no es un lujo,
            es una necesidad.
          </em>
        </div>
      </div>
      <h2 className="mt-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        Al unirte, obtendrás acceso a:
      </h2>
      <ModulesSection />
      <Button
        onClick={() => {
          const section = document.getElementById("seccion-compra");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="mx-auto md:mx-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-2xl shadow-custom-yellow  text-white w-40 my-6 mb-12 py-6 px-40 lg:px-50 xl:px-50 xl:py-8 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:animate-none"
      >
        Estoy listo para unirme
      </Button>
      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 mb-6 lg:m-0 text-white">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-2xl tracking-espaciadomas font-bold md:text-3xl lg:text-4xl text-gradient leading-none bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            Y ESO NO ES TODO
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            ¿Alguien dijo Bonus gratuitos?
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            Si compras ahora recibirás todos estos EXCLUSIVOS BONUS
          </em>
        </div>
      </div>
      {/* BONUS CARD DE BONUSES PARA EL CURSO */}
      <BonusSection />
      <div
        id="seccion-compra"
        className="bg-custom-blue w-full text-center flex justify-center items-center py-3 text-white"
      >
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-2xl tracking-espaciadomas font-bold md:text-3xl lg:text-4xl text-gradient leading-none bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            UNETE HOY
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            Únete a una comunidad de personas decididas a transformar su vida
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            Obtén acceso inmediatamente
          </em>
        </div>
      </div>
      <div className=" flex flex-col mx-2 md:flex-row gap-6">
        <h2 className="mt-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-gray-200 rounded-lg text-black border-4 border-gray-500">
          <span className="font-bold text-center block text-3xl bg-clip-text text-gray-600">
            Curso Promedio
          </span>
          <span className="font-bold block text-4xl pb-3 items-center">
            <span className="text-5xl font-bold tracking-tight text-red-500 block items-center text-center ">
              $120/mes
            </span>
          </span>
          <span className="italic text-xl font-sans text-red-600 block text-center">
            Sin garantias y acceso limitado.
          </span>
          <span className="font-bold text-center block text-gray-600">
            Resúmenes superficiales, falta de experiencia práctica.
          </span>
          <br />
          ❌ Carece de herramientas prácticas para aplicar el conocimiento y
          aprendizajes.
          <br />
          <br />
          ❌ Grupos de Discord inactivos, sin preocuparse en los problemas del
          cliente.
          <br />
          <br />
          ❌ Cursos que con el tiempo no se actualizan y se vuelven irrelevantes
          con el tiempo.
          <br />
          <br />
          ❌ Material repetitivo, sin profundización ni valor añadido.
          <br />
          <br />
          ❌ Sin bonificaciones o valor adicional, limitando la experiencia a lo
          que se ofrece inicialmente.
          <br />
          <br />❌ Costoso a largo plazo, sin compromiso con el éxito del
          cliente y accesos limitados por pagos mensuales.
          <br />
          <br />
          ❌ Quedarte con 8 segundos de atención.
          <br />
          <br />
          ❌ Seguir con horarios de sueño de 2 am
          <br />
          <br />
          ❌ Ansiedad, depresión y estrés por la tecnología.
          <br />
          <br />
          ❌ Sin claridad en el camino y soluciones falsas.
          <br />
          <br />❌ Ahorras hoy, pero pierdes más cada día por no actuar.
        </h2>
        <h2 className=" mt-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black border-4 border-custom-yellow">
          <span className="font-bold text-center block text-3xl bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            LIBERTAD DIGITAL
          </span>
          <span className="line-through text-2xl font-sans text-gray-500/70 block text-right mr-14 md:mr-28 lg:mr-36 xl:mr-48">
            $120
          </span>
          <span className="font-bold block text-4xl pb-3 items-center">
            <span className="text-5xl font-bold tracking-tight text-gray-900 block items-center text-center ">
              $69
            </span>
          </span>
          <span className="italic text-xl font-sans text-gray-500/70 block text-center">
            Un solo pago. Con garantía de 30 días!!
            <br />
          </span>
          <span className="font-bold text-center block">
            Desarrolla dominio sobre tu vida digital y personal con estrategias
            comprobadas para una transformación real.
          </span>
          <br />
          📘 Enfoque holístico y detallado sobre la vida digital y personal, con
          más de 20 módulos que abordan desde la desintoxicación digital hasta
          la construcción de una vida con propósito.
          <br />
          <br />
          💬 Incluye acceso a una comunidad exclusiva en Discord, facilitando el
          soporte entre pares, discusiones enriquecedoras y una red de apoyo
          motivacional.
          <br />
          <br />
          🔄 Comprometidos a dar actualizaciones regulares y mejoras del curso,
          basándose en retroalimentación real y tendencias emergentes,
          asegurando un aprendizaje siempre relevante.
          <br />
          <br />
          🎓 Lecciones profundas, basadas en las últimas investigaciones y las
          enseñanzas de expertos reconocidos en campos como la psicología,
          gestión del tiempo y filosofía.
          <br />
          <br />
          🎁 Bonificaciones exclusivas para los primeros 100 inscritos,
          incluyendo guías, actualizaciones y plantillas especiales.
          <br />
          <br />
          💸 Precio único con garantía de 30 días y acceso de por vida,
          representando una
          <span className="font-bold"> inversión a largo plazo </span>
          en desarrollo personal y profesional.
          <br />
          <br />
        </h2>
      </div>

      <Button
        href="https://shop.carlitosnina.com/checkout/buy/058aac3a-9043-4af5-b9ef-8768be268d0a?logo=0&discount=0"
        as={Link}
        className="mx-auto md:mx-auto text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-2xl shadow-custom-yellow  text-white w-40 mt-6 py-6 px-40 md:px-52 md:py-10 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:animate-none"
      >
        <Image
          src="shoppingcart.png"
          alt="Carrito de compras"
          width={25} // Specify width
          height={25} // Specify height
          className="w-6 h-6 absolute left-4 md:w-8 md:h-8"
        />
        Unirme a Libertad Digital!!
      </Button>

      <span className="italic text-xl font-sans  block text-center">
        Acceso completo y de por vida. Sin tarifas adicionales
      </span>
      <h2 className="my-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black border-4 border-custom-yellow">
        {" "}
        <span className="font-bold text-2xl lg:text-4xl block text-center">
          Decide Dentro, No Desde Afuera
        </span>
        <br />
        <span className="font-bold">No te pido que decidas sí o no hoy. </span>
        Te pido que{" "}
        <span className="font-bold">
          {" "}
          tomes una decisión completamente informada.{" "}
        </span>
        La única manera de hacer eso es desde dentro, no desde fuera.
        <br />
        Así que entra, experimenta todo lo que nuestro programa de
        Desintoxicación Digital tiene para ofrecerte y verifica si cada promesa
        que hacemos es real y valiosa para ti. Si lo es, entonces es tuyo para
        siempre. Si sientes que no es para ti, no hay problema.
        <br />
        Podrás tomar esa decisión completamente informada después de
        inscribirte, porque sabemos que no comprarías una casa sin mirar su
        interior primero.
        <br />
        <br />Y recuerda esto: si no estás feliz después de 29 minutos o 29
        días, yo tampoco lo estaré. Si en cualquier momento dentro de{" "}
        <span className="font-bold">los 30 días siguientes a tu compra </span>
        sientes que este camino no es el adecuado para ti, sea cual sea el
        motivo, te mereces recuperar cada centavo de tu inversión.
        <br />
        <br />
        Solo podemos ofrecer una garantía así cuando estamos seguros de que lo
        que tenemos es genuino y efectivo. Estoy bastante seguro de que al
        inscribirte en nuestro programa de Desintoxicación Digital, obtendrás
        exactamente lo que necesitas para transformar tu vida.
      </h2>
      <div className="my-2 container mx-auto flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        <h3 className="italic font-bold md:px-4 text-xl tracking-tighter pt-3 lg:max-w-[600px] lg:text-2xl xl:text-3xl">
          Accede gratuitamente a las primeras 4 lecciones de Libertad Digital:
          <br />
        </h3>
        <Button
          href="https://carlitosnina.notion.site/Una-Vida-M-s-All-de-las-Pantallas-GRATIS-35df50bd12e84052821efc9f6a4087b9?pvs=4"
          as={Link}
          isExternal
          color="primary"
          className="mb-4 mx-auto md:mx-auto text-xl lg:text-2xl font-bold bg-white hover:text-white hover:bg-custom-yellow shadow-lg shadow-custom-background text-black border-custom-yellow border-2 w-10 mt-1 py-6 px-28 lg:px-30 flex items-center justify-center relative"
        >
          🎁Ver mi regalo
        </Button>
      </div>

      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 text-white">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-2xl tracking-espaciadomas font-bold md:text-3xl lg:text-4xl text-gradient leading-none bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            TIENES PREGUNTAS?
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            Yo tengo respuestas
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            Asegurate de hacer la decisión correcta
          </em>
        </div>
      </div>
      <FaqsSection />
      <Button
        onClick={() => {
          const section = document.getElementById("seccion-compra");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="mx-auto md:mx-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-2xl shadow-custom-yellow  text-white w-40 my-6 mb-12 py-6 px-40 lg:px-50 xl:px-50 xl:py-8 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:animate-none"
      >
        Mis dudas están resueltas
      </Button>
      <FooterSection />
    </section>
  );
}
