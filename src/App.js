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
  const carouselSize = {
    maxHeight: window.innerHeight / 2,
    minHeight: window.innerHeight / 2,
    height: window.innerHeight / 2,
  }

  // Main Component
  const SabaCarousel = (props) => {
    return (
      <div className="row justify-content-center  border border-danger" style={{ carouselSize }} >
        <div id="carouselExampleControls" class="col col-lg-6 carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item border active" style={carouselSize}>
              <img src={props.src1} class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item" style={carouselSize}>
              <img src={props.src2} class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item" style={carouselSize}>
              <img src={props.src3} class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item" style={carouselSize}>
              <img src={props.src4} class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item" style={carouselSize}>
              <img src={props.src5} class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item" style={carouselSize}>
              <img src={props.src6} class="d-block w-100 h-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  }

  const AboutUs = () => {
    return (
      <>
        <div id="aboutUs" className='mt-5 container border pt-5' style={{textAlign:'justify'}}>
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
          <AboutUs />

          <div className='row border border-dark ' style={{textAlign:'justify'}}>
            <div className="col-12 col-lg-4 mb-3 border border-danger  px-3" id='contactUs' style={{textAlign:'justify'}}>
              <p className='text-justify'>
                We would like to have contacts of as many community members in Greater Houston area as possible. If you know a new comer or someone that might not know about Saba Center, please do us a huge favor and submit their contact info clicking on the bottom below.
              </p>
              <Link to="/inviteFriend" className='btn btn-primary btn-lg'>
                Invite Friend
              </Link>
            </div>
            <div className="col-12 col-lg-4 mb-3 border border-warning  px-3" id='donate'>
              <p>
                For any means of contribution to to Saba Center programs, use the link below or click on Donate on top menu to send our financial contribution
              </p>
              <Link to="/donate" className='btn btn-primary btn-lg'>
                One Time Contribution
              </Link>
            </div>
            <div className="col-12 col-lg-4 mb-3 border border-primary px-3" id='inviteFriends'>
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
