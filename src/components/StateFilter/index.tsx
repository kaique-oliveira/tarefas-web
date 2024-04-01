import { Container, PropStateFilterType, Title } from "./styles";
import { Circle, RadioButton } from "@phosphor-icons/react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  variant?: PropStateFilterType;
};

export const StateFilter = ({ variant = "default", title, ...rest }: Props) => {
  return (
    <Container {...rest} $variant={variant}>
      {variant === "default" ? (
        <Circle weight="bold" />
      ) : (
        <RadioButton weight="fill" />
      )}

      <Title>{title}</Title>
    </Container>
  );
};
