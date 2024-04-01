import React, { ReactElement } from "react";

import { Container, PropButtonType, Title } from "./styles";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon?: ReactElement;
  variant?: PropButtonType;
};

export const Button = ({
  title,
  icon,
  variant = "default",
  ...rest
}: Props) => {
  return (
    <Container {...rest} $variant={variant}>
      <Title>{title}</Title>

      {icon && icon}
    </Container>
  );
};
