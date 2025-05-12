import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DealsPage = () => {
  const [deals, setDeals] = useState([]);
  const navigate = useNavigate();

  // Fetch deals data (replace with your actual data source)
  useEffect(() => {
    // Mock data - replace with API call or import from your data file
    const mockDeals = [
      {
        id: 1,
        name: 'Summer Special T-Shirt',
        originalPrice: 999,
        dealPrice: 599,
        discount: '40% OFF',
        image: '/assets/homePage/newA/tshirt.webp',
        expiry: '2023-12-31T23:59:59',
        stock: 5
      },
      {
        id: 2,
        name: 'Winter Jacket',
        originalPrice: 2999,
        dealPrice: 1999,
        discount: '33% OFF',
        image: '/assets/homePage/newA/jacket.jpg',
        expiry: '2023-12-15T23:59:59',
        stock: 2
      },
      // Add more deals...
    ];
    setDeals(mockDeals);
  }, []);

  const handleQuickView = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Today's Hot Deals</h1>
      <p className="text-center text-muted mb-5">
        Limited time offers - Don't miss out!
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {deals.map((deal) => (
          <Col key={deal.id}>
            <DealCard 
              deal={deal} 
              onQuickView={handleQuickView} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const DealCard = ({ deal, onQuickView }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deal.expiry));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deal.expiry));
    }, 1000);
    return () => clearInterval(timer);
  }, [deal.expiry]);

  function calculateTimeLeft(expiryDate) {
    const difference = new Date(expiryDate) - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: difference < 0
    };
  }

  return (
    <Card className="h-100 deal-card shadow-sm">
      <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
        {deal.discount}
      </Badge>
      {deal.stock < 5 && (
        <Badge bg="warning" className="position-absolute top-0 end-0 m-2">
          Only {deal.stock} left
        </Badge>
      )}
      
      <Card.Img 
        variant="top" 
        src={deal.image} 
        alt={deal.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      
      <Card.Body>
        <Card.Title>{deal.name}</Card.Title>
        
        <div className="d-flex align-items-center mb-2">
          <h5 className="text-danger mb-0">₹{deal.dealPrice}</h5>
          <small className="text-decoration-line-through text-muted ms-2">
            ₹{deal.originalPrice}
          </small>
        </div>
        
        {!timeLeft.expired ? (
          <div className="mb-3">
            <small className="text-muted d-block">Ends in:</small>
            <div className="d-flex gap-1">
              <span className="badge bg-dark">
                {timeLeft.days}d
              </span>
              <span className="badge bg-dark">
                {timeLeft.hours}h
              </span>
              <span className="badge bg-dark">
                {timeLeft.minutes}m
              </span>
              <span className="badge bg-dark">
                {timeLeft.seconds}s
              </span>
            </div>
          </div>
        ) : (
          <Badge bg="secondary" className="mb-3">
            Deal Expired
          </Badge>
        )}
        
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={() => onQuickView(deal.id)}
          >
            Quick View
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DealsPage;