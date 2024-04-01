import { ThemeProvider } from "styled-components";
import { IndexedDB, initDB } from "react-indexed-db-hook";

import "./global.css";
import { useChangeTheme } from "./hooks/ChangeTheme";
import { dark, light } from "./theme";
import { Home } from "./pages/Home";
import { DBConfig } from "./libs/DBConfig";

initDB(DBConfig);

function App() {
  const { getTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={getTheme === "light" ? light : dark}>
      <IndexedDB
        name="db-tasks"
        version={1}
        objectStoresMeta={[
          {
            store: "tasks",
            storeConfig: { keyPath: "id", autoIncrement: true },
            storeSchema: [
              {
                name: "id",
                keypath: "id",
                options: { unique: true, autoIncrement: true },
              },
              { name: "titulo", keypath: "titulo", options: { unique: false } },
              {
                name: "descricao",
                keypath: "descricao",
                options: { unique: false },
              },
              { name: "status", keypath: "status", options: { unique: false } },
              { name: "data", keypath: "data", options: { unique: false } },
            ],
          },
        ]}
      >
        <Home />
      </IndexedDB>
    </ThemeProvider>
  );
}

export default App;
