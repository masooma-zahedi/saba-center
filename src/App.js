import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsPersonAdd } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

  return (
    <>
      <Navbar className='container-fluid ' style={{ backgroundColor: '#e3f2fd' }} expand="lg">
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

  ///////////////////////////////////// Main Component
  const SabaCarousel = (props) => {
    return (
      <div className="row justify-content-center " style={{ carouselSize }} >
        <div id="carouselExampleControls" className="col col-lg-6 carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item  active" style={carouselSize}>
              <img src={props.src1} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item" style={carouselSize}>
              <img src={props.src2} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item" style={carouselSize}>
              <img src={props.src3} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item" style={carouselSize}>
              <img src={props.src4} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item" style={carouselSize}>
              <img src={props.src5} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item" style={carouselSize}>
              <img src={props.src6} className="d-block w-100 h-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  }

  // /////////////////////////////// Abou Us
  const AboutUs = () => {
    return (
      <>
        <div id="aboutUs" className='mt-4 container  pt-1' style={{ textAlign: 'justify' }}>
          <p>
            Saba Center is a community based non-profit organization serving mainly Afghan community in Greater Houston area Texas. If you like to engage and be part of our mission, there are many ways you can contribute and help us provide better services to our community.
          </p>
        </div>
      </>
    )
  }
  // ////////////////////////////////// Home Content
  const HomeContent = () => {
    return (
      <>
        <section>
          <AboutUs />
          <div className='d-flex justify-content-center mb-2'><hr className='border border-secondary ' style={{ width: '70%' }} /></div>
          <div className='row ' style={{ textAlign: 'justify' }}>
            <div className="col-12 col-lg-4 mb-3 px-3" id='contactUs' style={{ textAlign: 'justify' }}>
              <p className='text-justify'>
                We would like to have contacts of as many community members in Greater Houston area as possible. If you know a new comer or someone that might not know about Saba Center, please do us a huge favor and submit their contact info clicking on the bottom below.
              </p>
              <Link to="/inviteFriend" className='btn btn-primary btn-lg'>
                Invite Friend
              </Link>
            </div>
            <div className="col-12 col-lg-4 mb-3 px-3" id='donate'>
              <p>
                For any means of contribution to to Saba Center programs, use the link below or click on Donate on top menu to send our financial contribution
              </p>
              <Link to="/donate" className='btn btn-primary btn-lg'>
                One Time Contribution
              </Link>
            </div>
            <div className="col-12 col-lg-4 mb-3 px-3" id='inviteFriends'>
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
  // /////////////////////////////////////  Invite Friends
  const InviteFriend = () => {
    const [people1, setPeople1] = useState("number");

    const handleChangeP = (e) => {
      setPeople1(e.target.value)
    }

    const numPeople = () => {
      const people = [];
      switch (people1) {
        case 'One': {
          people.push("a")
          // console.log(people);
          break;
        }
        case 'Two': people.push('a', 'b')
          // console.log(people);
          break;
        case 'Three': people.push('a', 'b', 'c')
          break;
        case 'Four': people.push('a', 'b', 'c', 'd')
          break;
        case 'Five': people.push('a', 'b', 'c', 'd', 'e')
          break;
      }
      console.log(people);
      return (
        people.map((item, index) => {
          return (
            <div key={index} className=' p-3 '>
              <div className=' h4'>
                person # {index + 1}
              </div>
              <div className="form-row row">
                <div className="form-group col-12 col-md-6 mb-3">
                  <label htmlFor="Fname4">First Name <span className='text-danger'>*</span></label>
                  <input type="text" className="form-control" id="Fname4" placeholder="First Name" required />
                </div>
                <div className="form-group col-12 col-md-6 mb-3">
                  <label htmlFor="Lname4">Last Name <span className='text-danger'>*</span></label>
                  <input type="text" className="form-control" id="Lname4" placeholder="Last Name" required />
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label htmlFor="phone4" className='col-12'>Phone <span className='text-danger'>*</span></label>
                <input type="tel" id="phone4" name="phone" maxlength="13" placeholder='+1 (201)555-0123' className='col-12 border rounded' required />
              </div>
              <div className='d-flex justify-content-center'>
                <hr className='border border-secondary border-warning' style={{ width: '80%' }} />
              </div>
            </div>
          )
        })
      )
    }



    return (
      <>
        <div className='mt-4'>
          <h1>Invite Friends </h1>
          <p>
            Using the form below, you can help us collect more up to date contacts of our community members and specially those of whom we haven’t meet yet or they might not know about Saba Center yet or we didn’t have the chance to meet them.  You can submit up to five people at one time and there is no limit how many forms you can submit. Once you enter a number between 1-5 more fields will show up so you can fill out with your friends information.
          </p>
          <form>
            <div className="form-row row">
              <div className="form-group col-12 col-md-6 mb-3">
                <label htmlFor="inputFname4">First Name <span className='text-danger'>*</span> </label>
                <input type="text" className="form-control" id="inputFname4" placeholder="First Name" required />
              </div>
              <div className="form-group col-12 col-md-6 mb-3">
                <label htmlFor="inputLname4">Last Name <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="inputLname4" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1"><FiMail /> Email address <span className='text-danger'>*</span></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mb-3">
              <div> <BsPersonAdd /> How many people are you going to add? <span className='text-danger'>*</span></div>
              <select value={people1} onChange={handleChangeP} className="form-select" aria-label="Default select example" required>
                <option > Add Friends</option>
                <option >One</option>
                <option >Two</option>
                <option >Three</option>
                <option >Four</option>
                <option >Five</option>
              </select>
            </div>
            <div>
              {numPeople()}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
      </>
    )
  }
  // ////////////////////////////// Contact Us
  const ContactUs = () => {
    return (
      <>
        <div className="">
          <h2>Please fill out the form below and we’ll be in touch.</h2>
          <form action="">
            <div className="form-row row">
              <div className="form-group col-12 col-md-6 mb-3">
                <label htmlFor="inputFname4">First Name <span className='text-danger'>*</span> </label>
                <input type="text" className="form-control" id="inputFname4" placeholder="First Name" required />
              </div>
              <div className="form-group col-12 col-md-6 mb-3">
                <label htmlFor="inputLname4">Last Name <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="inputLname4" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1"><FiMail /> Email address <span className='text-danger'>*</span></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mb-3 row">
              <label htmlFor="phone4" className='col-12'>Phone <span className='text-danger'>*</span></label>
              <input type="tel" id="phone4" name="phone" maxlength="13" placeholder='+1 (201)555-0123' className='col-12 border rounded' required />
            </div>
            {/* check box */}
            <div className="form-group mb-3 row">
              <div className='h4' >Purpose of contact</div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Suggestions
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Technical issue with Website
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Complains
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Community matters
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Other
                </label>
                <div className='text-secondary font-italic' >Please describe details below</div>
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleFormControlTextarea1">Comments </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </>
    )
  }
  const Donate = () => {
    const [valMoney, setValMoney] = useState('$20 Dollars')
    const [customTag,setCustomTag] = useState(false)
    const [val,setVal] = useState(null)

    const handleVal = (e)=>{
      setVal(e.target.value)
      console.log(val);
    }
    const clickAmount=()=>{
      setValMoney(`$${val} Dollers`)
      
    }



    // /////////////////////////// HandleMoney
    const handleMoney = (e) => {
      const valMoney = e.target.value;
      if (valMoney == 'Custom Amount | مبلغ دیگر') {
        setCustomTag(true)
        document.querySelector("#customA").disabled = false;
      }else{
        setCustomTag(false)
      }
      setValMoney(valMoney)
    }

    return (
      <>
        <div className="mt-5">
          <form action="">
            <div className="form-row row">
              <div className="form-group col-12 col-md-6 mb-3">
                <label htmlFor="inputFname4">First Name <span className='text-danger'>*</span> </label>
                <input type="text" className="form-control" id="inputFname4" placeholder="First Name" required />
              </div>
              <div className="form-group col-12 col-md-6 mb-3">
                <label htmlFor="inputLname4">Last Name <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="inputLname4" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1"><FiMail /> Email address <span className='text-danger'>*</span></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mb-3 row">
              <label htmlFor="phone4" className='col-12'>Phone <span className='text-danger'>*</span></label>
              <input type="tel" id="phone4" name="phone" maxLength="13" placeholder='+1 (201)555-0123' className='col-12 border rounded' required />
            </div>
            <div className="form-group mb-3">
              <div> Select an amount below | مبلغ را انتخاب کنید  <span className='text-danger'>*</span></div>
              <select className="form-select" vlaue={valMoney} onChange={handleMoney} aria-label="Default select example" required>
                <option > $20 Dollars</option>
                <option >$30 Dollars</option>
                <option >$50 Dollars</option>
                <option >$80 Dollars</option>
                <option >$100 Dollars</option>
                <option >$150 Dollars</option>
                <option >$200 Dollars</option>
                <option >Custom Amount | مبلغ دیگر</option>
              </select>
            </div>
            <div className= {` form-group mb-3 row ${customTag ? "" : "d-none"} `} >
              <label htmlFor="customA" className='col-12'>custom amount : <span className='text-danger'>*</span></label>
              <input type="number" id="customA" disabled  value={val} onChange={handleVal} name="cardNumber"  placeholder='New Amount' className='col-12 border rounded' required />
              <button className='btn btn-success'onClick={clickAmount} >Insert Amount</button>
            </div>
            <div className="form-group mb-3 row">
              <label htmlFor="cardNumber" className='col-12'>Credit Card Details | مشخصات کارت اعتباری <span className='text-danger'>*</span></label>
              <input type="number" id="cardNumber" name="cardNumber"  placeholder='Card Number' className='col-12 border rounded' required />
            </div>
            <div className="form-group mb-3 row">
              <label htmlFor="nameCard" className='col-12'>Name on Card <span className='text-danger'>*</span></label>
              <input type="text" id="nameCard" name="nameCard"  placeholder='Card Number' className='col-12 border rounded' required />
            </div>
            <div className="">
              <h4>Total charges of this transaction</h4>
              <div className='border'><span className='text-success px-2'>{valMoney } </span> </div>
              <p>Total amount your credit card will be charged</p>
              <p className="">مبلغ کل که از کارت شما کم خواهد شد</p>
            </div>
          </form>
        </div>
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
      <h1 className='bg-secondary p-5 mt-5'>Footer</h1>
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
