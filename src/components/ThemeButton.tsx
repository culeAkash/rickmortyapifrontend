
import { IconButton } from "@mui/material";
import {FaSun} from 'react-icons/fa'
import {FiMoon} from 'react-icons/fi'
import { useTheme } from "../hooks/useTheme";

export default function ThemeButton(){

    const {theme,setTheme} = useTheme()


    const changeTheme = ()=>{
        if(theme==='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }


    return(
        <IconButton onClick={()=>changeTheme()} sx={{ p: 0 }}>
            {theme === 'light' ? <FiMoon color="white"/> : <FaSun color="yellow"/>}
        </IconButton>
    )
}