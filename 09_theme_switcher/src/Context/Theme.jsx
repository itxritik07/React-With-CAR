import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider

// custom hooks: now only import useTheme instead of all files 
export default function useTheme(){
    return useContext(ThemeContext)
}