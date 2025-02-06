import React from "react"
import QuestionCard from "../components/Questions/QuestionCard"
import { questions } from "../data"

const SecondQ = () => {
    const question = questions[1];
  return <div>
    <QuestionCard question={question.question} answers={question.answers} image={question.image}/>
  </div>
}

export default SecondQ
