import React, { FC } from 'react'
import { InfoType } from '../../Assets/types';

interface Props {
  info: InfoType,
}

const MoreInfo:FC<Props> = ({info}) => {

  const {style, composition ,weight, dimensions} = info;

  return (
    <div className='more-info'>
      <div className='for-table'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">style</th>
            <th scope="col">composition</th>
            <th scope="col">weight</th>
            <th scope="col">dimensions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='style'>{style}</td>
            <td className='composition'>{composition}</td>
            <td className='weight'>{weight}</td>
            <td className='dimensions'>{dimensions}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default MoreInfo;
