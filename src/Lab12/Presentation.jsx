import { useState } from "react";
import { Badge, Button, Card, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../Lab3/useAuth";
import { deleteOrchild, updateOrchild } from "./orchildsApi";

const Presentation = ({orchid, setOrchids}) => {
    const [showModal, setShowModal] = useState(false);
    const [orchidName, setOrchidName] = useState(orchid.name || "");
    const [orchidDescription, setOrchidDescription] = useState(orchid.description || "");
    const [orchidRating, setOrchidRating] = useState(orchid.rating || "");
    const [orchidColor, setOrchidColor] = useState(orchid.color || "");
    const [orchidIsSpecial, setOrchidIsSpecial] = useState(orchid.isSpecial || false);
    const [orchidIsNatural, setOrchidIsNatural] = useState(orchid.isNatural || false);
    const [orchidImage, setOrchidImage] = useState(orchid.image || "");
    const [orchidOrigin, setOrchidOrigin] = useState(orchid.origin || "");
    const [orchidCategory, setOrchidCategory] = useState(orchid.category || "");
    const navgate = useNavigate();
    const {isAuthenticated, user} = useAuth();

    const handleUpdate = async () => {
        const updatedOrchid = {
            name: orchidName !== orchid.name ? orchidName : orchid.name,
            description: orchidDescription !== orchid.description ? orchidDescription : orchid.description,
            rating: orchidRating !== orchid.rating ? orchidRating : orchid.rating,
            color: orchidColor !== orchid.color ? orchidColor : orchid.color,
            isSpecial: orchidIsSpecial !== orchid.isSpecial ? orchidIsSpecial : orchid.isSpecial,
            isNatural: orchidIsNatural !== orchid.isNatural ? orchidIsNatural : orchid.isNatural,
            image: orchidImage !== orchid.image ? orchidImage : orchid.image,
            origin: orchidOrigin !== orchid.origin ? orchidOrigin : orchid.origin,
            category: orchidCategory !== orchid.category ? orchidCategory : orchid.category
        };

        try {
            await updateOrchild(orchid.id, updatedOrchid);
            setOrchids((prevOrchids) => prevOrchids.map((prevOrchid) => prevOrchid.id === orchid.id ? { ...updatedOrchid } : prevOrchid));
            setShowModal(false);
        } catch (error) {
            console.error("Error updating orchid:", error);
        }
    }

    const handleRemove = async (id) => {
        try {
            await deleteOrchild(id);
            setOrchids((prevOrchids) => prevOrchids.filter((orchid) => orchid.id !== id));
        } catch (error) {
            console.error("Error removing orchid:", error);
        }
    }

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
                    <Button variant="danger" className="m-1"
                        style={{ width: '100%' }}
                        onClick={() => { navgate(`/detail/${orchid.id}`) }}>
                        View details
                    </Button>

                    {isAuthenticated && user.isAdmin === true && (
                        <>
                            <Button variant="secondary" className="m-1"
                                style={{ width: '100%' }}
                                onClick={() => { setShowModal(true) }}>
                                Update
                            </Button>

                            <Button variant="secondary" className="m-1"
                                style={{ width: '100%' }}
                                onClick={() => { handleRemove(orchid.id) }}>
                                Loại bỏ
                            </Button>
                        </>
                    )}
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Orchid - {orchid.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body className="p-4">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                                <i className="bi bi-tag me-2 text-primary"></i>
                                Name
                            </Form.Label>
                            <Form.Control 
                                type="text" 
                                value={orchidName}
                                onChange={(event) => setOrchidName(event.target.value)}
                                className="py-2"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                                <i className="bi bi-card-text me-2 text-primary"></i>
                                Description
                            </Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                value={orchidDescription}
                                onChange={(event) => setOrchidDescription(event.target.value)}
                                className="py-2"
                            />
                        </Form.Group>

                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        <i className="bi bi-star me-2 text-warning"></i>
                                        Rating
                                    </Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        value={orchidRating}
                                        min="1"
                                        max="5"
                                        step="0.1"
                                        className="py-2"
                                        onChange={(event) => setOrchidRating(event.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        <i className="bi bi-palette me-2 text-primary"></i>
                                        Color
                                    </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={orchidColor}
                                        className="py-2"
                                        onChange={(event) => setOrchidColor(event.target.value)}
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Label className="fw-semibold mb-0 me-3">
                                        <i className="bi bi-star-fill me-2 text-success"></i>
                                        Special
                                    </Form.Label>
                                    <Form.Check 
                                        type="checkbox"
                                        checked={orchidIsSpecial}
                                        onChange={(event) => setOrchidIsSpecial(event.target.checked)}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Label className="fw-semibold mb-0 me-3">
                                        <i className="bi bi-tree me-2 text-success"></i>
                                        Natural
                                    </Form.Label>
                                    <Form.Check 
                                        type="checkbox"
                                        checked={orchidIsNatural}
                                        onChange={(event) => setOrchidIsNatural(event.target.checked)}
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                                <i className="bi bi-image me-2 text-primary"></i>
                                Image URL
                            </Form.Label>
                            <Form.Control 
                                type="text" 
                                className="py-2"
                                value={orchidImage}
                                onChange={(event) => setOrchidImage(event.target.value)}
                            />
                        </Form.Group>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        <i className="bi bi-globe me-2 text-primary"></i>
                                        Origin
                                    </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={orchidOrigin}
                                        className="py-2"
                                        onChange={(event) => setOrchidOrigin(event.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        <i className="bi bi-grid me-2 text-primary"></i>
                                        Category
                                    </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={orchidCategory}
                                        className="py-2"
                                        onChange={(event) => setOrchidCategory(event.target.value)}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Presentation;