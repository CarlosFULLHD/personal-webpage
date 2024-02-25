import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqsSection = () => {
  return (
    <section className="">
      <Accordion
        type="single"
        collapsible
        className="p-4 bg-white text-black rounded-lg my-8 mx-2"
      >
        <AccordionItem value="item-1" className="">
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
};
