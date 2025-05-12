import { Container, Row, Col, Card, Button, Form, Spinner,Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFire, FaStar, FaRegHeart, FaFilter } from 'react-icons/fa';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  // Fetch new arrivals data
  useEffect(() => {
    // Simulate API call
    const fetchNewArrivals = async () => {
      try {
        // Mock data - replace with actual API call
        const mockData = [
          {
            id: 1,
            name: 'Premium Denim Jacket',
            category: 'men',
            price: 2499,
            image: '/assets/homePage/newA/denimjacket.jpg',
            isNew: true,
            rating: 4.5,
            colors: ['Blue', 'Black'],
            dateAdded: '2023-12-01'
          },
          {
            id: 2,
            name: 'Silk Summer Dress',
            category: 'women',
            price: 1799,
            image: '/assets/homePage/newA/dress1.jpg',
            isNew: true,
            rating: 4.8,
            colors: ['Red', 'White'],
            dateAdded: '2023-12-05'
          },
          // Add more products...
        ];
        
        // Sort by newest first
        const sortedProducts = mockData.sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );
        
        setProducts(sortedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const handleQuickView = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) {
    return (
      <Container className="text-center my-5 py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading new arrivals...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">
          <FaFire className="text-danger me-2" />
          New Arrivals
        </h1>
        
        <div className="d-flex align-items-center">
          <FaFilter className="me-2" />
          <Form.Select 
            size="sm" 
            style={{ width: '150px' }}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </Form.Select>
        </div>
      </div>

      <p className="text-muted mb-4">
        Discover our latest products added in the last 30 days
      </p>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <h4>No new arrivals found</h4>
          <p>Check back soon for new products!</p>
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id}>
              <NewArrivalCard 
                product={product} 
                onQuickView={handleQuickView} 
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

const NewArrivalCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="h-100 border-0 shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name}
          style={{ 
            height: '250px', 
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        />
        
        {product.isNew && (
          <Badge bg="success" className="position-absolute top-0 start-0 m-2">
            NEW
          </Badge>
        )}
        
        <Button 
          variant="light" 
          className="position-absolute top-0 end-0 m-2 rounded-circle"
          style={{ width: '36px', height: '36px' }}
        >
          <FaRegHeart />
        </Button>
      </div>
      
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title className="mb-1">{product.name}</Card.Title>
            <small className="text-muted d-block mb-2">
              {product.colors?.join(', ')}
            </small>
          </div>
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-1" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <h5 className="text-primary mt-2">₹{product.price}</h5>
        
        <div className="d-grid gap-2 mt-3">
          <Button 
            variant={isHovered ? 'dark' : 'outline-dark'} 
            size="sm"
            className="transition-all"
          >
            Add to Cart
          </Button>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={() => onQuickView(product.id)}
          >
            Quick View
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewArrivals;