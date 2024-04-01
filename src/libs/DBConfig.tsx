export const DBConfig = {
  name: "db-tasks",
  version: 1,
  objectStoresMeta: [
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
        { name: "descricao", keypath: "descricao", options: { unique: false } },
        { name: "status", keypath: "status", options: { unique: false } },
        { name: "data", keypath: "data", options: { unique: false } },
      ],
    },
  ],
};
