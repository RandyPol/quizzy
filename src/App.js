import React from 'react'
import './App.css'
import blueBack from './images/blobsBlue.png'
import yellowBack from './images/blobYellow.png'
function App() {
  const [start, setStart] = React.useState(true)

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
        <p>KLK</p>
      )}
    </>
  )
}

export default App
