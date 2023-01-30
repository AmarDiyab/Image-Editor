import React from 'react'
import './Slider.css';


const Slider = (min, max, property, value) => {
    return (
        <div className='Slider row'>
            <div className='col'>
                <input type="range" className='form-range' 
                    min={min}
                    max={max}
                    value={value} />
            </div>
            <div className='col'>
                <input type="text" value="100" className='SliderValue' />
            </div>
        </div>
    )
}

export default Slider