import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Ratio } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className='footer'>
        <Row>
            <Col md={6} sm={12}>
                <Ratio aspectRatio="16x9">
                <div className='d-flex align-items-center'>
                                <Figure>
                                    <Figure.Image
                                        src='/src/assets/img/logopos.svg'
                                        width='100%'
                                        height='100%'
                                        alt='Sinteplast Construcción Logo'
                                    />
                                </Figure>
                            </div>
                </Ratio>
            </Col>
        </Row>
    </Container>
  );
};

export default Footer;
