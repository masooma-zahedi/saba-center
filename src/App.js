import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

  return (
    <>
      <Navbar className='container-fluid border border-danger ' style={{ backgroundColor: '#e3f2fd' }} expand="lg">
        <Container >
          <Navbar.Brand className='h2 ' href="/">
            Saba Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav hi">
            <Nav className="me-auto h5">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
              <Nav.Link href="donate">Donate</Nav.Link>
              <Nav.Link href="inviteFriend">Invite friends</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const MainContent = () => {

  // Main Component
  const SabaCarousel = (props) => {
    return (
      <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner  border ">
          <div className="carousel-item active " style={{ height: 600 }}>
            <img className="d-block w-100 h-100" src={props.src1} alt="First slide" />
          </div>
          <div className="carousel-item " style={{ height: 600 }}>
            <img className="d-block w-100 h-100" src={props.src2} alt="Second slide" />
          </div>
          <div className="carousel-item " style={{ height: 600 }}>
            <img className="d-block w-100 h-100" src={props.src3} alt="Third slide" />
          </div>
          <div className="carousel-item " style={{ height: 600 }}>
            <img className="d-block w-100 h-100" src={props.src4} alt="Third slide" />
          </div>
          <div className="carousel-item " style={{ height: 600 }}>
            <img className="d-block w-100 h-100" src={props.src5} alt="Third slide" />
          </div>
          <div className="carousel-item " style={{ height: 600 }}>
            <img className="d-block w-100 h-100" src={props.src6} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }

  const AboutUs = () => {
    return (
      <>
        <div id="aboutUs" className='mt-5 container border pt-5'>
          <p>
            Saba Center is a community based non-profit organization serving mainly Afghan community in Greater Houston area Texas. If you like to engage and be part of our mission, there are many ways you can contribute and help us provide better services to our community.
          </p>
        </div>
      </>
    )
  }

  const HomeContent = () => {
    return (
      <>
        <section>
          <AboutUs/>

          <div className='d-flex flex-column flex-lg-row border border-dark justify-content-between'>
            <div className="border border-danger m-3 px-3" id='contactUs'>
              <p>
                We would like to have contacts of as many community members in Greater Houston area as possible. If you know a new comer or someone that might not know about Saba Center, please do us a huge favor and submit their contact info clicking on the bottom below.
              </p>
              <Link to="/inviteFriend" className='btn btn-primary btn-lg'>
                Invite Friend
              </Link>
            </div>
            <div className="border border-warning m-3 px-3" id='donate'>
              <p>
                For any means of contribution to to Saba Center programs, use the link below or click on Donate on top menu to send our financial contribution
              </p>
              <Link to="/donate" className='btn btn-primary btn-lg'>
                One Time Contribution
              </Link>
            </div>
            <div className="border border-primary m-3 px-3" id='inviteFriends'>
              <p>
                We welcome any comments, suggestion and ideas you might have that can help us improve our services and reach out to more community members. To submit your suggestions, use contact-us page on top menu or click on bottom below.
              </p>
              <Link to="/contactUs" className='btn btn-primary btn-lg'>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  const InviteFriend = () => {
    return (
      <>
        <h1>Invite Friend Page</h1>
      </>
    )
  }
  const ContactUs = () => {
    return (
      <>
        <h1>Contact Us Page</h1>
      </>
    )
  }
  const Donate = () => {
    return (
      <>
        <h1>Donate Page</h1>
      </>
    )
  }



  return (
    <Router>

      <div className='container' style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 20 }}>
        <SabaCarousel
          src1={"./images/saba.jpg"}
          src2={"./images/slide2.jpg"}
          src3={"./images/slide3.jpg"}
          src4={"./images/slide4.jpg"}
          src5={"./images/slide5.jpg"}
          src6={"./images/slide6.jpg"}
        />
        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/inviteFriend" element={<InviteFriend />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
        </Routes>

      </div>
    </Router>
  )
}

const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
    </>
  )
}

function App() {
  return (
    <div className="">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
