import React, { FC } from 'react'

interface Props {
  desc: string,
}

const Description:FC<Props> = ({desc}) => {
  return (
    <div className='desc'>{desc}</div>
  )
}

export default Description;
