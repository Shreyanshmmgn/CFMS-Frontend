import "./../../css/navbar.css";
import image from "../../pics/logo.jpg";
import wallet from "./../../pics/homepage/navbar/wallet.png";
import Bell from "./../../pics/homepage/navbar/bell.png";
import avatar from "./../../pics/homepage/navbar/man.png";



function Navbar() {
  return (
    <header id="header" className="fixed-top">
      <div className="main-div1">
        <img style={{height:'105px',width :'100px', paddingTop: '12px'}}src={image} />
        <span style={{fontSize : '17px'}}> 
            <br/>
            <br/>
            &nbsp;
          <b>कमिटी करो </b>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
        ></input>
        <img src={wallet} alt="Wallet" className="wallet"></img>
        <img src={Bell} alt="Notification" className="bell"></img>
        <img src={avatar} alt="Avatar" className="avatar"></img>
      </div>
      
      <nav className="navbar1">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <a  href="#">Home</a>
          </li>
          <li>
            <a href="#about" className="btn-get-started scrollto">
              About Chit Groups
            </a>
          </li>
          <li>
            <a href="#team" className="btn-get-started scrollto">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="btn-get-started scrollto">
              Your Details
            </a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </nav>
     
    </header>
  );
}

export default Navbar;
