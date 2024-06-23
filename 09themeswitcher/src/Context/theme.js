import {createContext,UserContext} from 'react';
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider=ThemeContex.ThemeProvider

export default function useTheme(){
    return useContext(ThemeContext)
}