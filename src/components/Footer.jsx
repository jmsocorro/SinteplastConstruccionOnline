import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid className="footer bg-secondary">
            <Row>
                <Col md={6} sm={12} className="h-100">
                    <div className="logoFooter d-flex align-items-center p-3">
                        <img
                            className="w-100 h-100"
                            src="/src/assets/img/logoneg.svg"
                            alt="Sinteplast Construcción Logo"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
