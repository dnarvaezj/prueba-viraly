import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { HttpRequest, PostHttpRequest } from './HttpRequest';
import { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState('all');

  const { dataRes, loading, error } = PostHttpRequest();

  let token = dataRes?.data?.userToken;

  const { data, loading1, error1 } = HttpRequest(page, limit, status, token);
  
  useEffect(() => {
    // console.log(data?.totalPages);
    
    let item = [];
    for (let number = 1; number <= data?.totalPages; number++) {
      item.push(
        <Pagination.Item key={number} active={number === data?.actualPage} onClick={() => setPage(number)}>
          {number}
        </Pagination.Item>,
      );
    }
    setItems(item);

  }, [data])

  // console.log(items);
  // console.log(limit);
  // console.log(status);

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );


  return (
    <Container className='App'>
      <div className='filter-cont'>
        <Form.Group className="filter-input">
          <Form.Label>Resultados</Form.Label>
          <Form.Select onChange={(e) => setLimit(e.target.value)} defaultValue="5">
            <option value="3">3</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="filter-input">
          <Form.Label>Estatus</Form.Label>
          <Form.Select onChange={(e) => setStatus(e.target.value)}>
            <option value="all">Todos</option>
            <option value="revision">Revision</option>
            <option value="allowed">Permitido</option>
            <option value="rejected">Rechazado</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className='cards-cont'>
        {data?.devicesRequests.map((val, i) => (
          <div className='card-div'>
            <Card className='card-st'>
              <Card.Img variant="top" src={val.avatarUrl} />
              <Card.Body>
                <Card.Title>{val.completeName}</Card.Title>
                <Card.Text className='card-text'>
                  Email: {val.email}<br />
                  clientName: {val.clientName}<br />
                  osName: {val.osName}<br />
                  phase: {val.phase}<br />
                  profileStatus: {val.profileStatus}<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className='pag-cont'>
        {paginationBasic}
      </div>
    </Container>
  );
}

export default App;
