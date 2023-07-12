import Logo from "../images/ucl-logo.png"

const Header = () => {
  return (
    <div >
        <img className="my-5" src={Logo} alt="logo" style={{width:"200px"}} />
    </div>
  )
}

export default Header