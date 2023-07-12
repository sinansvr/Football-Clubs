import Team from "./Team"
import {data} from "../helper/teamdata"
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";

const CardContainer = () => {

  return (
    <Container>
    <Row xs={1} md={2} lg={4}>
    
    {data.map((team,i)=>(
      <div className="container col mb-3" key={i}>
        <Team name={team.name} logo={team.logo} leagueLogo={team.leagueLogo} league={team.info[0]} estb={team.info[1]} champ={team.info[2]}/>
      </div>
    ))}
    

    </Row>
    </Container>
  )
   
    
    
}

export default CardContainer