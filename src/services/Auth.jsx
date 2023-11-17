import { createContext } from "react";

const authContext = createContext();

export const authProvider = ({ children }) => {
  console.log(children);
};
