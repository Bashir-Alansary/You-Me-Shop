import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import "./BlankPage.scss"
import { closeAndGoUp } from '../Redux/Slices/globalSlice';

interface Props {
  name: string,
  img: string,
}

const BlankPage:FC<Props> = ({name, img}) => {

  const {showSubcart} = useSelector((state:RootState) => state.global);
  const dispatch = useDispatch();

  const closeUp = (): void => {dispatch(closeAndGoUp());}

  return (
    <div className='blank'>
        <img src={img} />
        <h2>Your {name} is empty</h2>
        <Link className='link special-btn' to="/shop" onClick={closeUp}>continue shopping</Link>
        <h2>Have an account?</h2>
        <div className='blank-login'>
            <Link to="/login" onClick={closeUp}>login</Link>
            <span> to check out faster.</span>
        </div>
    </div>
  )
}

export default BlankPage;
