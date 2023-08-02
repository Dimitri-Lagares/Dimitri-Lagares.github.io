import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Send } from '@mui/icons-material';
import { Button, TextField, Box, Alert, Typography } from '@mui/material';

const Footer = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showWarningAlert2, setShowWarningAlert2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");
  const [comment, setComment] = useState("");
  const URL = 'https://integrator-project-back-end.onrender.com';
  
  const buttonSave = () =>{
    if (name === "" || email === "" || phone === "" || request === "" || comment === ""){
     setShowWarningAlert(true)
     showWarningAlertTimeOut()
    }else{
 
     axios.post(`${URL}/auth/send-data`, {name, email, phone, request, comment})
     .then((response) => {
       setName("")
       setEmail("")
       setPhone("")
       setRequest("")
       setComment("")
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
          value={name}
          onChange={(e)=> setName(e.target.value)}
          type='text'
          />

        <TextField
          required
          label="Correo Electronico"
          variant="outlined"
          placeholder='lagares.dimitri@gmail.com'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type='email'
          />

        <TextField
          required
          label="Teléfono/Celular"
          variant="outlined"
          placeholder='3236642619'
          value={phone}
          onChange={(e)=> setPhone(e.target.value)}
          type='number'
          />

        <TextField
          required
          label="Solicitud"
          variant="outlined"
          placeholder='Digita tu solicitud'
          value={request}
          onChange={(e)=> setRequest(e.target.value)}
          />

        <TextField
          required
          id="outlined-multiline-static"
          label="Comentario"
          multiline
          rows={4}
          placeholder="Por favor ingrese el comentario que deseas dejar"
          value={comment}
          onChange={(e)=> setComment(e.target.value)}
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