import { Container, InputText, Label } from "./styles";

type Props = {
  title: string;
  placeHolder: string;
  type?: "text" | "time";
  valueText: string;
  onChangeText(value: string): void;
};

export const Input = ({
  title,
  placeHolder,
  type = "text",
  valueText,
  onChangeText,
}: Props) => {
  return (
    <Container>
      <Label htmlFor={title}>{title}</Label>
      <InputText
        id={title}
        type={type}
        placeholder={placeHolder}
        value={valueText}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </Container>
  );
};
