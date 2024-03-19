"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalComponentContanctame() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [copySuccess, setCopySuccess] = useState("");

  const email = "carlitos@carlitosnina.com"; // Usa tu dirección de correo electrónico real aquí

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setCopySuccess("¡Correo copiado al portapapeles!");
        setTimeout(() => setCopySuccess(""), 3000); // Limpiar mensaje después de 3 segundos
      },
      () => {
        setCopySuccess("Error al copiar");
      }
    );
  };
  return (
    <>
      <Button
        variant="light"
        className="text-white font-bold italic"
        onPress={onOpen}
      >
        Contáctame
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                Contáctame
              </ModalHeader>
              <ModalBody>
                <p className=" text-black">
                  Si eres una marca, negocio o estás interesado en alguna
                  colaboración, no dudes en enviarme un correo electrónico.
                  ¡Estoy abierto a discutir nuevas oportunidades!
                </p>
                <h1 className="font-bold mt-4 text-black">
                  Correo electrónico:
                </h1>
                <h2 className="bg-custom-yellow p-2 rounded-lg text-black font-bold ">
                  {email}
                </h2>
                {copySuccess && (
                  <h3 className="text-green-500 mt-2">{copySuccess}</h3>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={copyToClipboard}>
                  Copiar Correo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
