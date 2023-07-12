import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Team = ({ name, logo, leagueLogo, league, estb, champ }) => {

  const [showImage, setshowImage] = useState(true)

  const handleClick=()=>{
    setshowImage(!showImage)
    console.log(showImage)
  }

  return (
    <Col onClick={handleClick}>
    <Card style={{ width: '16rem', minHeight: '20rem', cursor:"pointer", border:'none', boxShadow:'5px 5px 25px black'}}>
      {showImage?(
      <div className='logo m-auto'>
        <Card.Img style={{ width: '8rem', height: '8rem', marginTop: '1rem' }} variant="top" src={logo} />
        <Card.Body>
          <Card.Title className='text-primary'>{name}</Card.Title>
        </Card.Body>
      </div>
      ):(
      <div className='info d-flex flex-column align-items-center mb-5'>
        <Card.Img style={{ maxWidth: '5rem', maxHeight: '5rem', marginTop: '1rem' }} variant="top" src={leagueLogo} />
        <Card.Body>
          <ListGroup className='mt-3 m-auto'>
            <ListGroup.Item> {league}</ListGroup.Item>
            <ListGroup.Item>{estb}</ListGroup.Item>
            <ListGroup.Item>{champ}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </div>
      )}
      


      

    </Card>
    </Col>
  )
}

export default Team