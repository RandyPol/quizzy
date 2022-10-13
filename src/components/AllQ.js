import React from 'react'
import SingleQ from './SingleQ'
import { nanoid } from 'nanoid'

const AllQ = ({ allQ }) => {
  const allQuestions = allQ.map((theQ) => {
    return <SingleQ key={nanoid()} singleQ={theQ} />
  })
  return <div className="questions--container">{allQuestions}</div>
}

export default AllQ
