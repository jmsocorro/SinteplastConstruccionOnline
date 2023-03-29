import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
    return (
        <Container fluid>
            <Row className="ilc">
                <Col xs={12} className="justify-content-center d-flex">
                    <div className="saludo">
                        Bienvenido a Sinteplast Construcción
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
