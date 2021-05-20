import "./../../css/navbar.css";
import image from "../../pics/logo.jpg";
import wallet from "./../../pics/homepage/navbar/wallet.png";
import Bell from "./../../pics/homepage/navbar/bell.png";
import avatar from "./../../pics/homepage/navbar/man.png";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function Navbar() {
  return (
    <header id="header" className="fixed-top">
      <div className="main-div1">
        <img
          style={{ height: "105px", width: "100px", paddingTop: "12px" }}
          src={image}
        />
        <span style={{ fontSize: "17px" ,paddingRight: "20px" }}>
          <br />
          <br />
          &nbsp;
          <b>कमिटी करो </b>
        </span>
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
        ></input>
        <img src={wallet} alt="Wallet" className="wallet"></img>
        <i className="fas fa-bell fa-lg">&nbsp;&nbsp;</i>
        <div className="dropdown">
          <button onClick={myFunction} className="dropbtn">Shyam Yadav <img src={avatar} alt="Admin" width="40" />&nbsp;<span class="caret"></span></button>
          <div id="myDropdown" className="dropdown-content">
          <a href="#"><i className="fas fa-user"></i> Profile</a>
          <a href="#"><i className="fas fa-sliders-h"></i> Settings</a>
          <a href="#"><i className="fas fa-sign-out-alt"></i> Signout</a>
          </div>
        </div>
      </div>

      <nav className="navbar1">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <a href="#">Home</a>
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


