import QuestionCard from "../components/Questions/QuestionCard"
import { questions } from "../data"

const ThirdQ = () => {
    const question = questions[2];
  return <div>
    <QuestionCard question={question.question} answers={question.answers} image={question.image}/>
  </div>
}

export default ThirdQ
