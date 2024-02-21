import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DetailedCard from "@/components/DetailedCard";

export const cardsData = [
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

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="container mx-auto md:pt-16 px-6 flex-grow inline-block max-w-lg text-center justify-center  xl:max-w-none">
        <h1 className={title()}>
          Si estas leyendo esto desde el celular.&nbsp;
        </h1>
        <br />
        <h1 className={title({ color: "blue" })}>Tienes un problema.&nbsp;</h1>
        <br />
        <h1 className={title()}>Tengo la solución</h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          Te enseño como dejar de desperdiciar más de 1460 Horas al año (4h/dia
          en el celular)
          <br />
          Una guia de desintoxicación digital, ejercicios profundos de
          autoconocimiento y busqueda de propósito y sentido.
          <br />
          ¿Te interesa?
        </h2>
      </div>

      <h2 className="container mx-auto max-w-7xl  px-6 flex-grow md:px-24 lg:px-52 text-xl">
        <span className="font-bold">Este no es un curso mediocre.</span>
        <br />
        Tampoco un PDF de 10 páginas con imagenes bonitas y consejos baratos
        <br />
        Aqui aprenderás a resolver tus problemas con el celular y muchos más.
        <br />
        No aprenderás algunas configuraciones simples
        <br />
        Aprenderás a dominar tus habitos, a dominar tu mente, tus creencias, tu
        identidad, como mejorarla y dejar de verte como un inútil.
        <br />
        Volverás a dormir bien como cuando eras un bebe, construiras una
        confianza increible como si fueras otra persona
        <br />
        Encontrarás un propósito y vivirás una vida significativa.
        <br />
        <br />
        <em>¿En que te diferencias de los demas? ¿por que deberia creerte?</em>
        <br />
        A lo poco que sé otras personas creen saberlo todo, hablan con tanta
        seguridad pero despues te venden un producto mal hecho, todo con
        historias baratas y cuentos de hadas
        <br />
        <br />
        Todo lo que está dentro del curso viene desde las enseñanzas de Jordan
        Peterson, Viktor Frankl, Tony Robbins, James Clear, Cal Newport, Ryan
        Holiday, Marco Aurelio y muchos más...
        <br />
        No hay nada inventado porque todo esta con evidencia detrás, incluso te
        ofrezco una garantía de 30 días, si crees que soy un mentiroso, un
        papanatas y un loco.
        <br />
        <br />
        Si no te gusta, lo unico que tienes que hacer es mandarme un correo y te
        regreso cada centavo de tu inversion
        <br />
        Porque esto es una inversión y quiero que sea la mejor que hagas en tu
        vida
        <br />
        Si, así de seguro estoy.
        <br />
        Esto te cambiará la vida
        <br />
        <br />
        <strong>EL MUNDO ESTÁ CAMBIANDO</strong>
        <br />
        <strong>¿Por Qué Debería Importarme la Desintoxicación Digital?</strong>
        <br />
        <em>
          El futuro de vivir plenamente está en reconectar con lo esencial.
        </em>
        <br />
        <br />
        La educación moderna está fallando en enseñarnos cómo vivir con la
        tecnololgía.
        <br />
        Miles de personas viven una vida **sin propósito y sienten que estan
        desperdiciando su vida**
        <br />
        La adicción al celular se ha convertido en una de las mayores adicciones
        en todo el mundo, afectando a adolescentes, universitarios y adultos.
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
            <strong>La adicción al celular domina nuestras vidas.</strong>
            <br />
            Desde el momento en que despertamos hasta el instante en que
            cerramos los ojos, nuestras pantallas nos capturan, robándonos
            momentos preciosos de la vida real.
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
          Es como una pandemia, solo que esta vez todos se hacen a la vista
          gorda, como si nada malo pasara
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
        <span className="text-bold">
          He pasado más tiempo preocupándome por que cosas subo en Instagram que
          viviendo mi propia vida.
        </span>
        <br />
        <br />
        <br />
        Una mejor vida ta espera si{" "}
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
        <br />
        EL INSTRUCTOR azul
        <br />
        ¿Quién es este tipo que dice todas estas tonterías? Solo negrillas soy
        alguien que quiere ayudarte italic
        <br />
        <br />
        He caído muchas veces.
        <br />
        Y con estas nuevas redes, quien no lo haría?
        <br />
        Tratan de volvernos adictos y robarnos nuestra atención
        <br />
        Robarnos nuestros sueños
        <br />
        Robar nuestro futuro
        <br />
        Me dí cuenta de eso despues de:
        <br />
        Haber reprobado materias en la universidad. Tratar de ser un jugador
        profesional en League of Legends.
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
        <br />
        <br />
        <strong>LA MEJOR INVERSION DE TU VIDA</strong>
        <br />
        ¿No me convence, que me enseñarás?
        <br />
        <em>Una oferta que única con un valor único</em>
        <br />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </section>
  );
}
