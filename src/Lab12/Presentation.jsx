import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Presentation({orchid}) {
    const navgate = useNavigate();
    
    return (
        <div className="mb-4">
            <Card className="mb-4" style={{ width: '18rem', margin: 'auto', padding: '15px' }}>
                <Card.Img variant="top" src={orchid.image} alt={orchid.id} style={{ width: '100%', height: '200px' }} />
                <Card.Body>
                    <Card.Title>{orchid.name}{" "}
                        {orchid.isSpecial && (<Badge bg="warning" text="dark">Special</Badge>)}
                    </Card.Title>
                    <Card.Text style={{justifyContent: 'left', textAlign: 'left'}}>
                        <strong>Rating: </strong> {orchid.rating}⭐️ <br />
                        <strong>Origin: </strong> {orchid.origin} <br />
                        <strong>Color: </strong> {orchid.color} <br />
                        <strong>Category: </strong> {orchid.category} <br />
                    </Card.Text>
                    <Button variant="danger"
                        style={{ width: '100%' }}
                        onClick={() => { navgate(`/detail/${orchid.id}`) }}>
                        View details
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}