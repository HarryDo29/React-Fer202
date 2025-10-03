import Presentation from "./Presentation";
import { orchids } from "./ListOfOrchilds"; 
import { Navbar, Container, Button } from 'react-bootstrap';
import { useState } from "react";

export default function PresentAll(){
    const [mode, setMode] = useState(true);

    return(
        <div className={
            mode ? "bg-light text-danger" : "bg-dark text-danger"
        }>
                <Button variant="primary" onClick={() => setMode(!mode)}>
                    Theme
                </Button> 
                <h1 className="d-flex align-items-center justify-content-center ">List of Orchids</h1>
                <div className="row row-cols-4">
                    {orchids.map(orchid => (
                        <div className="col" key={orchid.id}>
                            <Presentation orchid={orchid} />
                        </div>
                    ))}
                </div>
            
        </div>
    );
}