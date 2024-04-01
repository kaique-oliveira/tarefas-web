import React, { createContext, useContext, useState } from "react";

type PropsTheme = "light" | "dark";

type PropsContext = {
  getTheme: PropsTheme;
  onChangeTheme(theme: PropsTheme): void;
};

const changeThemeContext = createContext<PropsContext>(null!);

export function ChangeThemeProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [getTheme, onChangeTheme] = useState<PropsTheme>("light");

  return (
    <changeThemeContext.Provider value={{ getTheme, onChangeTheme }}>
      {children}
    </changeThemeContext.Provider>
  );
}

export const useChangeTheme = () => {
  const context = useContext(changeThemeContext);
  return context;
};
