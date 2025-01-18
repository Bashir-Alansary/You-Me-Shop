import React, { useState } from 'react'
import "./Reviews.scss"
import data from "./data";
import { IoMdStar} from "react-icons/io";
import reviewImg from "../../../Assets/images/user2.jpg";
import Stars from './Stars';

interface Data {
    id: number;
    name: string;
    img: string;
    date: string;
    rate: number;
    content: string;
}

const Reviews = () => {

const[reviews, setReviews] = useState<Data[]>(data);

  const[inputVals, setInputVals] = useState({
    content: '',
    name: '',
    email: '',
  });

  const{content, name, email} = inputVals;
  
  /* for Stars comp */
  const[clickRate, setClickRate] = useState<number>(0);
  const[starColor, setStarColor] = useState<boolean>(true);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputVals({
      ...inputVals,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const date = new Date();
    const newVal:Data = {
      ...inputVals,
      id:Math.random(),
      img:reviewImg,
      date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
      rate: clickRate,
    }
    setReviews([...reviews, newVal]);
    setInputVals({content: '', name: '', email: ''});
    setClickRate(0);
    setStarColor(false);
  }
  
  console.log(clickRate);
  

  return (
    <div className='reviews'>
      <div className='content flx'>
          <div className='list'>
            {
              reviews.map(item => {
                  const {id, name, img, content, rate, date} = item;
                  return(
                      <div key={id} className='review'>
                          <div className='imgbx'>
                              <img src={img} />
                          </div>
                          <div className='details'>
                              <ul className='rate'>
                                  {
                                      [...Array(5)].map((star, index) => {
                                          return(
                                              <li key={Math.random()} className='star'>
                                                  <IoMdStar color={index <= rate - 1 ? "#ffcd00" : "#999"} />
                                              </li>
                                          )
                                      })
                                  }
                              </ul>
                              <h4>{name}</h4>
                              <span className='date'>{date}</span>
                              <p>{content}</p>
                          </div>
                      </div>
                  )
              })
            }
          </div>

        <form onSubmit={handleSubmit}>
          <Stars 
            clickRate={clickRate} 
            setClickRate={setClickRate} 
            starColor={starColor} 
            setStarColor={setStarColor} 
          />
            <textarea name='content' placeholder='write review' value={content} onChange={(handleChange)}></textarea>
            <input type="text" name="name" placeholder='write name' value={name} onChange={handleChange}/>
            <input type="email" name="email" placeholder='write email' value={email} onChange={handleChange}/>
            <button className='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Reviews;