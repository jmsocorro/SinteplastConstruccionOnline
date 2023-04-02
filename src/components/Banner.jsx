import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

const Banner = () => {
    const location = useLocation();
    return (
        <Container
            fluid
            className={`banner ${decodeURIComponent(location.pathname)
                .replace(/[ \/]/g, "")
                .substring(0, 17)}`}
        >
            <Row className="ilc">
                <Col xs={12} className="justify-content-center d-flex">
                    <div className="saludo"></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
