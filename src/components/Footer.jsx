import { useContext } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Ratio } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { CartContext } from "../context/StateCartContext";

const Footer = () => {
    const {cartDetails, dominio} = useContext(CartContext);
    console.log(cartDetails, dominio)
    return (
    <Container fluid className='footer bg-secondary'>
        <Row>
            <Col md={6} sm={12}>
                <Ratio aspectRatio={1 / 4}>
                    <div className='logoFooter d-flex align-items-center p-3'>
                        <img className="w-100 h-100" src="/src/assets/img/logoneg.svg" alt="Sinteplast Construcción Logo" />
                    </div>
                </Ratio>
            </Col>
        </Row>
    </Container>
  );
};

export default Footer;
