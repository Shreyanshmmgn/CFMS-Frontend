import Navbar from "./Navbar/Navbar";

function Dashboard() {
  return (
    <div style={{backgroundColor:"#f0f5f9"}}>
      <Navbar />
      <div style={{height:"500px"}}></div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>कमिटी करो</h3>
                <h6>
                  Chit funds can be relied upon to satisfy personal needs.
                  Unlike other financial institutions, you can draw upon your
                  chit fund for any purpose – marriages, religious functions,
                  medical expenses, children’s education, etc. We are building
                  the next generation systems where the trust is programmed
                  across all the participating members in the network.
                </h6>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A-1, Vipul World <br />
                  Gurgaon, HR 122001
                  <br />
                  India <br />
                  <strong>Phone:</strong> 8920299553
                  <br />
                  <strong>Email:</strong> shyamyadav21099@gmail.conm
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna veniam enim veniam illum dolore legam minim
                  quorum culpa amet magna export quem marada parida nodela
                  caramase seza.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe"></input>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>कमिटी करो</strong>. All Rights Reserved
          </div>
          <div className="credits">
            <h4>Designed by कमिटी करो</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
