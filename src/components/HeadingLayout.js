import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeadingLayout() {
  return (
    <Container fluid="md" bg="dark">
      <Row style={{backgroundColor:'grey',color:'white',height:'150px',margin:'15px'}}>
        <Col style={{textAlign:'center'}} className='mt-3'><h1>The Generics</h1></Col>
      </Row>
    </Container>
  );
}

export default HeadingLayout;