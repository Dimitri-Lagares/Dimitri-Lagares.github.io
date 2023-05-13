import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Send } from '@mui/icons-material';
import { Button, TextField, Box, Alert, Typography } from '@mui/material';

const Footer = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showWarningAlert2, setShowWarningAlert2] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [solicitud, setSolicitud] = useState("");
  const [comentario, setComentario] = useState("");

  const onChangeNombre = (e) => {setNombre(e.target.value)}
  const onChangeCorreo = (e) => {setCorreo(e.target.value)}
  const onChangeTelefono = (e) => {setTelefono(e.target.value)}
  const onChangeSolicitud = (e) => {setSolicitud(e.target.value)}
  const onChangeComentario = (e) => {setComentario(e.target.value)}
  
  const buttonSave = () =>{
    if (nombre === "" || correo === "" || telefono === "" || solicitud === "" || comentario === ""){
     setShowWarningAlert(true)
     showWarningAlertTimeOut()
    }else{
 
     axios.post('https://proyecto-integrador-back-production.up.railway.app/send-form', {nombre, correo, telefono, solicitud, comentario})
     .then((response) => {
       setNombre("")
       setCorreo("")
       setTelefono("")
       setSolicitud("")
       setComentario("")
       setShowSuccessAlert(true)
       showSuccessAlertTimeOut()
     }).catch((error) => {
       console.log(error)
       setShowWarningAlert2(true)
       showWarningAlert2TimeOut()
     })
   }
  }

  const showWarningAlertTimeOut = () => {
    setTimeout(() => {
      setShowWarningAlert(false);
    }, 3000);
  }
  
  const showWarningAlert2TimeOut = () => {
    setTimeout(() => {
      setShowWarningAlert2(false);
    }, 3000);
  }
  
  const showSuccessAlertTimeOut = () => {
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  }

  return (
    <footer style={{border:'solid', borderRadius:8, borderColor:'lightgray'}} >
      <Typography>Deja aqui tus datos para saber mas sobre ti</Typography>

  <div>
    {showWarningAlert &&  <Alert severity="warning">Debes de llenar todos los campos</Alert>}
    {showWarningAlert2 && <Alert severity="warning">Ha ocurrido un error, revisa la consola para saber mas</Alert>}
    {showSuccessAlert && <Alert severity="success">Se ha enviado la informacion correctamente</Alert>}

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <TextField
          required
          label="Nombre"
          variant="outlined"
          placeholder='Dimitri'
          value={nombre}
          onChange={onChangeNombre}
          type='text'
          />

        <TextField
          required
          label="Correo"
          variant="outlined"
          placeholder='lagares.dimitri@gmail.com'
          value={correo}
          onChange={onChangeCorreo}
          type='email'
          />

        <TextField
          required
          label="Teléfono/Celular"
          variant="outlined"
          placeholder='3236642619'
          value={telefono}
          onChange={onChangeTelefono}
          type='number'
          />

        <TextField
          required
          label="Solicitud"
          variant="outlined"
          placeholder='Digita tu solicitud'
          value={solicitud}
          onChange={onChangeSolicitud}
          />

        <TextField
          required
          id="outlined-multiline-static"
          label="Comentario"
          multiline
          rows={4}
          placeholder="Por favor ingrese el comentario que deseas dejar"
          value={comentario}
          onChange={onChangeComentario}
        />

          <Button sx={{m:1}} variant='contained' endIcon={<Send />} onClick={buttonSave}>
          Enviar
          </Button>
      </Box>
          <hr/>

          <Typography variant={"inherit"} sx={{alignSelf: 'center'}} fontSize={19}>lagares.dimitri@gmail.com</Typography>
          <Typography variant={"inherit"} sx={{alignSelf: 'center'}} fontSize={19}>+57 3236642619</Typography>
    </div>
  </footer>
  )
}
export default Footer;