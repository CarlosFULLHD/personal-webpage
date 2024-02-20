import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// Define una interfaz para las props de tu componente
interface DetailedCardProps {
  title: string;
  description: string;
  avatarSrc: string;
}
// Añade las propiedades title, description, y avatarSrc como argumentos de la función
export default function DetailedCard({
  title,
  description,
  avatarSrc,
}: DetailedCardProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* Utiliza la propiedad title para mostrar el título */}
        <h4 className="font-bold text-large">{title}</h4>
        {/* Utiliza la propiedad description para mostrar la descripción */}
        <small className="text-default-500">{description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* Utiliza la propiedad avatarSrc para la imagen */}
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={avatarSrc}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
