// import React from 'react'
// import { Context, useState } from 'react';
// import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
// import Mainpage from './Mainpage';


// export default function ContextDemoFC() {

//     const ButtonThemeContext = React.createContext(
//         buttonThemes.primary
//     )

//     const buttonThemes = {
//         primary: {
//             color: "white",
//             background: "#45c496"
//         },
//         secondary: {
//             color: "whitesmoke",
//             background: "#d91b42"
//         }
//     }


//     const changeTheme = () => {
//         setButtonTheme(
//             "white"
//         )
//     }
     
//     const [buttonTheme, setButtonTheme] = useState("dark");

//     return (
//         <div>
//             <ButtonThemeContext.Provider value={changeTheme}>
//                 <Mainpage />
//             </ButtonThemeContext.Provider>
//             <button onClick={changeTheme}>Change Theme</button>
//         </div>
//     )
// }


