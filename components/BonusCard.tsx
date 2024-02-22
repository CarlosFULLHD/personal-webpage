import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// Define una interfaz para las props de tu componente
interface BonusCardProps {
  title: string;
  subtitle: string;
  description: string;
  avatarSrc: string;
}
// Añade las propiedades title, description, y avatarSrc como argumentos de la función
export default function BonusCard({
  title,
  subtitle,
  description,
  avatarSrc,
}: BonusCardProps) {
  const descriptionItems = description
    .split("-")
    .map((item) => item.trim())
    .filter((item) => item);
  return (
    <Card className="pt-4 bg-custom-blue rounded-xl">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* Utiliza la propiedad title para mostrar el subtítulo */}
        <h4 className="font-bold text-md">{subtitle}</h4>
        {/* Utiliza la propiedad title para mostrar el título */}
        <h1 className="font-bold text-large">{title}</h1>
        {/* Utiliza la propiedad description para mostrar la descripción */}
        <ul className="text-base font-normal">
          {descriptionItems.map((item, index) => (
            <li key={index} className="list-disc ml-4">
              {item}
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardBody className="overflow-visible pt-2">
        {/* Utiliza la propiedad avatarSrc para la imagen */}
        <Image
          alt="Card background"
          className="object-cover mb-0 rounded-b-lg p-0"
          src={avatarSrc}
          width={570}
        />
      </CardBody>
    </Card>
  );
}
