import { useEffect, useState } from "react";
import { DotOutline, Plus, NoteBlank } from "@phosphor-icons/react";

import { HighLight } from "../../components/Hightlight";
import { StateFilter } from "../../components/StateFilter";
import {
  Container,
  WrapperMain,
  WrapperStateFilter,
  ListTask,
  Header,
  ContainerWeekCalendar,
  WeekCalendar,
  WrapperEmpty,
} from "./styles";
import { Button } from "../../components/Button";
import { CardTask } from "../../components/CardTask";
import { SwitchTheme } from "../../components/SwitchTheme";
import { FormNewTask } from "../../components/FormNewTask";
import { useIndexedDB } from "react-indexed-db-hook";
import { typeTask } from "../../libs/DTO";
import { useTheme } from "styled-components";
import { ButtonIcon } from "../../components/ButtonIcon";

export const Home = () => {
  const { add, getAll, update, deleteRecord } = useIndexedDB("tasks");
  const theme = useTheme();

  const [allTasks, setAllTasks] = useState<typeTask[]>([]);
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [dateSelected, setDateSelected] = useState<Date>(new Date());

  const [stateFilter, setStateFilter] = useState<"todo" | "concluded">("todo");
  const [toggleOpenAndCloseFormTask, setToggleOpenAndCloseFormTask] =
    useState(false);

  const { innerWidth: width } = window;

  async function fetchTasks() {
    const result = (await getAll()) as typeTask[];

    if (stateFilter === "todo") {
      setAllTasks(
        result.filter(
          (task) =>
            !task.status &&
            task.data.toLocaleDateString() === dateSelected.toLocaleDateString()
        )
      );
    } else {
      setAllTasks(
        result.filter(
          (task) =>
            task.status &&
            task.data.toLocaleDateString() === dateSelected.toLocaleDateString()
        )
      );
    }
  }

  async function updateTask(task: typeTask) {
    await update(task);
  }

  async function saveNewTask(task: typeTask) {
    task.data = dateSelected;
    await add(task);

    setToggleOpenAndCloseFormTask(false);
    fetchTasks();
  }

  async function deleteTask(task: typeTask) {
    await deleteRecord(task.id);
  }

  function generateWeekCalendar() {
    const dates = [] as Date[];

    for (let index = 1; index < 8; index++) {
      const dateNow = new Date();

      const difference = index - dateNow.getDay();

      const dateDayWeek = new Date(
        dateNow.setDate(dateNow.getDate() + difference)
      );

      dates.push(dateDayWeek);
    }

    setWeekDates(dates);
  }

  function changeDate(date: Date) {
    setDateSelected(date);
  }

  useEffect(() => {
    fetchTasks();
  }, [allTasks]);

  useEffect(() => {
    generateWeekCalendar();
  }, []);

  return (
    <Container>
      <WrapperMain>
        <Header>
          <HighLight title="Tarefas da semana" date={dateSelected} />
          <SwitchTheme />
        </Header>

        <ContainerWeekCalendar>
          {weekDates.map((date) => (
            <WeekCalendar key={date.getDay() + date.getMonth()}>
              <label htmlFor={(date.getDay() + date.getMonth()).toString()}>
                {date
                  .toLocaleDateString("pt-BR", { weekday: "short" })
                  .replace(".", "")}
              </label>

              <label htmlFor={(date.getDay() + date.getMonth()).toString()}>
                {date.toLocaleDateString("pt-BR", { day: "2-digit" })}
              </label>
              <DotOutline
                weight="fill"
                size={20}
                color={
                  date.toLocaleDateString() ===
                  dateSelected.toLocaleDateString()
                    ? theme.COLORS.PRIMARY
                    : "transparent"
                }
              />

              <input
                id={(date.getDay() + date.getMonth()).toString()}
                type="radio"
                name="day"
                defaultChecked={
                  date.toLocaleDateString() ===
                  dateSelected.toLocaleDateString()
                }
                onChange={() => changeDate(date)}
              />
            </WeekCalendar>
          ))}
        </ContainerWeekCalendar>

        <WrapperStateFilter>
          <StateFilter
            title="A fazer"
            variant={stateFilter === "todo" ? "active" : "default"}
            onClick={() => setStateFilter("todo")}
          />

          <StateFilter
            title="Concluído"
            variant={stateFilter === "concluded" ? "active" : "default"}
            onClick={() => setStateFilter("concluded")}
          />

          {width > 400 ? (
            <Button
              title="Criar"
              icon={<Plus weight="bold" />}
              variant="active"
              style={{ alignSelf: "flex-end" }}
              onClick={() => setToggleOpenAndCloseFormTask(true)}
            />
          ) : (
            <ButtonIcon variant="active" icon={<Plus />} />
          )}
        </WrapperStateFilter>

        <ListTask>
          {allTasks.length > 0 ? (
            allTasks.map((task, indice) => (
              <CardTask
                key={task.id + task.titulo}
                task={task}
                showLine={indice === allTasks.length - 1 ? false : true}
                onConcludeTask={updateTask}
                onDeleteTask={deleteTask}
              />
            ))
          ) : (
            <WrapperEmpty>
              <NoteBlank size={56} weight="regular" />
              <span>Sem tarefas cadastradas</span>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </WrapperEmpty>
          )}
        </ListTask>
      </WrapperMain>

      <FormNewTask
        isOpen={toggleOpenAndCloseFormTask}
        onToggleOpenAndClose={setToggleOpenAndCloseFormTask}
        onSaveNewTask={saveNewTask}
      />
    </Container>
  );
};
