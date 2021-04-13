import React from "react";
import "./css/Home.css";
import image from "./pics/MM.jpg";
import image1 from "./pics/unnamed.png";
import image2 from "./pics/standard.png";
import image3 from "./pics/shyam.jpg"
import image4 from "./pics/shreyansh.jpg"
import image5 from "./pics/team-1.jpg"
import image6 from "./pics/team-3.jpg"

const Home = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <nav>
          <img src={image} />
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
            <li>
              <a class="active" href="/Login">
                LOGIN
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <!-- ======= Intro Section ======= --> */}
      <section id="intro" className="clearfix">
        <div style={{justifyContent: "center"}}className="container" data-aos="fade-up">
          <div className="intro-img" data-aos="zoom-out" data-aos-delay="200">
            <img
              style={{ height: "450px"}}
              src={image1}
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="intro-info" data-aos="zoom-in" data-aos-delay="">
            <h3>
            Building Citizen Centric,
              <br />
              Financially Inclusive Bharat
              <br />
              <br/>
              <span>A Decentralized, Distributed, Consensus Driven ChitStack.</span>
              </h3>
             
              <h5 style={{color: 'white'}}>Creating, Empowering and Enabling next-generation Chit Funds</h5>
            
            <div>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <b><h3>About Us</h3></b>
            </header>
            <div className="row about-extra">
              <div className="col-lg-6" data-aos="fade-right">
                <img style={{height: '370px', width :'70%'}}
                  src={image2}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                <h3>
                No.1 Chit fund Software in India
                </h3>
                <h5>
                 On this platform, we are building India’s largest blockchain network for Savings and Borrowings. We synergize Chit Fund Companies, Regulators, Subscribers, Banks, Service providers, EcoSystem enablers to drive the largest trusted network of Savers and Borrowers platform. Our ecosystem will stand for three things <b>Trust, Efficiency and Inclusion.</b>
                 <br/>
                 <br/>
                 We are building the next generation systems where the trust is programmed across all the participating members in the network.
                </h5>
              </div>
            </div>
            <div className="row about-extra">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                <img style={{height: '450px', width: '600px'}}
                  src="https://lh3.googleusercontent.com/proxy/ZGf6IaiIbm3R_CPukTScXgkQDM4owlH6AQQJJqt1Ss99-LG8o5gQB4eYUADn0_De4JTHCN-qbBp3Imqc05O-yIhMPInrfH1MdtiSsoY"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-right"
              >
                <h3>
                How Chit Fund Helps?
                </h3>
                <p>
                Chit Funds have the advantage both for serving a need and as an investment. Money can be readily drawn in an emergency or could be continued as an investment.
                </p>
                <p>
                Interest rate is determined by the subscribers themselves, based on mutual decisions and varies from auction to auction.
                </p>
                <p>
                Chit fund is a saving cum borrowing instrument, which is unique when compared to other financial systems. When you invest in chits you get more return as compared to other Financial Intermediaries and when you borrow you pay less interest?
                </p>
                <p>
                Chit funds can be relied upon to satisfy personal needs. Unlike other financial institutions, you can draw upon your chit fund for any purpose – marriages, religious functions, medical expenses, children’s education, etc.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Services Section ======= --> */}
        {/* <section id="services" className="section-bg">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Services</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
              </p>
            </header>
            <div className="row justify-content-center">
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-analytics-outline"
                      style={{ color: "#ff689b" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-bookmarks-outline"
                      style={{ color: "#e9bf06" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-paper-outline"
                      style={{ color: "#3fcdc7" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-speedometer-outline"
                      style={{ color: "#41cf2e" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-world-outline"
                      style={{ color: "#d6ff22" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-clock-outline"
                      style={{ color: "#4680ff" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Eiusmod Tempor</a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <br/>
              <h4 style={{color: 'whitesmoke'}}>
                Automate the process of maintaing ledgers.<br/>
                The required information can be retrieved easily. <br/>
                The details can be stored in the storage systems permanently.<br/> 
                Time will not be wasted in the calculations. <br/>
                Reports can be generated. <br/>
                Wastage of manpower is reduced<br/>
                More Transparancy <br/>
                Large volume of records to process<br/>
                Less time and High speed<br/>
                People can create and maintain there own Chit Funds chain<br/> 

              </h4>
            </header>
            {/* <div
              className="row counters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1,364</span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">18</span>
                <p>Hard Workers</p>
              </div>
            </div> */}
          </div>
        </section>

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Team</h3>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <div className="member">
                  <img src={image3} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Shyam Yadav</h4>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div className="member">
                  <img style={{height : '265px'}} src={image4} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Shreyansh Mamgain</h4>
                      <span>Ceo &amp; Founder</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <div className="member">
                  <img src={image5} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      </div>
                    </div>
                  </div>
                </div>    
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="40"
              >
                <div className="member">
                  <img src={image6} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>

        

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-header">
              <h3>Contact Us</h3>
            </div>
            <div style={{ paddingLeft: "650px" }} className="row">
              <div className="form">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" title="Send Message">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>CHITFUND</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
            &copy; Copyright <strong>ChitFund</strong>. All Rights Reserved
          </div>
          <div className="credits">
            <h4>Designed by ChitFund</h4>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default Home;
