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

    <header className="masthead innrPageHead3">
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


const ContactUs = () => (
  <div>
    <InnerPageheader />

    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 mx-auto text-center">
            <h2 className="section-heading">Let's Get In Touch!</h2>
            <hr className="primary" />
            <p className="pt-contact">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4 ml-auto text-center">
            <i className="glyphicon glyphicon-phone"></i>
            <p>123-456-6789</p>
          </div>
          <div className="col-lg-4 col-lg-offset-4 mr-auto text-center">
            <i className="glyphicon glyphicon-envelope"></i>
            <p>
              <Link to="#" tel="mailto:your-email@your-domain.com">feedback@startbootstrap.com</Link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)



export default ContactUs;
