import DetailedCard from "./DetailedCard";
const cardsData = [
  {
    id: 1,
    subtitle: `¿Cansado de Sentir que Pierdes Tu Tiempo y Desperdicias tu Vida?`,
    title: ` ⌛Maestro del Tiempo`,
    description: `
                  - Guía paso a paso sobre cómo identificar y limitar las distracciones del celular.
                  - Plantilla del Menú del Descanso para programar tu tiempo.
                  - Apps y recomendaciones para seguimiento semanal y monitorear el uso del celular.
                  - El protocolo de seguimiento y retroalimentación de las personas exitosas.
                  - Deja las redes sociales y obtén un balance sano para dejar de ser esclavo de las notificaciones.
                  `,
  },
  {
    id: 2,
    subtitle: `¿Sientes que no eres todo lo que podrías llegar a ser?`,
    title: `🌱Maestro del Carácter`,
    description: `
                  - Aprende cómo funciona tu IDENTIDAD, entendimiento psicológico y profundo de los VALORES, CREENCIAS que tenemos de nosotros mismos y autopercepciones.
                  - Cambia tu identidad y dejar ir esa parte de ti para poder desarrollarte como una mejor persona.
                  - Plantilla para crear una VISION y una ANTIVISION para tener direccion en tu vida.
                  - Mejora la imagen de ti mismo para que empieces a reconstruir tu vida.
                  - Cómo construir una nueva mentalidad resiliente ante las opiniones de las masas.
                  - Una llamada a la madurez, valentía y a la responsabilidad personal hacia una vida con sentido y propósito.
                  `,
  },
  {
    id: 3,
    subtitle: `¿El Autosabotaje Te Detiene?¿Te autodesprecias u odias a ti mismo?`,
    title: `🛡️Cómo Dejar de Sabotearte a Ti Mismo`,
    description: `
                  - Como dejar de autodespreciarte y empezar a quererse uno mismo 
                  - Entiende el PORQUE del autodesprecio humano y el cómo dejar atrás el autosabotaje.
                  - Cómo superar las barreras internas y escapar del ciclo de la culpa y perfeccionismo dañino.
                  - Cómo obtener confianza en tus acciones, paso a paso hacia la mejor versión de ti con logros y satisfacción personal.
                  `,
  },
  {
    id: 4,
    subtitle: `¿Anhelas Crecimiento y Un Propósito?`,
    title: `🧭Cómo Encontrar Definitivamente tu Propósito y Pasión`,
    description: `
                  - Exploraremos la responsabilidad personal de vivir a plenitud.
                  - Valorar tus experiencias y encontrar significado en tus sacrificios.
                  - Cómo disfrutar de este viaje, ya que no se trata sobre éxitos rápidos o ganancias monetarias instantáneas; te ofrezco algo infinitamente más valioso.
                  - Encontrar finalmente lo que llaman TU PASIÓN.
                  - Descubre el peligro de la arrogancia y valora la humildad.
                  - Descubre el beneficio oculto del sufrimiento hacia la transformación personal.
                  `,
  },
  {
    id: 5,
    subtitle: `¿Tienes falta de sueño y no consigues descansar lo suficiente?`,
    title: `🌙Cómo Llegar a Dormir Tan Bien como un Bebé`,
    description: `
                  - Rutinas de relajación antes de dormir para mejorar la calidad del descanso.
                  - Redescubre cómo volver a tener un sueño reparador, sin preocupaciones ni el estrés del celular por el trabajo y despertando cada día con propósito.
                  - Cómo alejarte de tu celular a altas horas de la noche.
                  - Cómo volver a recuperar un horario de sueño sano.
                  - Paso a paso de cómo superar dificultades para dormir.
                  - La magia de la escritura y liberación de preocupaciones.
                  - Guía sobre alimentación, ambiente necesario para dormir mejor.
                  - Aprende qué es y como trabaja el ciclo circadiano para despues MEJORAR TU SUEÑO.
                  `,
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
                  - Deja atrás las limitaciones o pensamiento extremista para poder sacar tu mejor potencial.
                  `,
  },
  {
    id: 7,
    subtitle: `¿El Miedo y la Procrastinación Te Dominan?`,
    title: `🦁Cómo matenerse disciplinado al igual que David Goggins`,
    description: `
                  - Aprende a superar la procrastinación creando una visión negativa que te motive hacia adelante y una visión futura para obtener dirección y claridad de tu futuro deseado.
                  - Aprende cómo las personas millonarias toman decisiones y se comprometen a su propósito.
                  - Recuerda que un día dejarás este mundo y obtén valor para dejar algo detrás que te sientas orgulloso.
                  - Aprende a liberarte de las ataduras para no salir de tu zona de confort y tampoco perderte en el burnout.
                  - Aprende la mentalidad del estudiante de por vida y dejar atrás tu EGO para aprender de verdad.
                  `,
  },
  {
    id: 8,
    subtitle: `¿Tienes Falta de Confianza?`,
    title: `🏔️Cómo los Verdaderos Ganadores Confían en Sí Mismos`,
    description: `
                  - Aprende por qué las soluciones superficiales como afirmaciones o frases bonitas no funcionan. Entonces te revelaré qué SÍ te da confianza.
                  - Aprende a aceptar a tu yo pasado y seguir un camino incluso si te encuentras en el peor momento de tu vida.
                  - Encuentra propósito y significado en hacer sacrificios.
                  - Entiende el HISTORIAL detrás de tí, aprecialo y ve a por mucho más.
                  `,
  },
  {
    id: 9,
    subtitle: `¿Tienes Amistades Verdaderas?`,
    title: `🤝Cómo Convertirte y Ser el Amigo que Siempre Estará a tu Lado`,
    description: `
                  - Entiende la razón verdadera por la cual debes cuidarte a ti mismo y a tu familia.
                  - Aprende porqué y cómo dejar atrás malas amistades y encontrar buenas amistades que te eleven y no te hundan.
                  - Elimina las limitaciones mentales para conseguir nuevas amistades.
                  - Aprende a convertirte en ese amigo en el cual puedes confiar.
                  - Entiende el secreto para SUPERAR ese vacío entre antiguos amigos y NUEVAS AMISTADES
                  `,
  },
  {
    id: 10,
    subtitle: `¿Intentaste mejorar tus hábitos y nada te funcionó?`,
    title: `⚙️Cómo Disciplinarte a Ti Mismo para Lograr Lo Que Sea`,
    description: `
                  - Crea, descubre y destruye hábitos, paso a paso.
                  - Construye una vida llena de disciplina con sencillos pasos NO necesitas ACCION MASIVA.
                  - Aprende cómo tener hábitos que no requieran fuerza de voluntad.
                  - Aprende el ÚNICO ingrediente necesario para formar hábitos DE POR VIDA.
                  - Motívate para poder seguir esos hábitos y continuarlos a pesar de la falta de disciplina.
                  `,
  },
  // ... (agrega más cards aquí)
];
export const ModulesSection = () => {
  return (
    <section className="m-0 lg:max-w-3xl">
      <div className=" mx-auto max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="">
          {cardsData.map((card) => (
            <DetailedCard
              key={card.id}
              subtitle={card.subtitle}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
