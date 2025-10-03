import { Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 shadow-sm">
            <h2 className="text-center mb-4">Contact Us</h2>

            <p className="mb-2 d-flex justify-content-left"><strong>Company:</strong> Orchid World Co., Ltd</p>
            <p className="mb-2 d-flex justify-content-left"><strong>Address:</strong> 123 Flower Street, Green City, Wonderland</p>
            <p className="mb-2 d-flex justify-content-left"><strong>Email:</strong> contact@orchidworld.com</p>
            <p className="mb-2 d-flex justify-content-left"><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p className="mb-2 d-flex justify-content-left"><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
