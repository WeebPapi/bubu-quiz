import { IAnswer } from "./interfaces/answer.interface";
import q1 from './assets/q1.jpg';
import q2 from './assets/q2.jpg';
import q3 from './assets/q3.png';


export const questions : {image: string, question: string, answers: IAnswer[]}[] = [{
    question: "Who are u?",
    image: q1,
    answers: [{value: 'bubu', isCorrect: false}, {value: 'pipi', isCorrect: true, nextQuestion: 2}, {value: 'bubububu', isCorrect: false}]
},
{question: "What is this called?", image: q2, answers: [{value: 'phone', isCorrect:false}, {value: 'bubuphone', isCorrect: true, nextQuestion: 3}, {value: 'Iphone', isCorrect: false}]},
{question: "Will u be my valentine?", image: q3, answers: [{value: 'yes', isCorrect: true, nextQuestion: 4}, {value: 'yes', isCorrect: true, nextQuestion: 4}, {value: 'yes', isCorrect: true, nextQuestion: 4}]}]