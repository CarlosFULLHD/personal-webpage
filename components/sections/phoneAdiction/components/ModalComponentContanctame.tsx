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
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <button
        onClick={onOpen}
        type="button"
        className={cn(
          "flex items-center gap-x-2 px-6 py-4 text-slate-50 text-xs lg:text-base font-[500] transition-all hover:text-slate-300  rounded-xl",
          "bg-transparent"
        )}
      >
        <User size={22} className="text-slate-50" />
        Contáctame
      </button>
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
                <p className="text-black">
                  Si eres una marca, negocio o estás interesado en alguna
                  colaboración, no dudes en enviarme un correo electrónico.
                  ¡Estoy abierto a discutir nuevas oportunidades!
                </p>
                <h1 className="font-bold mt-4 text-black">
                  Correo electrónico:
                </h1>
                <h2 className="bg-custom-yellow p-2 rounded-lg text-black font-bold">
                  {email}
                </h2>
                {copySuccess && (
                  <h3 className="text-green-500 mt-2">{copySuccess}</h3>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="secondary" onPress={copyToClipboard}>
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
