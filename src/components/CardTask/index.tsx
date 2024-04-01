import { TrashSimple, CheckCircle } from "@phosphor-icons/react";
import {
  Container,
  Description,
  WrapperContent,
  IconDefault,
  Line,
  Title,
  WrapperLineRadio,
  WrapperTask,
  IconConcluded,
  WrapperAction,
} from "./styles";
import { ButtonIcon } from "../ButtonIcon";
import { typeTask } from "../../libs/DTO";
import { Dialog } from "../Dialog";
import { useState } from "react";

type Props = {
  showLine?: boolean;
  task: typeTask;
  onConcludeTask(value: typeTask): void;
  onDeleteTask(value: typeTask): void;
};

export const CardTask = ({
  showLine = true,
  task,
  onConcludeTask,
  onDeleteTask,
}: Props) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  function changeStatusTask() {
    task.status = !task.status;
    onConcludeTask(task);
  }

  function confirmDeleteTask() {
    setOpenConfirm(false);
    onDeleteTask(task);
  }

  return (
    <Container>
      <WrapperLineRadio>
        {task.status ? (
          <IconConcluded weight="fill" onClick={changeStatusTask} />
        ) : (
          <IconDefault weight="bold" onClick={changeStatusTask} />
        )}

        {showLine && <Line />}
      </WrapperLineRadio>

      <WrapperTask>
        <WrapperContent>
          <Title>{task.titulo}</Title>
          <Description>{task.descricao}</Description>
        </WrapperContent>

        <WrapperAction>
          {!task.status ? (
            <ButtonIcon
              icon={<TrashSimple weight="bold" size={18} />}
              onClick={() => setOpenConfirm(true)}
            />
          ) : (
            <CheckCircle weight="fill" fill="#26a259" size={20} />
          )}
        </WrapperAction>
      </WrapperTask>

      <Dialog
        isOpen={openConfirm}
        onClose={setOpenConfirm}
        onConfirmDelete={confirmDeleteTask}
      />
    </Container>
  );
};
