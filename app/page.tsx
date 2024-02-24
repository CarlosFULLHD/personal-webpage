import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DetailedCard from "@/components/DetailedCard";
import { Button } from "@nextui-org/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BonusCard from "@/components/BonusCard";

const cardsData = [
  {
    id: 1,
    subtitle: `¿Cansado de Sentir que Pierdes Tu Tiempo y Desperdicias tu Vida?`,
    title: ` ⌛Maestro del Tiempo`,
    description: `
    - Guía paso a paso sobre cómo identificar y limitar las distracciones del celular.
    - Ejercicios de planificación semanal para priorizar tareas y objetivos.
    - Plantilla del Menú del Descanso para programar tu tiempo.
    - Apps y recomendaciones para seguimiento semanal y monitorear el uso del celular.
    - El protocolo de retroalimentación de las personas exitosas.
    - Aprende cómo dejar las redes sociales, todo el mal que hacen y obtener un balance sano para dejar de ser esclavo de las notificaciones.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 2,
    subtitle: `¿Sientes que no eres todo lo que podrías llegar a ser?`,
    title: `🌱Maestro del Carácter`,
    description: `
    - Aprende cómo funciona tu identidad, entendimiento psicológico y profundo de los valores, creencias que tenemos de nosotros mismos y autopercepciones.
    - Aprende cómo cambiar de identidad y dejar ir esa parte de ti para poder desarrollarte como una mejor persona.
    - Mejora la imagen de ti mismo para que empieces a reconstruir tu vida.
    - Cómo construir una nueva mentalidad resiliente ante las opiniones de las masas.
    - Una llamada a la madurez y también a la responsabilidad hacia una vida con sentido y propósito.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 3,
    subtitle: `¿El Autosabotaje Te Detiene?¿Te autodesprecias u odias a ti mismo?`,
    title: `🛡️Cómo Dejar de Sabotearte a Ti Mismo`,
    description: `
    - Como dejar de autodespreciarte y empezar a quererse uno mismo 
    - Voy a mostrarte el porqué y el cómo dejar atrás el autosabotaje.
    - Cómo superar las barreras internas y escapar del ciclo de intentos fallidos.
    - Cómo obtener fe en tus acciones, paso a paso hacia la mejor versión de ti con logros y satisfacción personal.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 4,
    subtitle: `¿Anhelas Crecimiento y Un Propósito?`,
    title: `🧭Cómo Encontrar Definitivamente tu Propósito y Pasión`,
    description: `
    - Exploraremos la responsabilidad de vivir a plenitud.
    - Valorar tus experiencias y encontrar significado en tus sacrificios.
    - Cómo disfrutar de este viaje, ya que no se trata sobre éxitos rápidos o ganancias monetarias instantáneas; te ofrezco algo infinitamente más valioso.
    - Encontrar finalmente lo que llaman TU PASIÓN.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 5,
    subtitle: `¿Tienes falta de sueño y no consigues descansar lo suficiente?`,
    title: `🌙Cómo Llegar a Dormir Tan Bien como un Bebé`,
    description: `
    - Rutinas de relajación pre-sueño para mejorar la calidad del descanso.
    - Redescubre cómo volver a tener un sueño reparador, sin preocupaciones ni el estrés del celular por el trabajo y despertando cada día con propósito.
    - Cómo alejarte de tu celular a altas horas de la noche.
    - Cómo volver a recuperar un horario de sueño sano.
    - Paso a paso de cómo superar dificultades para dormir.
    - La magia de la escritura y liberación de preocupaciones.
    - Guía sobre alimentación, ambiente necesario para dormir mejor.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 6,
    subtitle: `¿Quieres Conocerte Mejor?`,
    title: `📖Cómo Conocer Quién Rayos Eres`,
    description: `
    - Aprende la magia detrás de cada uno de tus rasgos de la personalidad.
    - Crea objetivos basados en tu personalidad y lo que te motivará hacia tu éxito futuro.
    - Aprende sobre las ventajas y desventajas de tu personalidad.
    - Cómo sacarle el mejor partido a tu personalidad y también cómo puedes influir en esos rasgos para una mejor vida.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 7,
    subtitle: `¿El Miedo y la Procrastinación Te Dominan?`,
    title: `🦁Cómo David Goggins y los Exitosos Mantienen su Disciplina`,
    description: `
    - Aprende a superar la procrastinación creando una visión negativa que te motive hacia adelante y una visión futura para obtener dirección y claridad de tu futuro deseado.
    - Aprende cómo las personas millonarias toman decisiones y se comprometen a su propósito.
    - Aprende a liberarte de las ataduras para no salir de tu zona de confort y tampoco perderte en el burnout.
    - Aprende la mentalidad del estudiante de por vida y dejar atrás tu ego para aprender de verdad.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 8,
    subtitle: `¿Tienes Falta de Confianza?`,
    title: `🏔️Cómo los Verdaderos Ganadores Confían en Sí Mismos`,
    description: `
    - Aprende por qué las soluciones superficiales como afirmaciones o frases bonitas no funcionan. Entonces te revelaré qué SÍ te da confianza.
    - Aprende a aceptar a tu yo pasado y seguir un camino incluso si te encuentras en el peor momento de tu vida.
    - Encuentra propósito y significado en hacer sacrificios.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 9,
    subtitle: `¿Tienes Amistades Verdaderas?`,
    title: `🤝Cómo Convertirte y Ser el Amigo que Siempre Estará a tu Lado`,
    description: `
    - Entiende la razón verdadera por la cual debes cuidarte a ti mismo y a tu familia.
    - Aprende cómo encontrar malas amistades y encontrar buenas amistades que te eleven y no te hundan.
    - Elimina las limitaciones mentales para conseguir nuevas amistades.
    - Aprende a convertirte en ese amigo en el cual puedes confiar.
    `,
    avatarSrc: `/darkside.webp`,
  },
  {
    id: 10,
    subtitle: `¿Intentaste mejorar tus hábitos y nada te funcionó?`,
    title: `⚙️Cómo Disciplinarte a Ti Mismo para Lograr Lo Que Sea`,
    description: `
    - Crea, descubre y destruye hábitos, paso a paso.
    - Aprende cómo tener hábitos que no requieran fuerza de voluntad.
    - Aprende el ÚNICO ingrediente necesario para formar hábitos DE POR VIDA.
    - Motívate para poder seguir esos hábitos y continuarlos a pesar de la falta de disciplina.
    `,
    avatarSrc: `/darkside.webp`,
  },
  // ... (agrega más cards aquí)
];
const bonusData = [
  {
    id: 1,
    subtitle: `BONUS #1 - Plantilla de Notion`,
    title: `Menú del Descanso - Planifica tu ocio conscientemente`,
    description: ` `,
    avatarSrc: `/tonyrobbins-photo.jpg`,
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="container md:pt-16 md:px-6 flex flex-col lg:flex-row lg:flex-grow xl:max-w-none py-3 bg-white text-black m-0  ">
        <div className=" lg:text-left lg:basis-1/2 lg:p-0  xl:text-3xl 2xl:text-4xl xl:pl-14">
          <h1 className="text-5xl font-bold tracking-tighter md:inline lg:text-5xl xl:text-7xl">
            Si estas leyendo esto desde el celular
          </h1>

          <span className="text-5xl font-bold tracking-tighter text-custom-orange md:inline lg:block lg:text-5xl xl:text-7xl text-gradient">
            {" "}
            Tienes un problema
          </span>

          <h1 className="text-5xl font-bold tracking-tighter lg:text-5xl xl:text-7xl">
            Tengo la solución
          </h1>

          <h2 className="md:px-4 text-2xl tracking-tighter pt-3 lg:max-w-[600px] lg:text-3xl xl:text-4xl">
            Un Sistema de Desintoxicación Digital, Desarrollo Personal y De
            Sentido, con Propósito.
            <span className="block md:inline lg:block">
              {" "}
              (En una plantilla de Notion)
            </span>
            <span className="block">¿Te interesa?</span>
          </h2>
          <Button className="mx-auto md:mx-auto text-2xl font-bold bg-gradient-to-tr from-custom-yellow to-custom-orange text-white shadow-lg w-40 my-6 mb-12 py-6 px-32 xl:px-40 xl:py-8 flex items-center justify-center relative">
            <img
              src="/shoppingcart.png"
              alt="Carrito de compras"
              className="w-10 h-10 mr-2 "
            />
            Sí, quiero unirme
          </Button>
        </div>
        <div className=" lg:basis-1/2 lg:p-6">
          <img
            src="/notion_product.gif"
            alt="Video de nuestro producto hecho en Notion"
            className="max-w-24 md:px-24 lg:px-0"
          />
        </div>
      </div>

      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-lg tracking-espaciadomas font-bold md:text-xl lg:text-2xl">
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

      <h2 className="container mx-auto px-6 py-6 flex-grow max-w-6xl md:max-w-2xl lg:max-w-3xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black my-6">
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
        <ul>
          <li>
            <strong>El aislamiento digital está creciendo.</strong>
            <br />
            En un mundo hiperconectado, paradójicamente nos encontramos más
            solos que nunca.
          </li>
          <br />
          <li>
            <strong>
              El miedo a perdernos de alguna tendencia o mensaje nos mantiene
              pegados a las pantallas
            </strong>
            <br />
            pero en el proceso, estamos perdiendo lo que realmente importa.
          </li>
        </ul>
        <ul>
          <br />
          <strong>
            Tan solo te invito a dar una vuelta por tu colegio, universidad o
            por el trabajo, compruebalo por tí mismo
          </strong>
          <br />
          <br />
          Es como un virus, al que todos se hacen a la vista gorda, como si nada
          malo pasara
          <br />
          <li>
            - Las redes sociales te prometen conexión, pero a menudo te deja
            sintiéndote más vacío y tonto que antes.
          </li>
          <li>
            - Las notificaciones constantes interrumpen, estresa y solamente
            fueron creadas para hacerte adicto al celular.
          </li>
          <li>
            - Tiktok, Shorts y muchas plataformas reducen nuestro tiempo de
            atención a menos de 8 segundos.
          </li>
          <li>
            - La comparación constante en plataformas como Instagram y Facebook
            te hace cuestionar tu valor y logros.
          </li>
          <li>
            - El celular te deja expuesto a adicciones más severas como el
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
          decides tomar el control de tu vidas y tu relación con la tecnología.
        </span>
        <br />
        <br />
        - Si buscas redescubrir la alegría de los momentos sin una pantalla
        vacía.
        <br />
        - Di estas dispuesto a desafiar la normas de la sociedad actual,
        eligiendo conscientemente qué, cuándo y cómo interactuar con el mundo
        digital.
        <br />
        - Si anhelas recuperar tu tiempo, atención y energía para invertirlo en
        pasiones, personas y proyectos que realmente enriquezcan tu vida.
        <br />
        <br />
        Estas habilidades y conocimientos no solo se pueden aprender, sino que
        son esenciales para cualquier persona que desee liderar una vida plena
        en el siglo XXI.
        <br />
        <br />
        <br />
        <span className="text-bold">Este curso es para ti si:</span>
        <br />- Anhelas{" "}
        <span className="text-bold">
          liberarte del ciclo constante de distracción y procrastinación
        </span>
        que el celular impone en tu vida.
        <br />- Te preocupas por{" "}
        <span className="text-bold">
          desperdiciar tu vida en trivialidades digitales
        </span>
        , soñando con lo que podrías lograr si solo pudieras desconectar.
        <br />- Sientes que{" "}
        <span className="text-bold">
          la adicción al celular te ha robado momentos irreemplazables
        </span>{" "}
        con seres queridos, oportunidades de crecimiento personal y la capacidad
        de disfrutar del aquí y ahora.
        <br />- Buscas una forma de{" "}
        <span className="text-bold">
          vivir con propósito, sentido y autenticidad
        </span>{" "}
        en un mundo que parece valorar lo opuesto.
        <br />
        - Intentaste mejorar tu vida sin éxito porque no tienes disciplina
        necesaria, no tienes dirección y no sabes que hacer.
        <br />- Sabes que hay muchos cursos en las redes sociales gratuitos y de
        pago
        <span className="text-bold">
          pero se siente que todos son lo mismo
        </span>{" "}
        (y no estas seguro en cual debes invertir tu dinero)
        <br />
        - Por ultimo si no tienes tiempo para invertir todo el día intentando
        leer libros y ver videos en youtube para solucionar tus problemas. (A lo
        que me refiero es que puedo ahorrarte bastante tiempo)
        <br />
        <br />
        <span className="text-bold">
          ¿Te identificas con alguno de estos puntos?
        </span>
        <br />
        <br />
        Si es así, te ayudaré a resolver esos problemas en los siguientes 30
        días.
        <br />
      </h2>
      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 my-6">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-lg tracking-espaciadomas font-bold md:text-xl lg:text-2xl">
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

      <h2 className="container mx-auto px-6 py-6 flex-grow max-w-6xl md:max-w-2xl lg:max-w-3xl  md:px-10 lg:px-8 text-xl font-normal lg:text-2xl bg-white rounded-lg text-black">
        He caído muchas veces
        <br />
        Y con estas nuevas redes, quien no lo haría?
        <br />
        Tratan de volvernos adictos y robarnos nuestra atención
        <br />
        Robarnos nuestros sueños
        <br />
        Robar nuestro futuro
        <br />
        Con el tiempo fuí mejorando mis habilidades de ventas ayudando a mi
        mamá.
        <br />
        Vendía bastante bien
        <br />
        Entonces todo empezo a mejorar con el tiempo
        <br />
        Dejé de reprobar en la U para sacar notas de 80 para arriba
        <br />
        Empecé a tener pocas pero sinceras y significativas amistades
        <br />
        Empecé a programar para mi universidad, entré a competencias y estaba
        entre los que más luchaban a pesar de ser un novato entre tantos genios.
        <br />
        Mi físico estaba como nunca pense que estaría
        <br />
        Todo fue mejorando día tras día
        <br />
        Libros de autoayuda, psicología y filosofía. Videos de YouTube.
        Podcasts. Universidad. Todo buscando la clave para vida mejor.
        <br />
        Pero eso sí, apesto para tocar instrumentos, apesto para bailar, apesto
        para química, apesto para historía y para muchas otras cosas.
        <br />
        Pero sabes para lo que no apesto?, para hacer paginas web, para escribir
        y para vender.(Es por eso que te tengo hasta aqui)
        <br />
        Pero no iba a lograr nada si no eliminaba ciertos malos habitos que me
        jalaban atrás.
        <br />
        James Clear lo sabe mejor que yo.
        <br />
        Así que me enfoqué en lo mejor que pude para eliminar mis adicciones,
        entonces inicie resolviendo mi adiccion al celular.
        <br />
        <br />
        <span className="text-bold">
          Para finalmente....
          <br />
          Después de mucho tiempo...
        </span>
        <br />
        Horas y horas investigando, leyendo y aplicando teorías de todo tipo,
        desde las enseñanzas antiguas de los estoicos hasta las modernas
        técnicas de psicología y desarrollo personal.
        <br />
        Porque hasta ahora NADIE ha dado una solución como la que te propongo
        <br />
        Porque encontré conocimiento y sabíduría en personas mucho más grandes
        que yo, acepté sus enseñanzas.
        <br />Y ahora vengo aca no como gurú, ni como un padre, si no como{" "}
        <span className="text-bold">un amigo</span>,
        <br />
        Como <span className="text-bold">un guía</span> para enseñarte lo que
        pocos saben...
        <br />
        Pues tampoco te la daré gratis porque si no, no lo valorarás.
        <br />
        Pero tampoco esta caro, de hecho es accesible en comparación a lo que
        puedes ganar despues de haberte quitado tantos problemas que te frenan
        <br />
        Esta a 30$, Y es más, para animarte a comprar además de la garantía,
        daré un Bonus exclusivo(Actualizaciones, cursos exclusivos) a las 100
        primeras personas que lo compren, porque quiero premiar a los que
        invierten su tiempo a leer
        <br />
        Te enseñaré a construir:{" "}
        <span className="text-italic">
          El carácter: Valores, principios, creencias e identidad
        </span>
        <br />
        <br />
        Según yo eso es lo más valioso y es la clave para TODO en la vida.
        <br />
        La respuesta no está en bloquear el celular y ya,
        <br />
        La respuesta está en entrenar a nuestra mente, convertirnos en alguien
        diferente y trascender nuestra identidad, ahí se encuentra la solución
        definitiva que estoy dispuesto a enseñarte.
        <br />
        La mayoría simplemente no tiene 5 años para pasar por un ciclo de prueba
        y error para hacerlo funcionar.
        <br />
        Por eso creé esta guía: para darte un atajo hacia ese equilibrio, para
        que puedas empezar a vivir la vida que deseas ahora, no después de años
        de lucha. <br />
        Te doy las soluciones a los problemas de tus problemas.
        <br />
        No necesitas ser alguien con superpoderes para leerla, solo necesito tu
        compromiso para aceptar todos estos conocimientos de los mas grandes
        hombres, esas enseñanzas te harán volar la mente. Y te las enseñaré de
        manera simple.
        <br />
        <br />
        Me interesa!
        <br />
      </h2>

      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 my-6">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-lg tracking-espaciadomas font-bold md:text-xl lg:text-2xl">
            LA MEJOR INVERSION DE TU VIDA
          </span>
          <br />
          <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
            ¿No me convence, que me enseñarás?
          </span>
          <br />
          <em className="text-lg font-italic md:text-xl lg:text-2xl">
            Una oferta que única con un valor único
          </em>
        </div>
      </div>

      <div className=" mx-auto max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="grid grid-cols-1 gap-y-1 sm:gap-y-2 md:grid-cols-2 md:gap-y-4 lg:gap-y-8 gap-x-4">
          {cardsData.map((card) => (
            <DetailedCard
              key={card.id}
              subtitle={card.subtitle}
              title={card.title}
              description={card.description}
              avatarSrc={card.avatarSrc}
            />
          ))}
        </div>
      </div>
      {/* BONUS CARD DE BONUSES PARA EL CURSO */}
      <div className=" max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8">
        <div className="grid grid-cols-1 gap-y-1 sm:gap-y-2 md:grid-cols-2 md:gap-y-4 lg:gap-y-8 gap-x-4">
          {bonusData.map((card) => (
            <BonusCard
              key={card.id}
              subtitle={card.subtitle}
              title={card.title}
              description={card.description}
              avatarSrc={card.avatarSrc}
            />
          ))}
        </div>
      </div>
      {/* COMPARACION DE PRECIOS */}
      <div className=" w-full flex flex-col items-center justify-center bg-custom-blue">
        <div className="text-custom-blue w-full md:max-w-2xl bg-white m-2 p-4 shadow-lg rounded-lg">
          <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl text-center justify-center">
            <span className="text-lg tracking-espaciadomas font-bold md:text-xl lg:text-2xl">
              Save big with Basecamp.
            </span>
            <br />
            <span className="text-2xl font-bold md:text-2xl lg:text-4xl">
              Basecamp replaces a bunch of apps. See how our pricing compares to
              bundling Slack, Asana, & Google Workspace together:
            </span>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:max-w-2xl w-full">
          <div className="bg-white m-2 p-4 shadow-lg rounded-lg h-[600px]"></div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center p-4 bg-white rounded-lg mx-4 my-2">
              <img
                src="/jordanpeterson-photo.jpg"
                className="max-w-24 max-h-24 mr-4"
                alt="Descripción de la imagen"
              />

              <div className="flex-1">
                <p className="text-left align-middle text-black text-lg font-bold">
                  IZQUIERDA
                </p>
                <p className="text-left align-middle text-black text-lg">
                  $7.25/month per user
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg mx-4 my-2">
              <img
                src="/jordanpeterson-photo.jpg"
                className="max-w-24 max-h-24 mr-4"
                alt="Descripción de la imagen"
              />

              <div className="flex-1">
                <p className="text-left align-middle text-black text-lg font-bold">
                  IZQUIERDA
                </p>
                <p className="text-left align-middle text-black text-lg">
                  $7.25/month per user
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg mx-4 my-2">
              <img
                src="/jordanpeterson-photo.jpg"
                className="max-w-24 max-h-24 mr-4"
                alt="Descripción de la imagen"
              />

              <div className="flex-1">
                <p className="text-left align-middle text-black text-lg font-bold">
                  IZQUIERDA
                </p>
                <p className="text-left align-middle text-black text-lg">
                  $7.25/month per user
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg mx-4 my-2">
              <img
                src="/jordanpeterson-photo.jpg"
                className="max-w-24 max-h-24 mr-4"
                alt="Descripción de la imagen"
              />

              <div className="flex-1">
                <p className="text-left align-middle text-black text-lg font-bold">
                  IZQUIERDA
                </p>
                <p className="text-left align-middle text-black text-lg">
                  $7.25/month per user
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TERMINA BLOQUE DE LA DERECHA */}
      </div>

      <div className="bg-custom-blue w-full text-center flex justify-center items-center py-3 my-6">
        <div className="max-w-lg w-full px-4 md:max-w-xl lg:max-w-2xl">
          <span className="text-lg tracking-espaciadomas font-bold md:text-xl lg:text-2xl">
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

      <Accordion
        type="single"
        collapsible
        className="p-4 bg-custom-blue rounded-lg my-8 mx-2"
      >
        <AccordionItem
          value="item-1"
          className="no-underline hover:no-underline"
        >
          <AccordionTrigger>
            Es necesario que sepa utilizar Notion?
          </AccordionTrigger>
          <AccordionContent>
            No problem mai frend. He preparado una guía detallada paso a paso,
            especialmente para principiantes, y nuestro soporte está listo para
            asistirte en cada duda que surja.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            ¿Es dificil de leer y poner en práctica?
          </AccordionTrigger>
          <AccordionContent>
            Simplifiqué al maximo las enseñanzas de muchos autores con tal de
            que sea facil de seguir, leer y poner en práctica, incluso si tienes
            poco tiempo, si crees que no es para tí puedes pedir un reembolso
            hasta 30 dias despues de la compra!!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            ¿Necesito una cuenta de Notion para usarla? ¿Hay costos extras?
          </AccordionTrigger>
          <AccordionContent>
            Totalmente accesible con una cuenta gratuita de Notion, esta
            plantilla no implica costos adicionales. Su diseño asegura una
            integración sin problemas y una experiencia de usuario optimizada.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
