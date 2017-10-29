import React from 'react';
import Link from 'gatsby-link';

// import innerPageImg from '';



const NavbarMain = () => (
  <div>
    <div className="navbarWrapper">

      <div className="navbar-wrapper">

        <div className="navbar navbar-default affix-top navAnimated" role="navigation" data-spy="affix" data-offset-top="150">
          
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand logo" to="/">Start Bootstrap</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><Link to="/">Home</Link></li>
                <li className=""><Link to="/about-us">About</Link></li>
                <li className=""><Link to="/service">Services</Link></li>
                <li className=""><Link to="/features">Features</Link></li>
                <li className=""><Link to="/contact-us">Contact</Link></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
)

const InnerPageheader = () => (
  <div>
    
    <NavbarMain />

    <header className="masthead innrPageHead2">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="header-content mx-auto">
              <div className="alignCenter">
                <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
)

const Footer = () => (
  <div>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>We
          <i className="glyphicon glyphicon-heart-empty" style={{padding: '0px 5px'}}></i>
          new friends!</h2>
      </div>
    </section>

    <footer>
      <div className="container">
        <p>&copy; 2017 Start Bootstrap. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="#">Privacy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">Terms</Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">FAQ</Link>
          </li>
        </ul>
      </div>
    </footer>

  </div>
)


const Services = () => (
  <div>
    <InnerPageheader />

    <section className="bg-primary" id="service">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 mx-auto text-center">
            <h2 className="section-heading text-white">We've got what you need!</h2>
            <hr className="light" />
            <p className="text-faded">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
            <a className="btn btn-default btn-xl js-scroll-trigger" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>


    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">At Your Service</h2>
            <hr className="primary" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 text-center">
            <div className="service-box">
              <i className="glyphicon glyphicon-tint"></i>
              <h3>Sturdy Templates</h3>
              <p className="text-muted">Our templates are updated regularly so they don't break.We update dependencies to keep things fresh.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <div className="service-box">
              <i className="glyphicon glyphicon-send"></i>
              <h3>Ready to Ship</h3>
              <p className="text-muted">You can use this theme as is, or you can make changes!.You can use this theme as is, or you can make changes!</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <div className="service-box">
              <i className="glyphicon glyphicon-time"></i>
              <h3>Up to Date</h3>
              <p className="text-muted">We update dependencies to keep things fresh.We update dependencies to keep things fresh.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <div className="service-box">
              <i className="glyphicon glyphicon-heart"></i>
              <h3>Made with Love</h3>
              <p className="text-muted">You have to make your websites with love these days!.We update dependencies to keep things fresh.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)



export default Services;
