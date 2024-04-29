import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alerta from './Alert';


const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [confirmarContrasena, setConfirmarContrasena] = useState("") 
    // mostrar si hay error
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorContra, setErrorContra] = useState(false)
    const [errorMail, setErrorMail] = useState(false)
    

    const validarInput = (e) => {
        e.preventDefault()
        if (nombre === '' || email === '' || contrasena === '') {
            
          setError(true)
          return
        }
        if (contrasena !== confirmarContrasena) {
           
            setErrorContra(true)
            return  
        }if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            setErrorMail(true)
            
            return
          }
        
        setError(false)
        setSuccess(true)
        
      }
      return(
       <>
       <Form onSubmit={validarInput} className='formulario'>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Control type="name" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setContrasena(e.target.value)} value={contrasena}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                    <Form.Control type="password" placeholder="Confirmar Contraseña" onChange={(e) => setConfirmarContrasena(e.target.value)} value={confirmarContrasena}/>
                </Form.Group>
                <Button className='boton-enviar' variant="success" type="submit">Submit</Button>
            </Form>
            {error ? <Alerta
            colorAlert = 'danger'
            textAlert = '¡Todos los campos son obligatorios!'
            
            />:null}

            {errorContra ? <Alerta
            colorAlert = 'danger'
            textAlert = '¡Las contraseñas no coinciden!'
            
            />:null}

            {errorMail ? <Alerta
            colorAlert = 'danger'
            textAlert = '¡No es un correo correcto!'
            
            />:null}

            {success ? <Alerta
            colorAlert = 'success'
            textAlert = '¡Los datos fueron enviados con exito!'
            
            />:null}
            
       </>
    );

};

export default Formulario;