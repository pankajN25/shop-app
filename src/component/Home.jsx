import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Optional custom CSS

const Home= () => {
  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: '/assets/homePage/Headphon.png'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: '/assets/homePage/smartwatch.jpg'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: '/assets/homePage/bluetooth speaker.jpg'
    },
    {
      id: 4,
      name: 'Laptop Backpack',
      price: 49.99,
      image: '/assets/homePage/bag.jpg'
    }
  ];

  const categories = [
    { id: 1, name: 'Electronics', image: '/assets/homePage/electronic.jpg', route: 'electronics' },
    { id: 2, name: 'Clothing', image: '/assets/homePage/clothing.webp', route: 'clothing' },
    { id: 3, name: 'Home & Kitchen', image: '/assets/homePage/homeKitchen.jpg', route: 'category/home-kitchen' },
    { id: 4, name: 'Sports', image: '/assets/homePage/sport.jpg', route: 'category/sports' }
  ];
  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homePage/shopping.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Summer Sale</h3>
            <p>Up to 50% off on selected items</p>
            <Button variant="primary">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homePage/Shopping.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Discover our latest products</p>
            <Button variant="primary">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Featured Categories */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <Row>
          {categories.map(category => (
            <Col key={category.id} md={3} sm={6} className="mb-4">
              <Card className="h-100 category-card">
                <Card.Img variant="top" src={category.image} />
                <Card.Body className="text-center">
                  <Card.Title>{category.name}</Card.Title>
                  <Link to={category.route}>
                    <Button variant="outline-primary">View All</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Featured Products */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {featuredProducts.map(product => (
            <Col key={product.id} lg={3} md={6} className="mb-4">
              <Card className="h-100 product-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted">${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Promo Banner */}
      <Container fluid className="bg-light py-5 my-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h3>Free Shipping on Orders Over $50</h3>
              <p className="mb-0">Limited time offer. Shop now and save!</p>
            </Col>
            <Col md={4} className="text-md-right mt-3 mt-md-0">
              <Button variant="success" size="lg">Shop Now</Button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Newsletter Signup */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates on new products and upcoming sales</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email address" 
                aria-label="Your email address" 
                aria-describedby="button-addon2" 
              />
              <div className="input-group-append">
                <Button variant="dark" type="button">Subscribe</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Outlet/>
     
      <footer className="bg-dark text-white mt-5">
      <Container className="py-5">
        <Row>
          {/* About Us */}
          <Col md={3} sm={6} className="mb-4">
            <h5>About Us</h5>
            <p className="text-muted">
              Your one-stop shop for all your needs. We provide quality products with fast delivery and excellent customer service.
            </p>
            <div className="social-icons">
              <a href="#" className="text-white me-2"><FaFacebook size={20} /></a>
              <a href="#" className="text-white me-2"><FaTwitter size={20} /></a>
              <a href="#" className="text-white me-2"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaLinkedin size={20} /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Home</a></li>
              <li><a href="#" className="text-muted">Products</a></li>
              <li><a href="#" className="text-muted">About Us</a></li>
              <li><a href="#" className="text-muted">Contact</a></li>
              <li><a href="#" className="text-muted">FAQ</a></li>
              <li><a href="#" className="text-muted">Terms & Conditions</a></li>
            </ul>
          </Col>

          {/* Customer Service */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">My Account</a></li>
              <li><a href="#" className="text-muted">Order Tracking</a></li>
              <li><a href="#" className="text-muted">Wishlist</a></li>
              <li><a href="#" className="text-muted">Shipping Policy</a></li>
              <li><a href="#" className="text-muted">Returns & Refunds</a></li>
              <li><a href="#" className="text-muted">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Contact Us</h5>
            <address className="text-muted">
              <p>123 Shopping Street</p>
              <p>E-Commerce City, EC 12345</p>
              <p>Email: info@yourshop.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </Col>
        </Row>

        <hr className="bg-secondary" />

        {/* Payment Methods and Copyright */}
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="payment-methods">
              <span className="me-2">We accept:</span>
              <FaCcVisa size={24} className="me-2" />
              <FaCcMastercard size={24} className="me-2" />
              <FaCcPaypal size={24} />
            </div>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} Your Shopping Website. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    
      
    </div>
  );
};

export default Home;
