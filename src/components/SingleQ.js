import React from 'react'
import { nanoid } from 'nanoid'

const SingleQ = ({ singleQ }) => {
  const answerOptions = singleQ.incorrect_answers
    .concat(singleQ.correct_answer)
    .map((item) => (
      <p className="group--single" key={nanoid()}>
        {item}
      </p>
    ))

  return (
    <div className="single--container">
      <h2
        className="single--question"
        dangerouslySetInnerHTML={{
          __html: `${singleQ.question}`,
        }}
      />
      <div className="group--options"></div>
      {answerOptions}
    </div>
  )
}

export default SingleQ
