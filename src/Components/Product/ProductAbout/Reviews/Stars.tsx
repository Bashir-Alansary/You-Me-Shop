import React, { FC, useState } from 'react'
import { IoMdStar} from "react-icons/io";

interface Props {
    clickRate: number,
    starColor: boolean,
    setClickRate: React.Dispatch<React.SetStateAction<number>>,
    setStarColor: React.Dispatch<React.SetStateAction<boolean>>,
}

const Stars:FC<Props> = ({clickRate, setClickRate, starColor, setStarColor }) => {

    const[hoverRate, setHoverRate] = useState<number>(0);

  return (
    <div className='stars'>
        {
            [...Array(5)].map((star, index) => {
                const val:number = index + 1;
                return(
                    <button
                    key={Math.random()}
                    className='star'
                    onClick={()=> setClickRate(val)}
                    onMouseEnter={() => {setHoverRate(val); setStarColor(true)}}
                    onMouseLeave={() => setHoverRate(clickRate)}
                    >
                        <IoMdStar
                        className='star'
                        color = {(val <= (hoverRate || clickRate)) && starColor ? "#ffcd00" : "#999"}
                        />
                    </button>
                )
            })
        }
    </div>
  )
}

export default Stars;
