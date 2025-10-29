import { Container , Nav, Button } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { finish } from "./questionSlice";

const Lab5Layout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFinish = () => {
        dispatch(finish());
    };

    const handleShowQuiz = () => {
        navigate('/');
    }

    const handleShowAnswers = () => {
        navigate('/quiz/result');
    }

    return (
    <Container>
        <Nav>
          <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href="/quiz">Quiz</Nav.Link>
          </Nav.Item>
        </Nav>

        <main>
            <Outlet />
        </main>

        <div className="p-3">
          <Button className="btn btn-info btn-hover-border-shade-amount m-1" onClick={handleShowQuiz}>Quiz</Button>
          <Button className="btn btn-info btn-hover-border-shade-amount m-1" onClick={handleShowAnswers}>Quiz Review</Button>
          <Button className="btn btn-info btn-hover-border-shade-amount m-1" onClick={handleFinish}>Finish</Button>
        </div>
      </Container>    
    );
}

export default Lab5Layout;