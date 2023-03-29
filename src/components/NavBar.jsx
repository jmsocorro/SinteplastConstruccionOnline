import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Row, Col  } from "react-bootstrap";

import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Navbar expand="lg" variant="light" fixed="top">
            <Container fluid>
                <Row className="w-100">
                    <Col lg={5} className="d-flex align-items-center p-4">
                        <Navbar.Toggle aria-controls="navbar-collapse-id" />
                        <NavDropdown title="Familias" id="nav-dropdown">
                            <Link
                                to={`/familia/Impermeabilizantes`}
                                className="dropdown-item"
                                role="button"
                            >
                                Impermeabilizantes
                            </Link>
                            <Link
                                to={`/familia/Reparación de hormigón`}
                                className="dropdown-item"
                                role="button"
                            >
                                Reparación de hormigón
                            </Link>
                            <Link
                                to={`/familia/Aditivos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Aditivos
                            </Link>
                            <Link
                                to={`/familia/Grout`}
                                className="dropdown-item"
                                role="button"
                            >
                                Grout
                            </Link>
                            <Link
                                to={`/familia/Selladores`}
                                className="dropdown-item"
                                role="button"
                            >
                                Selladores
                            </Link>
                            <Link
                                to={`/familia/Adhesivos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Adhesivos
                            </Link>
                            <Link
                                to={`/familia/Pisos decorativos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Pisos decorativos
                            </Link>
                            <Link
                                to={`/familia/Revoques`}
                                className="dropdown-item"
                                role="button"
                            >
                                Revoques
                            </Link>
                            <Link
                                to={`/familia/Pastinas`}
                                className="dropdown-item"
                                role="button"
                            >
                                Pastinas
                            </Link>
                            <Link
                                to={`/familia/Pisos de alto desempeño`}
                                className="dropdown-item"
                                role="button"
                            >
                                Pisos de alto desempeño
                            </Link>
                            <Link
                                to={`/familia/Complementos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Complementos
                            </Link>
                        </NavDropdown>
                    </Col>
                    <Col lg={2}>
                        <Link to={`/`}>
                            <Navbar.Brand>
                                <img
                                    src="/src/assets/img/logopos.svg"
                                    alt="Sinteplast Construcción Logo"
                                />
                            </Navbar.Brand>
                        </Link>
                    </Col>
                    <Col
                        lg={5}
                        className="d-flex align-items-center justify-content-end p-4"
                    >
                        <CartWidget />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;
