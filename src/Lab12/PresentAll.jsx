import Presentation from "./Presentation";
import orchids from "./ListOfOrchilds"; 
import { Container, Button } from 'react-bootstrap';
import { useState } from "react";

export default function PresentAll(){
    const [mode, setMode] = useState(true);

    return(
        <Container style={{width: '100%', padding: 0}} fluid>
            <div className={
                mode ? "bg-light text-danger w-100" : "bg-dark text-danger w-100"
            }>
                <div className="position-relative d-flex align-items-center" style={{ height: '80px' }}>
                    <Button
                        variant="primary"
                        onClick={() => setMode(!mode)}
                        className="position-absolute start-0"
                    >
                        Theme
                    </Button>

                    <h1 className="mx-auto">List of Orchids</h1>
                </div>
                <div className="row row-cols-4">
                    {orchids.map(orchid => (
                        <div className="col" key={orchid.id}>
                            <Presentation orchid={orchid} />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}