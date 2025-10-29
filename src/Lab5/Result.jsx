import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Result = () => {
  const { questions, answer, score , isFinished } = useSelector((state) => state.questions);

  console.log(answer);
  return (

    <Container className="my-4">
      <div className="bg-black flex justify-content-center align-items-center p-3 rounded">
        <h2 className="text-center text-white">Quiz Review</h2>
      </div>

      {isFinished ? (
        <>
          <p>Your Score: {score} / {questions.length}</p>

          {questions.map((ques, index) => (
            <div key={index} className="mb-4 p-3 border rounded" 
            style={{backgroundColor: answer[index]?.selectedOption === ques.correctAnswer ? '#d4edda' : '#f8d7da'}}>
              <h5>Question {index + 1}: {ques.question}</h5>
              <ul>
                {ques.options.map((option, optIndex) => (
                  <div key={optIndex} className="p-1">
                        <input type="radio" 
                            name={`quiz-option-${index}`}
                            checked={optIndex === answer[index]?.selectedOption}
                            onChange={() => {}}
                        />
                        {option}
                  </div>
                ))}
              </ul>
              <div className="bg-secondary bg-opacity-75 rounded p-2">
                <b>Right Answer is: </b> {ques.options[ques.correctAnswer]}
              </div>
            </div>
          ))}

          <div className="d-flex flex-wrap justify-content-center align-items-center m-0 p-0">
            {questions.map((ques, index) => (
            <div key={index} className="p-2 m-1 rounded"
            style={{backgroundColor: answer[index]?.selectedOption === ques.correctAnswer ? '#d4edda' : '#f8d7da'}}>
              <u>Question No</u><br/>
              {index + 1}<br/>
              <u>{answer[index]?.selectedOption !== undefined ? "Answer" : "No Answer"}</u>
            </div>
          ))}
          </div>
        </>
      ):(
        <b>Please finish the quiz to see the results.</b>
      )}
    </Container>
  )
};

export default Result;