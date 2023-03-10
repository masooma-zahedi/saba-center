import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  
  return (
    <>
      <Navbar className='fixed-top' style={{ backgroundColor: '#e3f2fd' }} expand="lg">
        <Container >
          <Navbar.Brand className='h2 ' href="#home">
            Saba Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav hi">
            <Nav className="me-auto h5">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link href="#link">Donate</Nav.Link>
              <Nav.Link href="#link">Invite friends</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
const SabaCarousel = (props) => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner  border ">
        <div class="carousel-item active " style={{ height: 600 }}>
          <img class="d-block w-100 h-100" src={props.src1} alt="First slide" />
        </div>
        <div class="carousel-item " style={{ height: 600 }}>
          <img class="d-block w-100 h-100" src={props.src2} alt="Second slide" />
        </div>
        <div class="carousel-item " style={{ height: 600 }}>
          <img class="d-block w-100 h-100" src={props.src3} alt="Third slide" />
        </div>
        <div class="carousel-item " style={{ height: 600 }}>
          <img class="d-block w-100 h-100" src={props.src4} alt="Third slide" />
        </div>
        <div class="carousel-item " style={{ height: 600 }}>
          <img class="d-block w-100 h-100" src={props.src5} alt="Third slide" />
        </div>
        <div class="carousel-item " style={{ height: 600 }}>
          <img class="d-block w-100 h-100" src={props.src6} alt="Third slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}
const MainContent = () => {
  return (
    <>
      <SabaCarousel
         src1={"./images/saba.jpg"} 
         src2={"./images/slide2.jpg"}
         src3={"./images/slide3.jpg"}
         src4={"./images/slide4.jpg"}
         src5={"./images/slide5.jpg"}
         src6={"./images/slide6.jpg"}
      />
      <h1 className="text-center">Main Content</h1>
    </>
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
    <div className="App" style={{height:6000}}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
