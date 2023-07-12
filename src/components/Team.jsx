import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import ListGroup from 'react-bootstrap/ListGroup';

const Team = ({name,logo,leagueLogo,league,estb,champ}) => {
  return (
    <Card style={{ width: '16rem' }}>
      <div className='logo'>
        {/* <div style={{ width: '8rem', height:'8rem', marginTop:'1rem' }}>
        <Image src={logo} fluid />
      </div> */}
      <Card.Img fluid style={{ width: '8rem', height:'8rem', marginTop:'1rem' }} variant="top" src={logo} />
      <Card.Body>
        <Card.Title className='text-primary'>{name}</Card.Title>
        
      </Card.Body>
      </div>
      <div className='info d-flex flex-column align-items-center mb-5'>
        <div style={{ width: '4rem', height:'4rem', marginTop:'1rem' }}>
        <Image src={leagueLogo}  fluid />
      </div>
      {/* <Card.Img style={{ width: '5rem', height:'5rem' ,marginTop:'1rem' }} variant="top" src={leagueLogo} /> */}
      <Card.Body>
      <ListGroup className='mt-3'>
      <ListGroup.Item> {league}</ListGroup.Item>
      <ListGroup.Item>{estb}</ListGroup.Item>
      <ListGroup.Item>{champ}</ListGroup.Item>
      
    </ListGroup>
        
      </Card.Body>
      </div>
      
    </Card>
  )
}

export default Team