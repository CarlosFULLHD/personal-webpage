import BonusCard from "./BonusCard";
import DetailedCard from "./DetailedCard";
const bonusData = [
  {
    id: 1,
    subtitle: `BONUS #1`,
    title: `❤️‍🔥Comunidad de Seguimiento y Apoyo`,
    description: `Me interesa ayudarte de verdad, es por eso que quiero darlo TODO.
    - Acceso a una comunidad exclusiva en Discord de por vida.
    - Durante 90 días después de tu compra puedes hacernos cualquier pregunta, objeción y haremos el mejor trabajo para darte con la mejor solución posible.
    - Reuniones de 1 a 3 HORAS semanales para escucharte y conocerte mejor en tu camino, escuchar tus problemas y apoyarte a superarlos.
    - Oportunidad de solicitar soluciones a problemas para futuras actualizaciones.`,
    avatarSrc: `/tonyrobbins-photo.jpg`,
  },
  {
    id: 2,
    subtitle: `BONUS #2 - sale en 1 mes`,
    title: `🚫Guía Definitiva Contra la Pornografía`,
    description: ` Estrategias para la Desexualización: Aprende cómo reducir la influencia de los estímulos sexuales en tu vida diaria.
    Renovación de Identidad y Hábitos: Construye una nueva autoimagen alejada de la dependencia y cultiva hábitos saludables que refuercen tu determinación.
    Mindfulness y Herramientas Prácticas: Incorpora técnicas de atención plena para manejar impulsos y desarrollar autocontrol.
    Deconstrucción de Creencias Limitantes: Desmonta las falsas creencias que perpetúan el ciclo de la adicción.
    Evitar la Culpa y Crear Nuevos Condicionamientos: Aprende a liberarte de la culpa y establece un nuevo condicionamiento positivo hacia la sexualidad.`,
    avatarSrc: `/tonyrobbins-photo.jpg`,
  },
  {
    id: 3,
    subtitle: `BONUS #3 - sale en 1 mes`,
    title: `🌱Cultivando la Inteligencia Emocional`,
    description: `Comprende Tus Emociones: Descubre cómo navegar y entender tus emociones y sentimientos para una mejor salud mental.
    Salida de la Depresión: Estrategias y prácticas para superar la depresión y fomentar un bienestar emocional duradero.
    Resiliencia Frente al Fracaso: Aprende a vivir con el fracaso, a aprender de él y a ser resiliente ante las adversidades.
    Lucha Contra el Miedo, el Estrés y la Ansiedad: Herramientas y técnicas para gestionar el miedo, reducir el estrés y controlar la ansiedad.
    Mejorando las Relaciones Personales: Consejos para fortalecer tus relaciones interpersonales a través de una mayor empatía y entendimiento emocional. `,
    avatarSrc: `/tonyrobbins-photo.jpg`,
  },
  {
    id: 4,
    subtitle: `BONUS #4 - sale en 1 mes`,
    title: `⚔️Fortaleza y Sabiduría Estoica`,
    description: ` Amor Fati y Memento Mori: Encuentra belleza en el destino y recuerda la impermanencia de la vida como motivaciones para vivir plenamente.
    Principios Estoicos para la Vida Diaria: Aprende a aplicar enseñanzas estoicas en situaciones cotidianas, enfocándote en lo que realmente puedes controlar.
    Desarrolla una Mentalidad Resiliente: Fortalece tu capacidad para enfrentar adversidades, aprendiendo de los desafíos y manteniéndote firme ante las dificultades.
    Enfócate en lo que Puedes Controlar: Estrategias para concentrarte en tus acciones y reacciones, dejando de lado lo que escapa de tu control.`,
    avatarSrc: `/tonyrobbins-photo.jpg`,
  },
  {
    id: 5,
    subtitle: `BONUS #5 - `,
    title: `📅📚✍️Plantillas de Notion ESPECIALES`,
    description: ` - Menú del Descanso, programa tu descanso conscientemente 
    - Construye tu Visión Futura, ten un futuro que te de esperanza 
    - Construye tu Antivisión, ten un futuro que te de miedo llegar y por lo tanto alejarte de el 
    - Trackeador de Habitos, una manera de dar seguimiento a tus hábitos de manera facil y que te motiven`,
    avatarSrc: `/tonyrobbins-photo.jpg`,
  },
  {
    id: 6,
    subtitle: `BONUS #6`,
    title: `💯‼️Actualizaciónes EXCLUSIVAS en el curso`,
    description: `- Con las sugerencias, problemas y retroalimentación de cada usuario mejoraremos y daremos actulaizaciones EXCLUSIVAS
    - Nuevos ejercicios prácticos
    - Contenido audiovisual exclusivo
    - Guia paso a paso para cada actualización haciendo fácil cualquier nueva lección añadida
     `,
    avatarSrc: `/tonyrobbins-photo.jpg`,
  },
];
export const BonusSection = () => {
  return (
    <section className="m-0 lg:max-w-3xl">
      <div className=" max-w-[1024px] p-1 sm:p-2 md:p-4 lg:px-8">
        <div className="">
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
    </section>
  );
};
