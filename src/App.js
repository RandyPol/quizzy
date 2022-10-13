import React from 'react'
import AllQ from './components/AllQ'
import './App.css'
import blueBack from './images/blobsBlue.png'
import yellowBack from './images/blobYellow.png'
// import quizBlue from './images/quizBlue.png'
// import quizYellow from './images/quizYellow.png'

function App() {
  const [listOfQuestions, setListOfQuestions] = React.useState([])
  const [start, setStart] = React.useState(true)

  React.useEffect(() => {
    const pullListOfQuestions = async () => {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&category=9'
      )
      const data = await response.json()
      setListOfQuestions(data.results)
    }

    pullListOfQuestions()
  }, [])
  const startQuiz = () => setStart((prev) => !prev)

  return (
    <>
      {start ? (
        <div className="container--start">
          <h1 className="start--title">Quizzical</h1>
          <p className="start--summary">Are you ready to start?</p>
          <button className="start--button" onClick={startQuiz}>
            Start quiz
          </button>
          <img
            className="start--img img-blue"
            src={blueBack}
            alt="blobBLue"
          ></img>
          <img
            className="start--img img-yellow"
            src={yellowBack}
            alt="blobYellow"
          ></img>
        </div>
      ) : (
        <div className="quiz-container">
          <AllQ allQ={listOfQuestions} />
          <img
            className="quizImage quiz-image-blue"
            src={blueBack}
            alt="blueima"
          />
          <img
            className="quizImage quiz-image-yellow"
            src={yellowBack}
            alt="yellowima"
          />
          <button className='quiz--button'>Check Answers</button>
        </div>
      )}
    </>
  )
}

export default App
