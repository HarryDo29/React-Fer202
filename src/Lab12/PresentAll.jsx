import Presentation from "./Presentation";
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect } from "react";
import useAuth from "../Lab3/useAuth";
import { addNewOrchild, getOrchildsList } from "./orchildsApi";

const PresentAll = () => {
    const [mode, setMode] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [orchidName, setOrchidName] = useState("");
    const [orchidDescription, setOrchidDescription] = useState("");
    const [orchidRating, setOrchidRating] = useState("");
    const [orchidColor, setOrchidColor] = useState("");
    const [orchidIsSpecial, setOrchidIsSpecial] = useState(false);
    const [orchidIsNatural, setOrchidIsNatural] = useState(false);
    const [orchidImage, setOrchidImage] = useState("");
    const [orchidOrigin, setOrchidOrigin] = useState("");
    const [orchidCategory, setOrchidCategory] = useState("");
    const [orchids, setOrchids] = useState([]);

    const {isAuthenticated, user} = useAuth();  

    useEffect(() => {
        const fetchOrchids = async () => {
        try {
            const response = await getOrchildsList();
            console.log(response);
            if (response !== null || response !== undefined) {
            setOrchids(response);
            }
        } catch (error) {
            console.error("Error loading orchids data:", error);
        }
        };
        fetchOrchids();
    }, []);

    const handleAddOrchid = async () => {
        const newOrchid = {
            name: orchidName,
            description: orchidDescription,
            rating: parseFloat(orchidRating),
            color: orchidColor,
            isSpecial: orchidIsSpecial,
            isNatural: orchidIsNatural,
            image: orchidImage,
            origin: orchidOrigin,
            category: orchidCategory
        };

        try {
            const addedOrchid = await addNewOrchild(newOrchid);
            setOrchids((prevOrchids) => [...prevOrchids, addedOrchid]);
            setShowModal(false);
        } catch (error) {
            console.error("Error adding new orchid:", error);
        }
    }

    return(
        <Container style={{width: '100%', padding: 0}} fluid>
            <div className={
                mode ? "bg-light text-danger w-100" : "bg-dark text-danger w-100"
            }>
                <div className="position-relative d-flex align-items-center" style={{ height: '80px' }}>
                    <Button variant="primary"
                        onClick={() => setMode(!mode)}
                        className="position-absolute start-0"
                    >
                        Theme
                    </Button>

                    <h1 className="mx-auto">List of Orchids</h1>

                    {isAuthenticated && user.isAdmin === true && (<Button variant="success"
                        onClick={() => setShowModal(true)}
                        className="position-absolute end-0">
                        Add New Orchid
                    </Button>)}
                </div>
                <div className="row row-cols-4">
                    {orchids.map(orchid => (
                        <div className="col" key={orchid.id}>
                            <Presentation orchid={orchid} setOrchids={setOrchids} />
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                <Modal.Header closeButton className="bg-primary text-white">
                    <Modal.Title>
                        <i className="bi bi-flower1 me-2"></i>
                        Add New Orchid
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form onSubmit={handleAddOrchid}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                                <i className="bi bi-tag me-2 text-primary"></i>
                                Name
                            </Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter orchid name" 
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
                                placeholder="Enter orchid description"
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
                                        placeholder="Enter rating (1-5)"
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
                                        placeholder="Enter orchid color"
                                        className="py-2"
                                        onChange={(event) => setOrchidColor(event.target.value)}
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <Form.Group className="d-flex">
                                    <Form.Label className="fw-semibold d-block mb-2">
                                        <i className="bi bi-star-fill me-2 text-success"></i>
                                        Special
                                    </Form.Label>
                                    <Form.Check 
                                        type="checkbox"
                                        className="ms-4"
                                        onChange={(event) => setOrchidIsSpecial(event.target.checked)}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="d-flex">
                                    <Form.Label className="fw-semibold d-block mb-2">
                                        <i className="bi bi-tree me-2 text-success"></i>
                                        Natural
                                    </Form.Label>
                                    <Form.Check 
                                        type="checkbox"
                                        className="ms-4"
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
                                placeholder="Enter orchid image URL"
                                className="py-2"
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
                                        placeholder="Enter orchid origin"
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
                                        placeholder="Enter orchid category"
                                        className="py-2"
                                        onChange={(event) => setOrchidCategory(event.target.value)}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        <i className="bi bi-x-circle me-2"></i>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleAddOrchid}>
                        <i className="bi bi-plus-circle me-2"></i>
                        Add Orchid
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default PresentAll;
