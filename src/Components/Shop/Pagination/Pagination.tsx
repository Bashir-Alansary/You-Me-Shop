import React, { FC } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Pagination.css";

interface Props {
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    paginationPages: number,
}

const Pagination:FC<Props> = ({current, setCurrent, paginationPages}) => {

    const handleChevronLeft = (): void => {
        if (current > 1) {
            setCurrent(current - 1);
        }
    }

    const handleChevronRight = (): void => {
        if (current < paginationPages) {
            setCurrent(current + 1);
        }
    }

    return (
        <div className='pagination'>
            {paginationPages !== 0 ? <button 
            className={current === 1 ? "paginate-btn chevron disabled" : "paginate-btn chevron"} 
            onClick={handleChevronLeft}
            >
            <FaChevronLeft />
            </button>
            : null
            }
            {
                Array.from({length:paginationPages}, (v, i) => i + 1).map((page, i) => {
                    if (page < 3 ) {
                        return (
                            <button 
                            className={current === page ? 'paginate-btn active' : 'paginate-btn'} 
                            onClick={()=> setCurrent(page)}
                            >
                            {page}
                            </button>
                        ) 
                    }
                    if (current === page ) {
                        return (
                            <button 
                            className={current === page ? 'paginate-btn active' : 'paginate-btn'} 
                            onClick={()=> setCurrent(page)}
                            >
                            {page}
                            </button>
                        ) 
                    }
                    if (page === paginationPages) {
                        return (
                            <button 
                            className={current === page ? 'paginate-btn active' : 'paginate-btn'} 
                            onClick={()=> setCurrent(page)}
                            >
                            {page}
                            </button>
                        )
                    }

                    return (
                        <span className='dots'>.</span>
                    ) 
                    
                })
            }
            {paginationPages !== 0 ? <button 
            className={current === paginationPages? "paginate-btn chevron disabled" : "paginate-btn chevron"}
            onClick={handleChevronRight}
            >
            <FaChevronRight />
            </button>
            : null
            }
        </div>
    )
}

export default Pagination;