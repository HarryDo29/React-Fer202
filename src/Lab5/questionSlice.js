import { createSlice } from "@reduxjs/toolkit";
import mockQuestions from "./mockQuestion";

const initialState = {
    currentQuesIndex: 0,
    questions: mockQuestions,
    answer: [],
    score: 0,
    isFinished: false,
};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        // Define your reducers here
        // firstQuestion:
        firstQues: (state) => {
            state.currentQuesIndex = 0;
        },
        // nextQuestion:
        nextQues: (state) => {
            if (state.currentQuesIndex < state.questions.length - 1) {
                state.currentQuesIndex += 1;
            }
        },
        // prevQuestion:
        prevQues: (state) => {
            if (state.currentQuesIndex > 0) {
                state.currentQuesIndex -= 1;
            }
        },
        // lastQuestion:
        lastQues: (state) => {
            state.currentQuesIndex = state.questions.length - 1;
        },
        // submitAnswer
        submitAns: (state, action) => {
            const { questionIndex, selectedOption } = action.payload;
            state.answer[questionIndex] = { selectedOption };

            // Recalculate score
            let score = 0;
            state.answer.forEach((ans, index) => {
                if (ans.selectedOption === state.questions[index].correctAnswer) {
                    score += 1;
                }
            });
            state.score = score;
        },
        // finishQuiz
        finish: (state) => {
            state.isFinished = true;
        }
    },
})

export const { firstQues, nextQues, prevQues, lastQues, submitAns, finish } = questionSlice.actions;
export default questionSlice;
// export default questionSlice.reducer;