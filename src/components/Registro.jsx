import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Registro=()=>{
    return(
        <>
        <div className="cuadro-registro">
            <h1>Crea una cuenta</h1>
            <Container className='redes-sociales'>
                <Row>
                <Col><SocialButton icono="fa-brands fa-facebook fa-2x"></SocialButton></Col>
                <Col><SocialButton icono="fa-brands fa-github fa-2x"></SocialButton></Col>
                <Col><SocialButton icono="fa-brands fa-linkedin-in fa-2x"></SocialButton></Col>
                </Row>
            </Container>
            <p>O usa tu email para registrarte</p>
            <Formulario />
        </div>

        </>
        
         );
};

export default Registro;