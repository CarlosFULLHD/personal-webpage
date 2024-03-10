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
    <Card className="pt-4 bg-white text-black rounded-xl mb-2 mx-2 md:mx-16">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* Utiliza la propiedad title para mostrar el subtítulo */}
        <h4 className="font-bold text-xl">{subtitle}</h4>
        {/* Utiliza la propiedad title para mostrar el título */}
        <h1 className="font-bold text-2xl">{title}</h1>
        {/* Utiliza la propiedad description para mostrar la descripción */}
        <ul className="text-lg font-normal">
          {descriptionItems.map((item, index) => (
            <li key={index} className="list-disc ml-4">
              {item}
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardBody className="overflow-visible pt-2">
        <Image
          alt="Card background"
          src={avatarSrc}
          className="w-full max-w-md h-auto"
            style={{ maxWidth: "100%", height: "auto" }}
        />
      </CardBody>
    </Card>
  );
}
