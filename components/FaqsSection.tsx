import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqsSection = () => {
  return (
    <section className="md:w-4/6 lg:w-4/6">
      <Accordion
        type="single"
        collapsible
        className="p-4 bg-white text-black rounded-lg my-8 mx-2"
      >
        <AccordionItem
          value="item-1"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>¿Qué es una plantilla de Notion?</AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            Notion es una aplicación todo-en-uno que combina notas, tareas,
            wikis y bases de datos para proporcionar un espacio de trabajo
            altamente personalizable.
            <br />
            <br />
            Las plantillas de Notion, como la mía, son configuraciones
            preestablecidas que puedes importar a tu propio espacio de Notion
            para empezar rápidamente a usarla.
            <br />
            <br />
            Tambien Notion te deja escribir y personalizar COMPLETAMENTE la
            plantilla para que hagas apuntes, escribas tu mismo y hagas tus
            planes personalizados.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>¿Tengo que pagar por Notion?</AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            No hay ningún costo extra, solo necesitas una cuenta gratuita de
            Notion para esta plantilla(Notion deja 5MB gratuitos de subida de
            archivos como imagenes, PDF a cada cuenta).
            <br />
            <br />
            PD: Si ya usaste notion, podrias crearte una nueva cuenta ya que es
            probable que pese 3-4MB por el material.
            <br />
            Recuerda que el espacio limite aplica para subida de archivos, no
            para el texto que vayas a escribir, así que no te preocupes por
            ello.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
            ¿Cómo accedo a la plantilla después de comprarla?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            Recibirás un enlace directo y pasos sencillos para duplicar la
            plantilla en tu espacio de Notion, todo esto también será enviado a
            tu correo electrónico(el que ingreses).
            <br />
            También el link al grupo de Discord con mas información del grupo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
            ¿Cuánto tiempo necesito dedicar al curso para ver resultados?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            El tiempo puede variar según el individuo, algunos pueden tener
            mejores resultados según su compromiso y si aplican las enseñanzas.
            <br />
            <br />
            Puedes ir a tu propio ritmo, puedes unirte a las reuniones de
            Discord en cualquier momento y tener acceso a las grabaciónes.
            <br />
            <br />
            Simplifiqué al maximo las enseñanzas de muchos autores con tal de
            que sea facil de seguir, leer y poner en práctica, incluso si tienes
            poco tiempo, porque se trata de mejorar tú mismo a tu ritmo, cada
            uno tiene una vida diferente y eso lo entiendo.
            <br />
            <br />Y si no crees que es para tí recuerda que puedes pedir un
            reembolso hasta 30 dias despues de la compra sin problemas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
            ¿Es segura mi información de pago?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            Si, los pagos se manejan a través de sistemas seguros y no
            almacenamos ninguna información. Con la infraestructura de Lemon
            squeezy, puedes estar seguro de que tu transacción es privada y
            segura.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
