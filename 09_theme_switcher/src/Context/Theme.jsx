// used in production grade apps
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // default value
    darkTheme: () => { },
    lightTheme: () => { },
});

export const ThemeProvider = ThemeContext.Provider;

// custom hooks: now only import useTheme instead of all files 
export default function useTheme(){
    return useContext(ThemeContext);
};