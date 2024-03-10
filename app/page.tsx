"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DetailedCard from "@/components/DetailedCard";
import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import BonusCard from "@/components/BonusCard";
import { AuthorsSection } from "@/components/AuthorsSection";
import { ModulesSection } from "@/components/ModulesSection";
import { FaqsSection } from "@/components/FaqsSection";
import { BonusSection } from "@/components/BonusSection";
import Image from "next/image";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="container md:pt-16 md:px-6 flex flex-col lg:flex-row lg:flex-grow xl:max-w-none py-3 bg-white text-black m-0  ">
        <div className=" lg:text-left lg:basis-1/2 lg:p-0  xl:text-3xl 2xl:text-4xl xl:pl-14">
          <h1 className="text-5xl font-bold tracking-tighter md:inline lg:text-5xl xl:text-7xl">
            Si estas leyendo esto desde el celular
          </h1>
          <span className="text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange md:inline lg:block lg:text-5xl xl:text-7xl text-gradient">
            {" "}
            Tienes un problema
          </span>
          <h1 className="text-5xl font-bold tracking-tighter lg:text-5xl xl:text-7xl">
            Tengo la solución
          </h1>
          <h2 className="md:px-4 text-2xl tracking-tighter pt-3 lg:max-w-[600px] lg:text-3xl xl:text-4xl">
            Un Sistema de Desintoxicación Digital, Desarrollo Personal y
            Búsqueda de Propósito.
            <span className="block md:inline lg:block">
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
            <span className="block font-bold">¿Listo para el cambio?</span>
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
            Si, Estoy Listo
          </Button>
          <p className="italic mb-6 block text-center lg:text-xl">
            Garantía de Satisfacción de 30 días
          </p>

          <h3 className="italic font-bold md:px-4 text-xl tracking-tighter pt-3 lg:max-w-[600px] lg:text-2xl xl:text-3xl">
            Accede gratuitamente a las primeras 4 lecciones de Libertad Digital:
            <br />
          </h3>

          <Button
            href="https://carlitosnina.notion.site/Una-Vida-M-s-All-de-las-Pantallas-GRATIS-35df50bd12e84052821efc9f6a4087b9?pvs=4"
            as={Link}
            isExternal
            color="primary"
            className="mb-4 mx-auto md:mx-auto text-xl lg:text-2xl font-bold hover:text-white hover:bg-custom-yellow shadow-lg shadow-custom-background text-black border-custom-yellow border-2 w-10 mt-1 py-6 px-28 lg:px-30 flex items-center justify-center relative"
          >
            🎁Ver mi regalo
          </Button>
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
            Your browser does not support the video tag.
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
      <h2 className="container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black mt-6">
        La educación moderna está fallando en enseñarnos cómo vivir con la
        tecnololgía.
        <br />
        <br />
        Miles de personas viven una vida{" "}
        <strong>
          sin propósito y sienten que estan desperdiciando su vida
        </strong>
        <br />
        <br />
        La adicción al celular se ha convertido en una de las mayores adicciones
        en todo el mundo, afectando a adolescentes, universitarios y adultos.
        <br />
        <br />
        <ul className="list-disc px-8">
          <li>
            <strong>📈 El aislamiento digital está creciendo.</strong>
            <br />
            En un mundo hiperconectado, paradójicamente nos encontramos más
            solos que nunca.
          </li>
          <br />
          <li>
            <strong>
              😖 El miedo a perdernos de alguna tendencia o mensaje nos mantiene
              pegados a las pantallas
            </strong>
            <br />
            pero en el proceso, estamos perdiendo lo que realmente importa.
          </li>
        </ul>
        <ul className="list-disc px-8">
          <br />
          <strong>
            👀 Tan solo te invito a dar una vuelta por tu colegio, universidad o
            por el trabajo, compruebalo por tí mismo
          </strong>
          <br />
          <br />
          Es como un virus, al que todos se hacen a la vista gorda, como si nada
          malo pasara
          <br />
          <li>
            🥴 Las redes sociales te prometen conexión, pero a menudo te deja
            sintiéndote más vacío y tonto que antes.
          </li>
          <li>
            🔔 Las notificaciones constantes interrumpen, estresa y solamente
            fueron creadas para hacerte adicto al celular.
          </li>
          <li>
            📉 Tiktok, Shorts y muchas plataformas reducen nuestro tiempo de
            atención a menos de 8 segundos.
          </li>
          <li>
            😥 La comparación constante en plataformas como Instagram y Facebook
            te hace cuestionar tu valor y logros.
          </li>
          <li>
            🥵 El celular te deja expuesto a adicciones más severas como el
            p*rn0, onlyfans, redes sociales etc.
          </li>
        </ul>
        <br />
        Veo esto repetidas veces en internet:
        <br />
        <br />
        <span className="text-bold italic ">
          "He pasado más tiempo preocupándome por las cosas subo en Instagram
          que viviendo mi propia vida, vivo solo para los demás."
        </span>
        <br />
        <br />
        <br />
        Una mejor vida te espera si{" "}
        <span className="text-bold">
          decides tomar el control de tu vida y tu relación con la tecnología.
        </span>
        <br />
        <br />
        <ul className="list-disc px-8">
          <li>
            🌞 Si buscas redescubrir la alegría de los momentos sin una pantalla
            vacía.
          </li>

          <li>
            ✂️ Si estas dispuesto a romper la normas de la sociedad actual,
            eligiendo conscientemente qué, cuándo y cómo interactuar con el
            mundo digital.
          </li>

          <li>
            🔥 Si anhelas recuperar tu tiempo, atención y energía para
            invertirlo en pasiones, personas y proyectos que realmente
            enriquezcan tu vida.
          </li>
        </ul>
        <br />
        Estas habilidades y conocimientos no solo se pueden aprender, sino que
        son esenciales para cualquier persona que desee liderar una vida plena
        en el siglo XXI.
        <br />
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
            (y no estas seguro en cual debes invertir tu dinero)
          </li>
          <li>
            Por ultimo si no tienes tiempo para invertir todo el día intentando
            leer libros y ver videos en youtube para solucionar tus problemas.
            (A lo que me refiero es que puedo ahorrarte bastante tiempo)
          </li>
        </ul>
        <br />
        <span className="text-bold">
          ¿Te identificas con alguno de estos puntos?
        </span>
        <br />
        <br />
        Si es así, te ayudaré a resolver esos problemas en los siguientes 30
        días. 💪
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
        fallidos y noches en vela buscando la solución, estaba exhausto.
        <br />
        <br />
        No solo había fallado en cada táctica, sino que cada intento me alejaba
        más de la verdadera solución. <br />
        Sabía que necesitaba una respuesta que atacara la raíz de mi problema,
        algo que finalmente encontré tras años de lectura y experimentación.{" "}
        <br />
        <br />
        Quizás era porque estaba demasiado enganchado al celular, o tal vez era
        especial y necesitaba una solución excepcional para romper el ciclo.{" "}
        <br />A pesar de mi adicción de más de 14 horas diarias frente a
        pantallas, principalmente el celular, logré controlarla y cambiar mi
        vida radicalmente. <br />
        <br />
      </h2>
      <div className="container my-4 md:my-0 md:py-4 md:px-6 flex flex-col md:flex-row lg:flex-grow xl:max-w-none py-3 text-black m-0 ">
        <div className=" lg:text-left md:basis-1/2 lg:p-0 xl:text-3xl 2xl:text-4xl xl:justify-end w-auto h-auto">
          <picture>
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
              width={200} // Specify width
              height={200} // Specify height
              className="max-w-44 max-h-44 lg:max-h-64 lg:max-w-64 mx-auto xl:ml-80 2xl:ml-96"
            />
          </picture>
        </div>
        <div className="text-xl lg:text-2xl lg:text-left md:basis-1/2 lg:p-0  text-white lg:max-w-sm">
          <span className="text-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-4xl ">
            Hey, soy Carlitos.
          </span>
          <br />
          <br />
          Soy estudiante de último año en ingeniería de sistemas y contabilidad.
          <br />
          Me fascina construir sistemas y leer apasionadamente sobre filosofía y
          psicología.
        </div>
      </div>
      <h2 className="container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        Comencé como cualquiera
        <br />
        <br />
        Sumergido en el peor escenario posible con las redes sociales
        <br />
        <br />
        Una espiral de consumo sin fin, donde cada notificación era una cadena
        más en mi prisión digital.
        <br />
        <br />
        Pero, poco a poco, aplicando las lecciones de cada libro que devoraba,
        empecé a tallar mi escape.
        <br />
        <br />
        Cada día era una conversación con mentores que nunca conocí
        personalmente, pero cuyas palabras resonaban como un diálogo interno.
        <br />
        Me tomaba las noches para reflexionar sobre mis éxitos, para celebrar y
        planificar mejoras aún más significativas.
        <br />
        Pequeños pasos incrementales hacia un futuro que, según Jordan Peterson,
        prometía ser mejor.
        <br />Y así fue como gradualmente rompí las cadenas de la tecnología y
        comencé a utilizarla como una herramienta, en lugar de ser devorado por
        ella.
        <br />
        Es por eso que creé este curso moderno.
        <br />
        <br />
        Algo faltaba en el discurso convencional. Nadie ofrecía una solución
        rápida y verdadera para obtener claridad en la dirección de tu vida.
        <br />
        ¿La razón? Todo esto es muy nuevo. Todos todavía lo están descifrando.
        <br />
        <br /> Por eso puedo decir que he descifrado el código, lo he logrado.
        <br />
        <br /> ¿Pruebas?
        <br />
        Esta página web, los videos en YouTube, muchisimos libros leídos y mejor
        aún.. "Aplicados", mis estrategias de marketing y ventas, y las
        múltiples habilidades que he adquirido, incluso cursando ingeniería que
        consideran ser una de las carreras con mayor dificultad.
        <br />
        Todo esto demuestra el tiempo libre que tengo para lograr todo esto.
        <br />
        <br />
        Quizá no te interese hacer exactamente lo que yo hago, pero seguro que
        te gustaría tener tiempo libre para dedicarte a lo que realmente te
        apasiona, ya sea dibujar, programar, bailar...
        <br />
        <br />
        Sea lo que sea, podrás lograrlo si cuentas con tiempo libre.
        <br />
        Por eso propongo este programa que te brindará una solución definitiva y
        de raíz a la adicción al celular, cómo construir realmente una
        mentalidad con dirección y sentido y, finalmente, encontrar un propósito
        en tu vida.
        <br />
        <br />
        Puede sonar increíble, pero en realidad no lo descubri yo, fueron ellos:
        <br />
      </h2>
      <AuthorsSection />
      <h2 className="mt-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        Ellos y muchos más, con su sabiduría me enseñaron a aplicar todo esto.
        Ahora, vengo a compartir contigo las lecciones clave para que puedas
        triunfar sobre esta adicción que te roba incontables horas de tu vida.
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
        Lo Que Obtendrás dentro de este curso:
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
            Solo para las primeras 100 personas en comprar, después subiré el
            precio
          </em>
        </div>
      </div>
      {/* BONUS CARD DE BONUSES PARA EL CURSO */}
      <BonusSection />
      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 text-white">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-2xl tracking-espaciadomas font-bold md:text-3xl lg:text-4xl text-gradient leading-none bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
            UNETE HOY
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            Únete a la comunidad de personas decididas a transformar su vida
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            Obtén el curso inmediatamente.
          </em>
        </div>
      </div>
      <h2 className="mt-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        En un mundo que nos empuja constantemente hacia la distracción digital,
        este curso es tu brújula hacia una vida con sentido, alejada de la
        superficialidad de las pantallas y llena de propósitos auténticos.
        <br /> <br />
        He aquí donde la sabiduría de figuras como James Clear, Jordan Peterson,
        Tony Robbins, Ryan Holiday, y Viktor Frankl se convierten en tu guía
        hacia un renacer personal.
        <br />
        <br />
        Este no es solo otro curso, es tu camino hacia una existencia plena en
        el siglo XXI.
      </h2>
      <h2
        id="seccion-compra"
        className="mt-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black border-4 border-custom-yellow"
      >
        <span className="font-bold text-center block text-3xl bg-clip-text text-transparent bg-gradient-to-r from-custom-yellow to-custom-orange">
          "LIBERTAD DIGITAL: Una vida más allá de las pantallas"
        </span>
        <span className="font-bold text-center block text-4xl pb-3"> $30</span>
        <span className="font-bold text-center block">
          Desarrolla dominio sobre tu vida digital y personal con estrategias
          comprobadas para una transformación real.
        </span>
        <br />
        Ten acceso de por vida a la plantilla y obtén:
        <br />
        ✓ Estrategias de desintoxicación digital basadas en las enseñanzas de
        Cal Newport, para que retomes el control sobre tu tiempo y atención.
        <br />
        ✓ Ejercicios de autoconocimiento y desarrollo personal inspirados en los
        principios de Jordan Peterson y Viktor Frankl, para vivir una vida con
        propósito y significado.
        <br />
        ✓ Técnicas de formación y mantenimiento de hábitos efectivos, guiadas
        por la sabiduría práctica de James Clear, para transformar tu día a día.
        <br />
        ✓ No solo teoría, sino práctica real: plantillas de Notion
        personalizables para implementar lo aprendido de manera efectiva en tu
        vida.
        <br />
        ✓ Comunidad de Apoyo Exclusiva: Acceso a un grupo privado donde podrás
        compartir experiencias, desafíos y logros con personas que están en el
        mismo camino de transformación que tú, ofreciendo un espacio de
        motivación y apoyo mutuo.
        <br />
        <br />
        <span className="font-bold">
          Y no solo eso, en los modulos del curso también aprenderás estas
          lecciones:
        </span>
        <br />
        <br />⌛ Maestro del Tiempo: Técnicas y herramientas para gestionar
        mejor tu tiempo y reducir las distracciones del celular.
        <br />
        🌱Maestro del Carácter: Estrategias para entender y mejorar tu
        identidad, valores y auto percepción.
        <br />
        🛡️Cómo Dejar de Sabotearte a Ti Mismo: Superación del autosabotaje, el
        autodesprecio y la construcción de una autoestima saludable.
        <br />
        🧭Cómo Encontrar tu Propósito y Pasión: Guía para descubrir y vivir
        según tu pasión y propósito, valorando tus experiencias y sacrificios.
        <br />
        🌙Cómo Dormir Bien: Estrategias para mejorar tu sueño y descanso,
        incluyendo rutinas de relajación y consejos para un sueño reparador.
        <br />
        📖Cómo Conocer Quién Eres: Descubre los rasgos de tu personalidad y cómo
        estos pueden influir positivamente en tu vida.
        <br />
        🦁Cómo Mantenerse Disciplinado: Inspirado en David Goggins, aprende a
        superar la procrastinación y a comprometerte con tus objetivos.
        <br />
        🏔️Cómo los Verdaderos Ganadores Confían en Sí Mismos: Estrategias para
        construir una confianza auténtica y duradera.
        <br />
        🤝Cómo Ser el Amigo Ideal: Consejos para mejorar tus relaciones
        personales, dejar atrás amistades tóxicas y construir conexiones
        significativas.
        <br />
        ⚙️Cómo Disciplinarte a Ti Mismo para Lograr Lo Que Sea: Técnicas para
        formar y mantener hábitos saludables sin depender de la fuerza de
        voluntad.
        <br />
        <br />
        <span className="font-bold">
          Cursos Futuros que recibirán para las primeras 100 personas,
          totalmente gratuitos!!
        </span>
        <br />
        ✓ Guía NoFap Definitiva: Herramientas y estrategias para superar la
        adicción a la pornografía y reconstruir una sexualidad saludable.
        <br />
        ✓ Módulo de Inteligencia Emocional: Aprende a gestionar tus emociones,
        superar la depresión y construir relaciones personales sólidas.
        <br />
        ✓ Resiliencia Estoica: Principios estoicos aplicados a la vida diaria
        para una mentalidad resiliente ante la adversidad.
        <br />
        <br />
        ¡Unete y transforma tu relación con la tecnología, contigo mismo y con
        el mundo que te rodea!
      </h2>
      <Button
        href="https://shop.carlitosnina.com/checkout/buy/058aac3a-9043-4af5-b9ef-8768be268d0a?logo=0&discount=0"
        as={Link}
        className="mx-auto md:mx-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange hover:text-black shadow-2xl shadow-custom-yellow  text-white w-40 mt-6 py-6 px-40 lg:px-50 xl:px-50 xl:py-8 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:animate-none"
      >
        <Image
          src="shoppingcart.png"
          alt="Carrito de compras"
          width={32} // Specify width
          height={32} // Specify height
          className="w-8 h-8 absolute left-4"
        />
        Unete al curso!!
      </Button>
      <p className="italic text-white">Garantía de 30 días</p>
      <h2 className="my-2 container mx-auto px-6 py-6 flex-grow max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black border-4 border-custom-yellow">
        {" "}
        <span className="font-bold text-3xl lg:text-4xl">
          Garantía de Satisfacción Total
        </span>
        <br />
        <br />
        Entiendo que cada paso hacia el cambio es único y que tu camino hacia
        una vida digitalmente equilibrada es personal. Por eso quiero que te
        sientas completamente libre para explorar este curso sin ningún riesgo.
        <br />
        Si en cualquier momento dentro de los 30 días siguientes a tu compra
        decides que este curso no es para ti, sea cual sea la razón, te ofrezco
        una Garantía de Satisfacción Total. No necesitas completar el curso, ni
        siquiera tienes que darme un motivo. Simplemente envíame un correo a
        carlitos@carlitosnina.com pidiendo tu reembolso, y te devolveré el 100%
        de tu inversión, sin preguntas.
        <br />
        Estoy comprometido a ofrecerte no solo conocimiento, sino también
        confianza y seguridad en tu inversión. Creo firmemente en el valor
        transformador de este curso y quiero que tengas la libertad de
        experimentarlo por ti mismo, completamente a tu ritmo y según tus
        términos.
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
          className="mb-4 mx-auto md:mx-auto text-xl lg:text-2xl font-bold hover:text-white hover:bg-custom-yellow shadow-lg shadow-custom-background text-black border-custom-yellow border-2 w-10 mt-1 py-6 px-28 lg:px-30 flex items-center justify-center relative"
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
            Asegurate de hacer la dicisión correcta
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
    </section>
  );
}
