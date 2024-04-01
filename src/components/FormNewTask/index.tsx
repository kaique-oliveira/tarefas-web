import { useEffect, useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Title, WrapperButtons, WrapperContent } from "./styles";
import { typeTask } from "../../libs/DTO";

type Props = {
  isOpen: boolean;
  onToggleOpenAndClose(toggle: boolean): void;
  onSaveNewTask(task: typeTask): void;
};

export const FormNewTask = ({
  isOpen,
  onToggleOpenAndClose,
  onSaveNewTask,
}: Props) => {
  const [isShowBackground, setIsShowBackground] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsShowBackground(isOpen);

      setTimeout(() => {
        setIsShowForm(isOpen);
      }, 300);
    } else {
      setTimeout(() => {
        setIsShowBackground(isOpen);
      }, 300);

      setIsShowForm(isOpen);

      setTitulo("");
      setDescricao("");
    }
  }, [isOpen]);

  function save() {
    if (titulo.trim() && descricao.trim()) {
      const task = {
        titulo,
        descricao,
        status: false,
        data: new Date(),
      } as typeTask;

      onSaveNewTask(task);
    }
  }

  return (
    <Container $isShow={isShowBackground}>
      <WrapperContent $isShow={isShowForm}>
        <Title>Nova tarefa</Title>

        <Input
          title="Titulo"
          placeHolder="Ex.: Estudar..."
          onChangeText={setTitulo}
          valueText={titulo}
        />
        <Input
          title="Descrição"
          placeHolder="Ex.: Matemática e Português"
          onChangeText={setDescricao}
          valueText={descricao}
        />

        <WrapperButtons>
          <Button
            title="Cancelar"
            onClick={() => onToggleOpenAndClose(false)}
          />
          <Button title="Salvar" variant="active" onClick={save} />
        </WrapperButtons>
      </WrapperContent>
    </Container>
  );
};
