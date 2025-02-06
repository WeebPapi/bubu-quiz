import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

interface AnswerButtonProps {
    value: string
    isCorrect: boolean
    nextQuestion?: number;
}

const AnswerButton:React.FC<AnswerButtonProps> = ({value, isCorrect, nextQuestion}) => {
    const navigate = useNavigate();
    const [clicked, setClicked] = React.useState(false);
    useEffect(() => {
        if (clicked) {
            window.alert("Try again u pipi creature");
        }
    }, [clicked]);
  return (
    <Button variant='contained' sx={{ mt: 2, backgroundColor: 'pink', color: 'black', ':hover': { backgroundColor: 'pink', color: 'black' }, fontSize: 12, width: 80 } } onClick={() => {

        if (isCorrect) {
            navigate(`/${nextQuestion}`)
        }
        else {
            setClicked(true);
        }
    }}>{value}</Button>
  )
}

export default AnswerButton