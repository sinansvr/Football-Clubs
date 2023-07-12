import Team from "./Team"
import { data } from "../helper/teamdata"
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
 
const filteredData= data.filter((item)=>item.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
 console.log(filteredData)


  return (
    <>
      <h3 style={{color:'#00004A'}}>UEFA Clubs</h3>
      <div className="m-auto my-5 w-50 ">
        
        <Form.Control onChange={handleChange} type="search" placeholder="Search Team..." className="w-100" />
      </div>



      <Container>
        <Row xs={1} md={2} lg={3} >
          {filteredData.map((team, i) => (
            <div className="col m-auto mb-3 justify-content-center g-3" key={i}>
              <Team name={team.name} logo={team.logo} leagueLogo={team.leagueLogo} league={team.info[0]} estb={team.info[1]} champ={team.info[2]} />
            </div>
          ))}


        </Row>
      </Container>

    </>
  )



}

export default CardContainer