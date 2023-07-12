import Team from "./Team"
import {data} from "../helper/teamdata"

const CardContainer = () => {

console.log(data)
  return (
    <>
    
    {data.map((team,i)=>(
      <div className="container" key={i}>
        <Team name={team.name} logo={team.logo} leagueLogo={team.leagueLogo} league={team.info[0]} estb={team.info[1]} champ={team.info[2]}/>
      </div>
    ))}
    

    </>
  )
   
    
    
}

export default CardContainer