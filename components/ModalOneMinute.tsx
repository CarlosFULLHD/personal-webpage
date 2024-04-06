"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CountdownTimer from "./CountdownTimer";

export default function ModalOneMinute() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const timer = setTimeout(() => {
      onOpen();
    }, 60000); // Abre el modal después de 1 minuto
    return () => clearTimeout(timer);
  }, [onOpen]);

  const handleJoinNow = () => {
    const section = document.getElementById("seccion-compra");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    onClose(); // Cierra el modal después de la acción
  };

  const [copySuccess, setCopySuccess] = useState("");

  const discountcode = "LIBERTAD"; // Usa tu dirección de correo electrónico real aquí

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountcode).then(
      () => {
        setCopySuccess("¡Codigo de descuento copiado al portapapeles!");
        setTimeout(() => setCopySuccess(""), 3000); // Limpiar mensaje después de 3 segundos
      },
      () => {
        setCopySuccess("Error al copiar");
      }
    );
  };

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black text-center text-3xl md:text-4xl">
                ⏳ Oferta Exclusiva:
              </ModalHeader>
              <ModalBody className="text-center">
                <p className=" text-black text-lg md:text-xl">
                  Obtén acceso inmediato a "Libertad Digital" y sus Bonos
                  Exclusivos. ¡Date prisa, la oferta termina en
                  <CountdownTimer />
                </p>
                <h1 className="font-bold text-black">Usa el código:</h1>
                <h2 className="bg-custom-yellow py-2 rounded-lg text-black font-bold ">
                  {discountcode}
                </h2>
                <h3 className="font-bold text-black">
                  Recibe un{" "}
                  <span className="underline decoration-4 decoration-custom-yellow">
                    15% de descuento
                  </span>{" "}
                  en tu camino hacia la transformación.
                </h3>
                {copySuccess && (
                  <h3 className="text-green-500">{copySuccess}</h3>
                )}
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button
                  className=" bg-gradient-to-tr from-custom-yellow to-custom-orange text-xl font-bold"
                  onClick={handleJoinNow}
                >
                  Quiero unirme!
                </Button>
                <Button className="bg-custom-blue" onPress={copyToClipboard}>
                  Copiar Código
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
