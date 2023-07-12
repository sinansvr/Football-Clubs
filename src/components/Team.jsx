import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

const Team = () => {
  return (
    <Card style={{ width: '16rem' }}>
      <div className='logo'>
      <Card.Img style={{ width: '10rem' }} variant="top" src="https://upload.wikimedia.org/wikipedia/tr/9/98/Real_Madrid.png?20220530202524" />
      <Card.Body>
        <Card.Title className='text-primary'>Real Madrid</Card.Title>
        
      </Card.Body>
      </div>
      <div className='info'>
      <Card.Img style={{ width: '6rem' }} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/512px-LaLiga_Santander_logo_%28stacked%29.svg.png" />
      <Card.Body>
      <ListGroup>
      <ListGroup.Item>League: La Liga</ListGroup.Item>
      <ListGroup.Item>Established: 1899</ListGroup.Item>
      <ListGroup.Item>Championships: 26</ListGroup.Item>
      
    </ListGroup>
        
      </Card.Body>
      </div>
      
    </Card>
  )
}

export default Team