import BonusCard from "./BonusCard";
const bonusData = [
  {
    id: 1,
    subtitle: `BONUS #1`,
    title: `🧭Cómo Encontrar sentido a tu vida y un Propósito`,
    description: `
                  - Exploraremos la responsabilidad personal de vivir a plenitud.
                  - Valorar tus experiencias y encontrar significado en tus sacrificios.
                  - Cómo disfrutar de este viaje, ya que no se trata sobre éxitos rápidos o ganancias monetarias instantáneas; te ofrezco algo infinitamente más valioso.
                  - Descubre el peligro de la arrogancia y valora la humildad.
                  - Descubre el beneficio oculto del sufrimiento hacia la transformación personal.
                  `,
                  avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/encuentra_proposito`,
  },
  {
    id: 2,
    subtitle: `BONUS #2`,
    title: `🌙 Secretos para un Sueño Profundo y Reparador`,
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
    avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/triplica_tu_energia`,
  },
  {
    id: 3,
    subtitle: `BONUS #3:`,
    title: `🚫Vence la Adicción ala Pornografía y Repara los daños`,
    description: ` - Estrategias para la Desexualización: Aprende cómo reducir la influencia de los estímulos sexuales en tu vida diaria.
    - Renovación de Identidad y Hábitos:  Aprende a desmantelar los estímulos sexuales no deseados y a construir una identidad fortalecida.
    - Mindfulness y Herramientas Prácticas: Incorpora técnicas de atención plena para manejar impulsos y desarrollar autocontrol.
    - Deconstrucción de Creencias Limitantes: Desmonta las falsas creencias que perpetúan el ciclo de la adicción.
    - Evitar la Culpa y Crear Nuevos Condicionamientos: Aprende a liberarte de la culpa y establece un nuevo condicionamiento positivo hacia la sexualidad.`,
    avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/superar_adiccion`,
  },
  {
    id: 4,
    subtitle: `BONUS #4`,
    title: `🌱Claves para una Vida Mentalmente Enriquecedora y fuerte`,
    description: `- Comprende Tus Emociones: Descubre cómo comprender y gestionar tus emociones de manera efectiva con estrategias probadas.
    - Salida de la Depresión: Estrategias y prácticas para superar la depresión y fomentar un bienestar emocional duradero.
    - Resiliencia Frente al Fracaso: Aprende a vivir con el fracaso, a aprender de él y a ser resiliente ante las adversidades.
    - Lucha Contra el Miedo, el Estrés y la Ansiedad: Herramientas y técnicas para gestionar el miedo, reducir el estrés y controlar la ansiedad.
    - Mejorando las Relaciones Personales: Consejos para fortalecer tus relaciones interpersonales a través de una mayor empatía y entendimiento emocional. `,
    avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/cultivando_inteligencia_emocional`,
  },
  {
    id: 5,
    subtitle: `BONUS #5`,
    title: `⚔️Principios de Fortaleza y Sabiduría Estoica para una vida honorable`,
    description: ` - Amor Fati y Memento Mori: Encuentra belleza en el destino y recuerda la finitud de la vida como motivaciones para vivir plenamente.
    - Incorpora los principios estoicos en tu vida diaria para lograr una mentalidad inquebrantable. 
    - Principios Estoicos para la Vida Diaria: Aprende a aplicar enseñanzas estoicas en situaciones cotidianas, enfocándote en lo que realmente puedes controlar.
    - Desarrolla una Mentalidad Resiliente: Fortalece tu capacidad para enfrentar adversidades, aprendiendo de los desafíos y manteniéndote firme ante las dificultades.
    - Enfócate en lo que Puedes Controlar: Estrategias para concentrarte en tus acciones y reacciones, dejando de lado lo que escapa de tu control.`,
    avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/fortaleza_sabiduria_estoica`,
  },
  {
    id: 6,
    subtitle: `BONUS #6`,
    title: `❤️‍🔥Tu Red de Apoyo para el Éxito Sostenido`,
    description: `Me interesa ayudarte de verdad, es por eso que quiero darlo TODO.
    - Acceso a una comunidad exclusiva en Discord de por vida.
    - Sesiones semanales interactivas donde podrás compartir tus desafíos, obtener soluciones personalizadas y colaborar con mentes afines. 
    - Reuniones de 1 a 3 HORAS cada semana durante 90 días para escucharte y conocerte mejor en tu camino, escuchar tus problemas y apoyarte a superarlos.
    - Oportunidad de solicitar soluciones a problemas para futuras actualizaciones.`,
    avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/comunidad_seguimiento_y_apoyo`,
  },
  {
    id: 7,
    subtitle: `BONUS #7`,
    title: `💯‼️Actualizaciónes EXCLUSIVAS en el curso`,
    description: `- Con las sugerencias, problemas y retroalimentación de cada usuario mejoraremos y daremos actulaizaciones EXCLUSIVAS
    - Nuevos ejercicios prácticos
    - Contenido audiovisual exclusivo
    - Guia paso a paso para cada actualización haciendo fácil cualquier nueva lección añadida
     `,
    avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/actualizaciones_exclusivas_para_los_cursos`,
  },
  {
    id: 8,
    subtitle: `BONUS #8: GRATIS POR TIEMPO LIMITADO`,
    title: `📅📚✍️4 Plantillas de Notion EXCLUSIVAS`,
    description: ` - Menú del Descanso, programa tu descanso conscientemente 
    - Construye tu Visión Futura, ten un futuro que te de esperanza 
    - Construye tu Antivisión, ten un futuro que te de miedo llegar y por lo tanto alejarte de el 
    - Trackeador de Habitos, una manera de dar seguimiento a tus hábitos de manera facil y que te motiven`,
    avatarSrc: `https://d1kdkr2pswehq6.cloudfront.net/plantillas_de_notion`,
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
