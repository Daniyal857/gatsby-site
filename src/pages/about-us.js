import React from 'react';
import Link from 'gatsby-link';

import innerPageImg from '../images/01.jpg';
import ipadMiniImg from '../images/ipad.png';
import dogImg from '../images/dog.png';
import phoneImg from '../images/phones.png';



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

    <header className="masthead innrPageHead">
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


const AboutUs = () => (
  <div>
    <InnerPageheader />
    
    <section className="content-section-a">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <hr />
            <h2>Death to the Stock Photo:
            <br /> Special Thanks</h2>
            <p>A special thanks to Death to the Stock Photo for providing the photographs that you see in this template. Visit their website to become a member.</p>
          </div>
          <div className="col-sm-6">
            <img src={ipadMiniImg} className="img-responsive abtImg" />
          </div>        
        </div>
      </div>
    </section>
    <section className="content-section-b">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={phoneImg} className="img-responsive abtImg" />
          </div>
          <div className="col-sm-6">
            <hr />
            <h2>3D Device Mockups
               <br /> by PSDCovers</h2>
            <p>Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by PSDCovers! Visit their website to download some of their awesome, free photoshop actions!</p>
          </div>        
        </div>
      </div>
    </section>
    <section className="content-section-a">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <hr />
            <h2>Google Web Fonts and
            <br /> Font Awesome Icons</h2>
            <p>A special thanks to Death to the Stock Photo for providing the photographs that you see in this template. Visit their website to become a member.</p>
          </div>
          <div className="col-sm-6">
            <img src={dogImg} className="img-responsive abtImg" />
          </div>        
        </div>
      </div>
    </section>

    <Footer />
  </div>
)



export default AboutUs
