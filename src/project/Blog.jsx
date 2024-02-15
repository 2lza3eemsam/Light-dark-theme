import React, {useContext} from 'react'
import Title from './Components/Title'
import Button from "./Components/Button"
import { ThemeContext, themes } from './context/theme-context';

export default function Blog() {

    const {theme, changeTheme} = useContext(ThemeContext);

  return (
   <div className='container p-1'>
            <Title text= {`My Blog with ${theme} Theme `}/>
            <span style={{position: "absolute", top: 10, right: 10 }}>
            <Button text={theme === "dark" ? " Light" : "Dark"} btnClass={`${theme === "dark" && "btn-light"}btn-sm`} onClick={changeTheme}/>
            </span>
            <p>This is a web app That is used to changes the theme of the web page from dark to light and vice versa</p>

        </div>
    
  )
}
