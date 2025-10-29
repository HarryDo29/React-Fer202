import { useEffect, useState } from "react";
import {  Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { firstQues, nextQues, prevQues, lastQues, submitAns } from "./questionSlice";

const Quiz = () => {
    const dispatch = useDispatch();
    const { currentQuesIndex, questions, answer , score} = useSelector((state) => state.questions);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const curQues = questions[currentQuesIndex];

    useEffect(() => {
        // Reset selected answer when question changes        
        console.log('answer', answer);
        console.log('score', score);
        setSelectedAnswer(null);
    }, [currentQuesIndex, answer, score]);

    const handleAnswerSelect = (index) => {
        console.log(index);
        setSelectedAnswer(index);
    };

    const handleFirst = () => {
        if (selectedAnswer !== null) {
            dispatch(submitAns({ questionIndex: currentQuesIndex, selectedOption: selectedAnswer }));
        }
        dispatch(firstQues());
    }

    const handleNext = () => {
        if (selectedAnswer !== null) {
            dispatch(submitAns({ questionIndex: currentQuesIndex, selectedOption: selectedAnswer }));
        }
        dispatch(nextQues());
    };

    const handlePrev = () => {
        if (selectedAnswer !== null) {
            dispatch(submitAns({ questionIndex: currentQuesIndex, selectedOption: selectedAnswer }));
        }
        dispatch(prevQues());
    };

    const handleLast = () => {
        if (selectedAnswer !== null) {
            dispatch(submitAns({ questionIndex: currentQuesIndex, selectedOption: selectedAnswer }));
        }
        dispatch(lastQues());
    };

    return (
        <Container className="my-4">
            <div className="bg-black flex justify-content-center align-items-center p-3 mb-4 rounded">
                <h2 className="text-center text-white">JavaScript Question</h2>
            </div>

            <div className="w-full">
                <div className="flex justify-content-center align-items-center mb-4">
                    <b>Question {currentQuesIndex + 1}: </b>
                    {curQues.question}
                </div>

                <div className='row row-cols-2 g-3'>
                    {curQues.options.map((option, index) => (
                        <div key={index} className="col">
                            <div className="bg-info bg-opacity-50 rounded p-3">
                                <input type="radio" 
                                    name="quiz-option" 
                                    checked={selectedAnswer === index}
                                    onChange={() => handleAnswerSelect(index)} />
                                {option}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-4 gap-2 w-60 mx-auto">
                <Button className="btn btn-primary btn-hover-bg-shade-amount w-30" onClick={handleFirst}>First</Button>
                <Button className="btn btn-primary btn-hover-bg-shade-amount w-30" onClick={handlePrev}>Prev</Button>
                <Button className="btn btn-primary btn-hover-bg-shade-amount w-30" onClick={handleNext}>Next</Button>
                <Button className="btn btn-primary btn-hover-bg-shade-amount w-30" onClick={handleLast}>Last</Button>
            </div>

            
        </Container>
    );
}

export default Quiz;