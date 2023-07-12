import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

const Team = ({name,logo,leagueLogo,league,estb,champ}) => {
  return (
    <Card style={{ width: '16rem' }}>
      <div className='logo'>
      <Card.Img style={{ width: '10rem', marginTop:'1rem' }} variant="top" src={logo} />
      <Card.Body>
        <Card.Title className='text-primary'>{name}</Card.Title>
        
      </Card.Body>
      </div>
      <div className='info'>
      <Card.Img style={{ width: '6rem' ,marginTop:'1rem' }} variant="top" src={leagueLogo} />
      <Card.Body>
      <ListGroup>
      <ListGroup.Item>League: {league}</ListGroup.Item>
      <ListGroup.Item>Established: {estb}</ListGroup.Item>
      <ListGroup.Item>Championships: {champ}</ListGroup.Item>
      
    </ListGroup>
        
      </Card.Body>
      </div>
      
    </Card>
  )
}

export default Team