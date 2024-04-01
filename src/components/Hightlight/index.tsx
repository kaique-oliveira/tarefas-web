import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: string;
  date: Date;
};

export const HighLight = ({ title, date }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>
        {date.toLocaleDateString("pt-BR", {
          month: "long",
          day: "2-digit",
          weekday: "long",
        })}
      </Subtitle>
    </Container>
  );
};
