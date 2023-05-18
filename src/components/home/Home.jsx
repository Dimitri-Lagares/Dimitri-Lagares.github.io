import React from 'react'
import { Typography, Stack, Avatar } from '@mui/material';
import Footer from './Footer/Footer';
import ResponsiveAppBar from './Header/AppBar';
import { Css3 } from './../svg-components/Css3'
import { Express } from './../svg-components/Express'
import { Github } from './../svg-components/Github'
import { Html } from './../svg-components/Html'
import { Js } from './../svg-components/Js'
import { Mui } from './../svg-components/Mui'
import { Mysql } from './../svg-components/Mysql'
import { ReactIcon } from './../svg-components/ReactIcon'

const Home = () => {
  const technologies = [<Html/>, <Css3/>, <Js/>, <Express/>, <ReactIcon/>, <Github/>, <Mui/>, <Mysql/>, ]
  return (
    <Stack>
      <ResponsiveAppBar/>
      <Typography>
        hola! soy Dimitri lagares!<br/>
        Programador fullstack en desarrollo,
        en la actualidad he manejado las siguientes tecnologías:<br/>
      </Typography>
      <Stack direction="row" style={{ m:'auto', justifyContent:'center', border: 'solid', borderRadius: 50, borderBlockColor:'#f0f0f0'}} spacing={2}>
      {
        technologies.map((techonology, index)=>(
        <Avatar sx={{bgcolor:'inherit'}} key={index}>
          {techonology}
        </Avatar>
        ))
      }
    </Stack>
      <Stack>
        👇🏽Aqui una captura de pantalla de algunos de los proyectos realizados con su link a su repositorio en GitHub👇🏽
      </Stack>
      <Footer/>
    </Stack>
  )
}

export default Home;