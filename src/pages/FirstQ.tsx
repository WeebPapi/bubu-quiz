import QuestionCard from "../components/Questions/QuestionCard"
import { questions } from "../data"

const FirstQ = () => {
  const question = questions[0];
  return <div>
    <QuestionCard question={question.question} answers={question.answers} image={question.image}/>
  </div>
}

export default FirstQ
