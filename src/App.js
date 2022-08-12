import { useState } from "react";
import "./styles.css";
import { Container, Col, Row } from "react-bootstrap";
import MyCard from "./components/MyCard";
import Safeframe from "./components/Safeframe";
export default function App() {
  console.log("hello?");
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = useCallback(() => {
  //   return [number, number + 1, number + 2];
  // }, [number]);
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  return (
    <Container>
      <Row>
        <Col lg="3">
          <h1 onClick={() => setNumber(number + 1)}>{number}</h1>
          <h1 onClick={() => setDark(!dark)}>{JSON.stringify(dark)}</h1>
          <h1>{getItems()}</h1>
          <Safeframe getItems={getItems} id={1} />
          <Safeframe getItems={getItems} id={2} />
          <MyCard getItems={getItems} />
          <h1>{getItems()}</h1>
          <MyCard getItems={getItems} />
        </Col>
      </Row>
    </Container>
  );
}
