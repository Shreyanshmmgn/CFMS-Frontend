import React from "react";

const Home = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container">
          <div className="logo float-left">
            <a href="index.html">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fappsonwindows.com%2Fapk%2F4360145%2F&psig=AOvVaw3pmzaS44M5rmcqzeVNslHt&ust=1617347131163000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiN-PK93O8CFQAAAAAdAAAAABAj" alt="" className="img-fluid" />
            </a>
          </div>
          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="drop-down">
                <a href="">Drop Down</a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="drop-down">
                    <a href="#">Drop Down 2</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <!-- ======= Intro Section ======= --> */}
      <section id="intro" className="clearfix">
        <div className="container" data-aos="fade-up">
          <div className="intro-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="./assets/img/intro-img.svg" alt="" className="img-fluid" />
          </div>

          <div className="intro-info" data-aos="zoom-in" data-aos-delay="">
            <h2>
              We provide
              <br />
              <span>solutions</span>
              <br />
              for your business!
            </h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a href="#services" className="btn-services scrollto">
                Our Services
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
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </header>
            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon">
                    <i className="fa fa-shopping-bag"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Eiusmod Tempor</a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon">
                    <i className="fa fa-photo"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon">
                    <i className="fa fa-bar-chart"></i>
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
              <div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
                <img src="assets/img/about-img.svg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="row about-extra">
              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src="assets/img/about-extra-1.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                <h4>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h4>
                <p>
                  Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
                  possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
                  Deleniti quod porro sed quisquam saepe. Numquam mollitia
                  recusandae non ad at et a.
                </p>
                <p>
                  Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                  Odit qui asperiores ea corporis deserunt veritatis quidem
                  expedita perferendis. Qui rerum eligendi ex doloribus quia
                  sit. Porro rerum eum eum.
                </p>
              </div>
            </div>
            <div className="row about-extra">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                <img
                  src="assets/img/about-extra-2.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-right"
              >
                <h4>
                  Neque saepe temporibus repellat ea ipsum et. Id vel et quia
                  tempora facere reprehenderit.
                </h4>
                <p>
                  Delectus alias ut incidunt delectus nam placeat in
                  consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui
                  aut distinctio. Cumque fugit earum est quam officiis numquam.
                  Ducimus corporis autem at blanditiis beatae incidunt sunt.
                </p>
                <p>
                  Voluptas saepe natus quidem blanditiis. Non sunt impedit
                  voluptas mollitia beatae. Qui esse molestias. Laudantium
                  libero nisi vitae debitis. Dolorem cupiditate est perferendis
                  iusto.
                </p>
                <p>
                  Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore
                  sint quia modi. Numquam est aut fuga mollitia exercitationem
                  nam accusantium provident quia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="section-bg">
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
                      style={{color: '#ff689b'}}
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
                      style={{color: '#e9bf06'}}
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
                      style={{color: '#3fcdc7'}}
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
                      style={{color: '#41cf2e'}}
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
                      style={{color: '#d6ff22'}}
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
                      style={{color: '#4680ff'}}
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
        </section>

        {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
              </p>
            </header>

            <div className="row row-eq-height justify-content-center">
              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <i className="fa fa-diamond"></i>
                  <div className="card-body">
                    <h5 className="card-title">Corporis dolorem</h5>
                    <p className="card-text">
                      Deleniti optio et nisi dolorem debitis. Aliquam nobis est
                      temporibus sunt ab inventore officiis aut voluptatibus.
                    </p>
                    <a href="#" className="readmore">
                      Read more{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fa fa-language"></i>
                  <div className="card-body">
                    <h5 className="card-title">Voluptates dolores</h5>
                    <p className="card-text">
                      Voluptates nihil et quis omnis et eaque omnis sint aut.
                      Ducimus dolorum aspernatur.
                    </p>
                    <a href="#" className="readmore">
                      Read more{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="300">
                  <i className="fa fa-object-group"></i>
                  <div className="card-body">
                    <h5 className="card-title">Eum ut aspernatur</h5>
                    <p className="card-text">
                      Autem quod nesciunt eos ea aut amet laboriosam ab. Eos
                      quis porro in non nemo ex.{" "}
                    </p>
                    <a href="#" className="readmore">
                      Read more{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row counters" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">274</span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">421</span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1,364</span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">18</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="clearfix">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3 className="section-title">Our Portfolio</h3>
            </header>
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/app1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">App 1</a>
                    </h4>
                    <p>App</p>
                  </div>
                  <a
                    href="assets/img/portfolio/app1.jpg"
                    data-gall="portfolioGallery"
                    title="App 1"
                    className="venobox link-preview"
                  >
                    <i className="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/web3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Web 3</a>
                </h4>
                <p>Web</p>
              </div>
              <a
                href="assets/img/portfolio/web3.jpg"
                className="venobox link-preview"
                data-gall="portfolioGallery"
                title="Web 3"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="link-details"
                title="More Details"
              >
                <i className="ion ion-android-open"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/app2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">App 2</a>
                </h4>
                <p>App</p>
                <div>
                  <a
                    href="assets/img/portfolio/app2.jpg"
                    className="venobox link-preview"
                    data-gall="portfolioGallery"
                    title="App 2"
                  >
                    <i className="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/card2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Card 2</a>
                </h4>
                <p>Card</p>
                <div>
                  <a
                    href="assets/img/portfolio/card2.jpg"
                    className="venobox link-preview"
                    data-gall="portfolioGallery"
                    title="Card 2"
                  >
                    <i className="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/web2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Web 2</a>
                </h4>
                <p>Web</p>
                <div>
                  <a
                    href="assets/img/portfolio/web2.jpg"
                    className="venobox link-preview"
                    data-gall="portfolioGallery"
                    title="Web 2"
                  >
                    <i className="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/app3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">App 3</a>
                </h4>
                <p>App</p>
                <div>
                  <a
                    href="assets/img/portfolio/app3.jpg"
                    className="venobox link-preview"
                    data-gall="portfolioGallery"
                    title="App 3"
                  >
                    <i className="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/card1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Card 1</a>
                </h4>
                <p>Card</p>
                <div>
                  <a
                    href="assets/img/portfolio/card1.jpg"
                    className="venobox link-preview"
                    data-gall="portfolioGallery"
                    title="Card 1"
                  >
                    <i className="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/card3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Card 3</a>
                </h4>
                <p>Card</p>
                <div>
                  <a
                    href="assets/img/portfolio/card3.jpg"
                    className="venobox link-preview"
                    data-gall="portfolioGallery"
                    title="Card 3"
                  >
                    <i className="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/web1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Web 1</a>
                </h4>
                <p>Web</p>
              </div>
              <a
                href="assets/img/portfolio/web1.jpg"
                className="venobox link-preview"
                data-gall="portfolioGallery"
                title="Web 1"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="link-details"
                title="More Details"
              >
                <i className="ion ion-android-open"></i>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="section-bg">
          <div className="container" data-aso="zoom-in">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonials-carousel">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src="./assets/img/testimonial-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Team</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <div className="member">
                  <img src="assets/img/team-1.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
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
                  <img src="assets/img/team-2.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
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
                  <img src="assets/img/team-3.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <div className="member">
                  <img src="assets/img/team-4.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Our CLients</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque dere santome nida.
              </p>
            </div>

            <div
              className="row no-gutters clients-wrap clearfix"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt=""
                  />
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

            <div className="row">
              <div className="col-lg-6">
                <div className="map mb-4 mb-lg-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder="0"
                    style={{border:'0', width: '100%' , height: '312px'}}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-5 info">
                    <i className="ion-ios-location-outline"></i>
                    <p>A108 Adam Street, NY 535022</p>
                  </div>
                  <div className="col-md-4 info">
                    <i className="ion-ios-email-outline"></i>
                    <p>info@example.com</p>
                  </div>
                  <div className="col-md-3 info">
                    <i className="ion-ios-telephone-outline"></i>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

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
          </div>
        </section>
      </main>

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>NewBiz</h3>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat consequat mauris
                  nunc congue.
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
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
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>

                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
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
            &copy; Copyright <strong>NewBiz</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>

      {/* <!-- Vendor JS Files --> */}
      <script src="assets/vendor/jquery/jquery.min.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/counterup/counterup.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
      <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
      <script src="assets/vendor/venobox/venobox.min.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default Home;
