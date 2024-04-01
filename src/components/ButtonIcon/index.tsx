import { ReactElement } from "react";
import { Container, PropButtonType } from "./styles";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  icon: ReactElement;
  variant?: PropButtonType;
};

export const ButtonIcon = ({ icon, variant = "default", ...rest }: Props) => {
  return (
    <Container $variant={variant} {...rest}>
      {icon}
    </Container>
  );
};
