import { createContext } from "react";

export const DEFAULT_USER = {
  id: 0,
  email: '',
  name: '',
  categories: [],
};

const Context = createContext(DEFAULT_USER);

export default Context;
