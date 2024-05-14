import DetailedCard from "./components/DetailedCard";
const cardsData = [
  {
    id: 1,
    title: ` ⌛Estrategias Efectivas para dejar de desperdiciar tu tiempo`,
    description: `
                  - Guía de configuraciones paso a paso sobre cómo identificar y limitar las distracciones del celular.
                  - Apps y recomendaciones para seguimiento semanal y monitorear el uso del celular.
                  - El protocolo de seguimiento y retroalimentación de las personas exitosas.
                  - Limita las redes sociales y obtén un balance sano para dejar de ser esclavo de las notificaciones.
                  `,
  },

  {
    id: 2,
    title: `🏖️Como entretenerte de manera sana sin perder el control`,
    description: `
                  - Descubre el arte de entretenerte sin depender del celular, creando nuevos hábitos que enriquecen tu vida.
                  - Sé más consciente de tus actividades de ocio y aprende a programarlas de manera efectiva para disfrutar plenamente de cada momento.
                  - Aprende a descansar de manera sana, desconectando de las pantallas y reconectando con actividades que rejuvenecen mente y cuerpo.
                  `,
  },
  {
    id: 3,
    title: `💬Como lidiar con los mensajes de manera efectiva para evitar mantenerte pegado al celular`,
    description: `
                  - Aprende a gestionar tus mensajes eficientemente, permitiéndote ser consciente de cómo y cuándo comunicarte.
                  - Desarrolla habilidades para priorizar comunicaciones, asegurando que los mensajes importantes reciban la atención necesaria sin abrumarte.
                  - Implementa estrategias para reducir el estrés asociado a las notificaciones, mejorando tu bienestar general y permitiéndote enfocarte en tareas esenciales.
                  `,
  },

  {
    id: 4,
    title: `🩹Como Superar El Auto-Sabotaje y valorar tus Logros`,
    description: `
                  - Como dejar de autodespreciarte y empezar a quererse uno mismo 
                  - Entiende el PORQUE del autodesprecio humano y el cómo dejar atrás el autosabotaje.
                  - Cómo superar las barreras internas y escapar del ciclo de la culpa y perfeccionismo dañino.
                  - Cómo obtener confianza en tus acciones, paso a paso hacia la mejor versión de ti con logros y satisfacción personal.
                  `,
  },

  {
    id: 5,
    title: `❤️‍🔥Forjando un Legado de Impacto y sin arrepentimientos`,
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
    id: 6,
    title: `🕵️‍♂️Descubriendo los Rasgos de la Personalidad y explotar todo su Potencial`,
    description: `
                  - Aprende la magia detrás de cada uno de tus RASGOS de tu personalidad.
                  - Crea objetivos basados en tu personalidad y lo que te motivará hacia tu éxito futuro.
                  - Aprende sobre las ventajas y desventajas de tu personalidad.
                  - Cómo sacarle el mejor partido a tu personalidad y también cómo puedes influir en esos rasgos para una mejor vida.
                  - Deja atrás las limitaciones o pensamiento extremista para poder sacar tu mejor potencial.
                  `,
  },
  {
    id: 7,
    title: `🦁Como matenerse disciplinado al igual que David Goggins y eliminar la procrastinación`,
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
    title: `🗿Construye el Historial de victorias que te desmuestre tu valor y te de confianza`,
    description: `
                  - Aprende a crear un historial que demuestre tu valía personal y genere confianza.
                  - Aprende a aceptar a tu yo pasado y seguir un camino incluso si te encuentras en el peor momento de tu vida.
                  - Encuentra propósito y significado en hacer sacrificios.
                  - Entiende el HISTORIAL detrás de tí, aprecialo y ve a por mucho más.
                  `,
  },
  {
    id: 9,
    title: `💎Como dejar amistades venenosas y el Arte de Construir Amistades que Perduran`,
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
    title: `📅Como Mantener los hábitos a largo plazo con constancia incluso sin motivación`,
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
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
