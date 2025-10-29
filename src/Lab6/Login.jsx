import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { getUserList } from "./loginApi";
import useAuth from "../Lab3/useAuth";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { toggleLogin } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault(); // Ngăn form reload trang
        
        try {
            const users = await getUserList();
            const user = users.find(u => u.name === username && u.password === password);
            console.log(user);
            
            if (user) {
                toggleLogin(user);
                navigate("/"); // Chuyển hướng về trang chính sau khi đăng nhập
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Đã xảy ra lỗi khi đăng nhập!");
        }
    };

    return (
    <Container fluid className="min-vh-100 d-flex justify-content-center p-2">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} xl={4}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
              <Card.Header className="bg-white text-center p-4 border-0">
                <h2 className="mb-2 fw-bold text-dark">Đăng Nhập</h2>
                <p className="mb-0 text-muted">Chào mừng bạn quay trở lại!</p>
              </Card.Header>
              
              <Card.Body className="p-2 px-5">
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-dark">
                      <i className="bi bi-person-fill me-2 text-primary"></i>
                      Tên đăng nhập
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="userName"
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder="Nhập tên đăng nhập"
                      required
                      className="py-3 rounded-3 border-2"
                      style={{fontSize: '1rem'}}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-dark">
                      <i className="bi bi-lock-fill me-2 text-primary"></i>
                      Mật khẩu
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Nhập mật khẩu"
                      required
                      className="py-3 rounded-3 border-2"
                      style={{fontSize: '1rem'}}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check 
                      type="checkbox" 
                      label="Ghi nhớ đăng nhập"
                      className="text-muted"
                    />
                    <a href="#" className="text-primary text-decoration-none small">
                      Quên mật khẩu?
                    </a>
                  </div>

                  <div className="d-grid mb-3">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg"
                      className="py-3 fw-bold rounded-3"
                      style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none'}}
                    >
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Đăng Nhập
                    </Button>
                  </div>
                </Form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Chưa có tài khoản? 
                    <a href="#" className="text-primary text-decoration-none fw-semibold ms-1">
                      Đăng ký ngay
                    </a>
                  </p>
                </div>
              </Card.Body>
              
              <Card.Footer className="text-center bg-light py-3 border-0">
                <small className="text-muted">© 2024 Orchid Shop. All rights reserved.</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
    </Container>

    );
}

export default Login;