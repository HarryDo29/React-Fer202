import orchids from "../Lab12/ListOfOrchilds";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const Detail = () => {
    console.log(orchids);

    const { id } = useParams();
    const orchild = orchids.find(o => o.id === parseInt(id)); 
    
    

    if (!orchild) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </Container>
        );
    }
    
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Header className="bg-primary text-white text-center py-3">
                            <h2 className="mb-0">Orchid Details</h2>
                        </Card.Header>
                        <Card.Body className="p-4 d-flex flex-column">
                            <div className="text-center mb-4 justify-content-center">
                                <h3 className="text-primary mb-3">{orchild.name}</h3>
                                <img 
                                    src={orchild.image} 
                                    alt={orchild.name} 
                                    className="img-fluid rounded shadow-sm"
                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                />
                            </div>

                            <div className="justify-content-left">
                                <strong className="text-muted mb-2">Rating: </strong>
                                <span className="fs-5">{orchild.rating} ⭐</span>
                            </div>

                            <div className="justify-content-left">
                                <strong className="text-muted mb-2">Origin: </strong>
                                <span>{orchild.origin}</span>
                            </div>

                            <div className="justify-content-left">
                                <strong className="text-muted mb-2">Color: </strong>
                                <span>{orchild.color}</span>
                            </div>

                            <div className="justify-content-left">
                                <strong className="text-muted mb-2">Category: </strong>
                                <Badge bg="info" className="fs-6">{orchild.category}</Badge>
                            </div>

                            <div className="justify-content-left">
                                <strong className="text-muted mb-2">Description: </strong>
                                <p className="mb-0">{orchild.description}</p>
                            </div>
            
                            
                            <div className="text-center mt-4">
                                <Button as={Link} to="/" variant="outline-primary" size="lg">
                                    ⬅ Back to Home
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail;