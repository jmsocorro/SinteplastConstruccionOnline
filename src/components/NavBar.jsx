import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";

import CartWidget from "./CartWidget";

const NavBar = () => {
    // Cambio en class de la barra de navegacion al hacer scroll
    window.onscroll = () => {
        if (window.scrollY > 200) {
            document.getElementById("navbar-top").classList.add("dark");
        } else {
            document.getElementById("navbar-top").classList.remove("dark");
        }
    };

    return (
        <Navbar expand="lg" variant="light" fixed="top" id="navbar-top">
            <Container fluid className="h-100">
                <Row className="w-100 h-100">
                    <Col lg={5} className="d-flex align-items-center p-4 h-100">
                        <Navbar.Toggle aria-controls="navbar-collapse-id" />
                        <NavDropdown
                            title="Categorías"
                            id="menuCategorias"
                            autoClose="true"
                        >
                            <Link
                                to={`/categoria/Impermeabilizantes`}
                                className="dropdown-item"
                                role="button"
                            >
                                Impermeabilizantes
                            </Link>
                            <Link
                                to={`/categoria/Reparación de hormigón`}
                                className="dropdown-item"
                                role="button"
                            >
                                Reparación de hormigón
                            </Link>
                            <Link
                                to={`/categoria/Aditivos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Aditivos
                            </Link>
                            <Link
                                to={`/categoria/Grout`}
                                className="dropdown-item"
                                role="button"
                            >
                                Grout
                            </Link>
                            <Link
                                to={`/categoria/Selladores`}
                                className="dropdown-item"
                                role="button"
                            >
                                Selladores
                            </Link>
                            <Link
                                to={`/categoria/Adhesivos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Adhesivos
                            </Link>
                            <Link
                                to={`/categoria/Pisos decorativos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Pisos decorativos
                            </Link>
                            <Link
                                to={`/categoria/Revoques`}
                                className="dropdown-item"
                                role="button"
                            >
                                Revoques
                            </Link>
                            <Link
                                to={`/categoria/Pastinas`}
                                className="dropdown-item"
                                role="button"
                            >
                                Pastinas
                            </Link>
                            <Link
                                to={`/categoria/Pisos de alto desempeño`}
                                className="dropdown-item"
                                role="button"
                            >
                                Pisos de alto desempeño
                            </Link>
                            <Link
                                to={`/categoria/Complementos`}
                                className="dropdown-item"
                                role="button"
                            >
                                Complementos
                            </Link>
                        </NavDropdown>
                    </Col>
                    <Col lg={2} className="h-100 position-relative">
                        <Link to={`/`}>
                            <Navbar.Brand></Navbar.Brand>
                        </Link>
                    </Col>
                    <Col
                        lg={5}
                        className="d-flex align-items-center justify-content-end p-4 h-100"
                    >
                        <CartWidget />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;
