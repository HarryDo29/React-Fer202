import { useState } from "react";
import { Badge, Button, Card, Container, Modal } from "react-bootstrap";

export default function Presentation({orchid}) {
    const [orchidDetails, setOrchidDetails] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="mb-4">
            <Card className="mb-4" style={{ width: '19rem', margin: 'auto' }}>
                <Card.Img variant="top" src={orchid.image} alt={orchid.id} style={{ width: '100%', height: '200px' }} />
                <Card.Body>
                    <Card.Title>{orchid.name}{" "}
                        {orchid.isSpecial && (<Badge bg="warning" text="dark">Special</Badge>)}
                    </Card.Title>
                    <Card.Text>
                        <strong>Rating: </strong> {orchid.rating}⭐️ <br />
                        <strong>Origin: </strong> {orchid.origin} <br />
                        <strong>Color: </strong> {orchid.color} <br />
                        <strong>Category: </strong> {orchid.category} <br />
                    </Card.Text>
                    <Button variant="danger"
                        style={{ width: '100%' }}
                        onClick={() => { 
                            setOrchidDetails(orchid); 
                            handleShow(); 
                        }}>
                        View details
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{orchidDetails.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={orchidDetails.image} alt={orchidDetails.id} width="100%" height="300px" />
                    <h1>{orchidDetails.name}</h1>
                    <strong>Rating: </strong> {orchid.rating}⭐️ <br />
                    <strong>Origin: </strong> {orchid.origin} <br />
                    <strong>Color: </strong> {orchid.color} <br />
                    <strong>Category: </strong> {orchid.category} <br />
                    <strong>Description: </strong> {orchidDetails.description} <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}