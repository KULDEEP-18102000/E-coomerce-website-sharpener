import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeadingLayout() {
  return (
    <Container fluid="md" bg="dark">
      <Row>
        <Col className='mt-3'><h1>The Generics</h1></Col>
      </Row>
    </Container>
  );
}

export default HeadingLayout;