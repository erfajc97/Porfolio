import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navmenu from './assets/components/Navmenu'
import MainPrincipal from './assets/components/MainPrincipal'
import Knowledge from './assets/components/Knowledge'
import Portafolio from './assets/components/Portafolio'
import Skills from './assets/components/Skills'
import Contacts from './assets/components/Contacts'
import { useRef } from 'react'


function App() {
  const [windowsSides, setWindowsSides] = useState(window.innerWidth);
  const [buttonMenu, setButtonMenu] = useState("menuDesplegado");
  
  console.log(windowsSides);

  useEffect(()=>{
    if(windowsSides <= 600){
     setButtonMenu("menuNoDesplegado");
    }

  },[])

  const navMenu = () =>{

    if(buttonMenu === "menuDesplegado"){
       setButtonMenu("menuNoDesplegado");

    }else{
      setButtonMenu("menuDesplegado");
    }
  }

  return (
    <div className="App">
      <header>
        <Navmenu buttonMenu={buttonMenu} />

        <button onClick={navMenu} className="container-btn-menu">
          {buttonMenu ? (
            <i id="btn-menu" className="bx  bx-menu bx-lg"></i>
          ) : (
            <i id="btn-menu" className="bx  bx-x bx-lg"></i>
          )}
        </button>
      </header>

      <main>
       <MainPrincipal/>
       <Knowledge/>
       <Portafolio/>
       <Skills/>
       <Contacts/>
      </main>
    </div>
  );
}

export default App
