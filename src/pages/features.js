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

    <header className="masthead innrPageHead4">
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

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">Check out what you can do with this app theme!</p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="glyphicon glyphicon-inbox text-primary"></i>
                    <h3>Device Mockups</h3>
                    <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="glyphicon glyphicon-camera text-primary"></i>
                    <h3>Flexible Use</h3>
                    <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="glyphicon glyphicon-gift text-primary"></i>
                    <h3>Free to Use</h3>
                    <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="glyphicon glyphicon-lock text-primary"></i>
                    <h3>Open Source</h3>
                    <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)



export default ContactUs;
