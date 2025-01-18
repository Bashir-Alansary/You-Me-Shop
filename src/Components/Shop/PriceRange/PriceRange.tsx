import React, { FC, useRef, useEffect } from 'react'
import "./PriceRange.scss"
import { InputEventType, RangeType } from '../../Assets/types';

interface Props {
    range: RangeType,
    setRange: React.Dispatch<React.SetStateAction<RangeType>>,
    filterPrices: (e: InputEventType) => void,
    togglePrice: boolean,
}

const PriceRange:FC<Props> = ({range, setRange, filterPrices, togglePrice}) => {

    const sliderBar = useRef<HTMLDivElement | null>(null);
    const minRangeInputRef = useRef<HTMLInputElement | null>(null);
    const maxRangeInputRef = useRef<HTMLInputElement | null>(null);

    const priceGap = 40;
    const minRangeInput = minRangeInputRef.current;
    const maxRangeInput = maxRangeInputRef.current;

    const handleRange = (e:InputEventType) => {
        
        const minRange = minRangeInput?.value !== undefined ? parseInt(minRangeInput?.value) : 0;
        const maxRange = maxRangeInput?.value !== undefined ? parseInt(maxRangeInput?.value) : 0;
        
        if (maxRange - minRange < priceGap) {
            if (e.target === minRangeInput) {
                minRangeInput.value = (maxRange - priceGap).toString();
            } else {
                if (maxRangeInput !== null) {
                    maxRangeInput.value = (minRange + priceGap).toString();
                }
            }
        } else {
            setRange({minRange, maxRange});
            if (sliderBar.current !== null) {
                const minRangeInputMax = minRangeInput?.max !== undefined ? parseInt(minRangeInput?.max) : 0;
                const maxRangeInputMax = maxRangeInput?.max !== undefined ? parseInt(maxRangeInput?.max) : 0;
                sliderBar.current.style.left = (minRange / minRangeInputMax) * 100 + "%";
                sliderBar.current.style.right = 100 - (maxRange / maxRangeInputMax) * 100 + "%";
            }
        }
        filterPrices(e);
    }

    useEffect(()=> {
        if (range.minRange === 0 && range.maxRange === 300) {
            if (minRangeInput !== null && maxRangeInput !== null && sliderBar.current !== null) {
                minRangeInput.value = "0";
                maxRangeInput.value = "300";
                sliderBar.current.style.left = "0";
                sliderBar.current.style.right = "0";
            }
        }
    })

    return (
        <div className={togglePrice? "price-range show" : "price-range hide"}>
            <div className='slider'>
                <div className='bar' ref={sliderBar}></div>
                <div className='range-inputs'>

                    <input 
                    type="range" 
                    name="minRange" 
                    min="0" 
                    max="300" 
                    step="2"
                    defaultValue={range.minRange} 
                    ref={minRangeInputRef}
                    onChange={handleRange}
                    />

                    <input 
                    type="range" 
                    name="maxRange" 
                    min="0" 
                    max="300" 
                    step="2"
                    defaultValue={range.maxRange} 
                    ref={maxRangeInputRef}
                    onChange={handleRange}
                    />

                </div>
            </div>
            <div className='num-inputs flx'>
                <div className='num-input'>
                    <label>Min price</label>
                    <input type="number" name='maxNum' disabled value={range.minRange}/>
                </div>
                <div className='num-input'>
                    <label>Max price</label>
                    <input type="number" name='minNum' disabled value={range.maxRange}/>
                </div>
            </div>
        </div>
    )
}

export default PriceRange;