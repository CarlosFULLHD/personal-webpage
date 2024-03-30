import React from "react";
import { Card, CardHeader} from "@nextui-org/react";
// Define una interfaz para las props de tu componente
interface DetailedCardProps {
  title: string;
  description: string;
}
// Añade las propiedades title, description, y avatarSrc como argumentos de la función
export default function DetailedCard({
  title,
  description,
}: DetailedCardProps) {
  const descriptionItems = description
    .split("-")
    .map((item) => item.trim())
    .filter((item) => item);
  return (
    <Card className="py-4 bg-white text-black rounded-xl mb-2 mx-2 md:mx-16">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
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
    </Card>
  );
}
