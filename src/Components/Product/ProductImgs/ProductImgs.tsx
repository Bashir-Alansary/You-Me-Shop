import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { ProductType } from '../../Assets/types'
import "./ProductImgs.scss"

interface Position {
    x: number,
    y: number,
}

interface Props {
    product: ProductType,
}

export const ProductImgs:FC<Props> = ({product}) => {

    const {bigImgs} = product;
    const [mainImg, setMainImg] = useState<string | undefined>(bigImgs[0]);
    const [showZoomImg, setShowZoomImg] = useState<boolean>(false);
    const [zoomImgPosition, setZoomImgPosition] = useState<Position>({x: 0, y: 0});
    const [cursorPosition, setCursorPosition] = useState<Position>({x: 0, y: 0});

    const showMainImg = (index:number) : void => {
        const newMainImg = bigImgs.find((img:string, i:number) => i === index);
        setMainImg(newMainImg);
    }

    const handleZoomImg = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) : void => {
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
        const x:number = ((e.pageX - left) / width) * 100;
        const y:number = ((e.pageY - top) / height) * 100;
        setZoomImgPosition({x, y});
        setCursorPosition({x: e.pageX - left, y: e.pageY-top});
    }


    useEffect(() => {
        setMainImg(bigImgs[0]);
    }, [product]);

  return (
    <div className='product-imgs flx'>
        <ul className='imgs-btns'>
            {
                bigImgs.map((item, index) => {
                    return(
                        <li className='img-btn'>
                            <button onClick={()=> showMainImg(index)}>
                                <img src = {item} />
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <div className='main-img'>
            <img
            src = {mainImg}
            onMouseEnter = {()=>{setShowZoomImg(true); window.scrollTo(0,0);}}
            onMouseLeave = {()=>setShowZoomImg(false)}
            onMouseMove = {handleZoomImg}
            onClick={(event)=> {}}
            />
            {showZoomImg && <div
            className = "zoom-img"
            style = {{
                left: `${cursorPosition.x - 120}px`,
                top: `${cursorPosition.y - 120}px`,
                backgroundImage: `url(${mainImg})`,
                backgroundPosition: `${zoomImgPosition.x}% ${zoomImgPosition.y}%`,
            }}
            ></div>
            }
        </div>
    </div>
  )
}
