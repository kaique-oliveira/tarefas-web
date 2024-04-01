import { useEffect, useState } from "react";
import { Circle, Container } from "./styles";
import { Moon, Sun } from "@phosphor-icons/react";
import { useChangeTheme } from "../../hooks/ChangeTheme";

export const SwitchTheme = () => {
  const { onChangeTheme } = useChangeTheme();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    onChangeTheme(toggle ? "dark" : "light");
  }, [toggle]);

  return (
    <Container htmlFor="theme">
      <input id="theme" type="checkbox" onChange={() => setToggle(!toggle)} />
      <Circle htmlFor="theme" $variant={toggle ? "dark" : "light"}>
        {toggle ? <Moon /> : <Sun />}
      </Circle>
    </Container>
  );
};
