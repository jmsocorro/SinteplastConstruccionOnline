import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemList = ({productosFiltrados}) => {
  const { nombre } = useParams();

  return (
    <Container>
      <Row className="IL">
        {productosFiltrados.map((producto) => {
          return <Item key={producto.id} producto={producto}/>;
        })}
      </Row>
    </Container>
  );
};

export default ItemList;
