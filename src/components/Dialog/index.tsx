import { useEffect, useState } from "react";
import {
  Container,
  Message,
  Title,
  WrapperButtons,
  WrapperContent,
} from "./styles";
import { Button } from "../Button";

type Props = {
  isOpen: boolean;
  onClose(toggle: boolean): void;
  onConfirmDelete(): void;
};

export const Dialog = ({ isOpen, onClose, onConfirmDelete }: Props) => {
  const [isShowBackground, setIsShowBackground] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowBackground(isOpen);

      setTimeout(() => {
        setIsShowModal(isOpen);
      }, 300);
    } else {
      setTimeout(() => {
        setIsShowBackground(isOpen);
      }, 300);

      setIsShowModal(isOpen);
    }
  }, [isOpen]);

  return (
    <Container $isShow={isShowBackground}>
      <WrapperContent $isShow={isShowModal}>
        <Title>Atenção</Title>

        <Message>Deseja realmente deletar essa tarefa?</Message>

        <WrapperButtons>
          <Button title="Não" variant="text" onClick={() => onClose(false)} />
          <Button title="Sim" variant="text" onClick={onConfirmDelete} />
        </WrapperButtons>
      </WrapperContent>
    </Container>
  );
};
