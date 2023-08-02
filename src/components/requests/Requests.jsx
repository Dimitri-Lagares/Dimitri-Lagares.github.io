import axios from 'axios';
import { useState, useEffect } from 'react';
import { Grid, IconButton, tableCellClasses, TableCell, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled, Alert, TextField, Button, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Requests = () => {

  const [data, setData] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessAlert2, setShowSuccessAlert2] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showWarningAlert2, setShowWarningAlert2] = useState(false);
  const [idform, setIdform] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("");
  const [solicitud, setSolicitud] = useState("")
  const [comentario, setComentario] =useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const navigate = useNavigate()
  const redirectToHome = () => {navigate('/')}
  const URL = 'https://integrator-project-back-end.onrender.com';

  useEffect(()=>{
    getData()
  },[])

  const config = {
    headers:{
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYTEiLCJwYXNzd29yZCI6InBydWViYTEiLCJpYXQiOjE2ODkxMjk2NzF9.ZTJ1g5I-QX78CnvBAquzj-luFShUe-j2SDgVTt09QMc'
    }
  };

  const getData = async () => {
    try{
      const {data: response} = await axios.get(`${URL}/form/show-data`, config)
      setData(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  const tableEdit = ((getTableData) => {
    setIdform(getTableData.id)
    setNombre(getTableData.name)
    setCorreo(getTableData.email)
    setTelefono(getTableData.phone)
    setSolicitud(getTableData.request)
    setComentario(getTableData.comment)
    setOpen(true)
  })

  const tableDelete = ((getTableData) => {
    setIdform(getTableData.id)
    setNombre(getTableData.name)
    setCorreo(getTableData.email)
    setTelefono(getTableData.phone)
    setSolicitud(getTableData.request)
    setComentario(getTableData.comment)
    setOpen2(true)
  })

  const modalAddUser = () => {
    setOpen3(true)
  }
  const confirmedDelete = () => {
    axios.delete(`${URL}/form/delete-item/${idform}`, config).then(() =>{
    setOpen2(false)
    getData()
    setShowSuccessAlert2(true)
    showSuccessAlert2TimeOut()  
    })
  }

  const buttonUpdate = (() => {
    axios.put(`${URL}/form/update-item/${idform}`, {id: idform, name: nombre, email: correo, phone: telefono, request: solicitud, comment: comentario}, config)
    .then(()=>{
      getData()
      setNombre("")
      setCorreo("")
      setTelefono("")
      setSolicitud("")
      setComentario("")
      setIdform("")
      setShowSuccessAlert(true)
      showSuccessAlertTimeOut()
      setOpen(false)
    })
  
  })

  const buttonAddUser = () =>{
    if (user === "" || password === ""){
     setShowWarningAlert(true)
     showWarningAlertTimeOut()
    }else{
 
     axios.post(`${URL}/form/add-user`, {email: user, password}, config)
     .then((response) => {
       setUser("")
       setPassword("")
       setShowSuccessAlert(true)
       showSuccessAlertTimeOut()
       setOpen3(false)
     }).catch((error) => {
       console.log(error)
       setShowWarningAlert2(true)
       showWarningAlert2TimeOut()
     })
   }
  }

  const showSuccessAlertTimeOut = () => {
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 6000);
  }

  const showSuccessAlert2TimeOut = () => {
    setTimeout(() => {
      setShowSuccessAlert2(false);
    }, 6000);
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

  return (
    <div>
      <Dialog open={open} onClose={()=> setOpen(false)}>
        <DialogTitle>Editar fila</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Termina de editar la fila y presiona actualizar
          </DialogContentText>

      <TextField sx={{m:1}} variant="filled" id="outlined-basic" label="Nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="Correo" value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="telefono" value={telefono} onChange={(e)=> setTelefono(e.target.value)} type='number'/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="solicitud" value={solicitud} onChange={(e)=> setSolicitud(e.target.value)}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="comentario" value={comentario} onChange={(e)=> setComentario(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setOpen(false)}>Cancelar</Button>
      <Button onClick={buttonUpdate}>actualizar</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open2} onClose={()=> setOpen2(false)}>
        <DialogTitle>¿Estas seguro que deseas eliminar la fila?</DialogTitle>
        <DialogContent>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Correo</StyledTableCell>
            <StyledTableCell align="center">Telefono</StyledTableCell>
            <StyledTableCell align="center">Solicitud</StyledTableCell>
            <StyledTableCell align="center">Comentario</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow key={idform}>
              <StyledTableCell component="th" scope="row">{idform}</StyledTableCell>
              <StyledTableCell align="center">{nombre}</StyledTableCell>
              <StyledTableCell align="center">{correo}</StyledTableCell>
              <StyledTableCell align="center">{telefono}</StyledTableCell>
              <StyledTableCell align="center">{solicitud}</StyledTableCell>
              <StyledTableCell align="center">{comentario}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
          <Button sx={{m:1}}  variant='outlined' onClick={()=> setOpen2(false)}>Cancelar</Button>
          <Button sx={{m:1}} variant='outlined' onClick={() => {confirmedDelete()}} startIcon={<Delete />}>Eliminar</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={open3} onClose={()=> setOpen3(false)}>
        <DialogTitle>Agregar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Termina de editar los campos y presiona agregar usuario
          </DialogContentText>
      {showWarningAlert &&  <Alert severity="warning">Debes de llenar todos los campos</Alert>}
      {showWarningAlert2 && <Alert severity="warning">Ha ocurrido un error, revisa la consola para saber mas</Alert>}

      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="Usuario" value={user} onChange={(e)=> setUser(e.target.value)}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="Contraseña" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setOpen3(false)}>Cancelar</Button>
      <Button onClick={buttonAddUser}>agregar usuario</Button>
        </DialogActions>
      </Dialog>

        {showSuccessAlert && <Alert severity="success">Actualizado correctamente</Alert>}
        {showSuccessAlert2 && <Alert severity="success">Eliminado correctamente</Alert>}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography fontFamily={'century'} variant='h4' sx={{textAlign:'left', justifyContent:'center', m:1}}>Solicitudes</Typography>
          </Grid>
          <Grid item sx={{display:'flex', m: 'auto'}}  xs={6}>
              <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={redirectToHome}>
                  regresar
              </Button>
                
              <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{marginLeft: 1}}
              onClick={modalAddUser}>
                  agregar usuario
              </Button>
          </Grid>
        </Grid>
 

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Correo</StyledTableCell>
            <StyledTableCell align="center">Telefono</StyledTableCell>
            <StyledTableCell align="center">Solicitud</StyledTableCell>
            <StyledTableCell align="center">Comentario</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
            <StyledTableCell align="center">Eliminar</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.request}</StyledTableCell>
              <StyledTableCell align="center">{row.comment}</StyledTableCell>
              <StyledTableCell align="center"><IconButton onClick={() => {tableEdit(row)}}><Edit/></IconButton></StyledTableCell>
              <StyledTableCell align="center"><IconButton onClick={() => {tableDelete(row)}}><Delete/></IconButton></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
export default Requests;