import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Footer from './Footer/Footer';
import ResponsiveAppBar from './Header/AppBar';
import { Bootstrap } from './../svg-components/Bootstrap';
import { Css3 } from './../svg-components/Css3'
import { Express } from './../svg-components/Express'
import { Github } from './../svg-components/Github'
import { Html } from './../svg-components/Html'
import { Js } from './../svg-components/Js'
import { Mui } from './../svg-components/Mui'
import { Mysql } from './../svg-components/Mysql'
import { ReactIcon } from './../svg-components/ReactIcon'

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <div>
        hola! soy Dimitri lagares!<br/>
        Programador fullstack en desarrollo,
        en la actualidad he manejado las siguientes tecnologías:<br/>
      </div>
      <Stack direction="row" style={{ m:'auto', justifyContent:'center', border: 'solid', borderRadius: 50, borderBlockColor:'#f0f0f0'}} spacing={2}>
      <Avatar>
        <Html/>
      </Avatar>

      <Avatar>
        <Css3/>
      </Avatar>

      <Avatar>
        <Js/>
      </Avatar>

      <Avatar>
        <Bootstrap/>
      </Avatar>

      <Avatar>
        <Mui/>
      </Avatar>

      <Avatar>
        <Express/>
      </Avatar>
      
      <Avatar>
        <Github/>
      </Avatar>
      
      <Avatar>
        <Mysql/>
      </Avatar>
      
      <Avatar>
        <ReactIcon/>
      </Avatar>
    </Stack>
      <div>
        👇🏽Aqui una captura de pantalla de algunos de los proyectos realizados con su link a su repositorio en GitHub👇🏽
      </div>
      <div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home;