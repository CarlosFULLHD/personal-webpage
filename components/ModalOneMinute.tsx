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
              <ModalHeader className="flex flex-col gap-1 text-black text-center text-3xl">
                ⏳ Oferta Exclusiva:
              </ModalHeader>
              <ModalBody className="text-center">
                <p className=" text-black">
                  ¡El tiempo se agota! Asegura tu acceso a Libertad Digital con
                  bonificaciones especiales. Esta promoción termina en:
                  <CountdownTimer />
                </p>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button
                  className=" bg-gradient-to-tr from-custom-yellow to-custom-orange text-xl font-bold"
                  onClick={handleJoinNow}
                >
                  Quiero unirme!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
