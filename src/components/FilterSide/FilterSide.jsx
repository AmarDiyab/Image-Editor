import React from 'react'
import './FilterSide.css'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import Slider from '../Slider/Slider';


const FilterSide = () => {

    return (
        <div className='FilterSide p-4 '>
            <div className='row'>
                <div className='col'>
                    <AutoFixHighIcon style={{ fontSize: '30' }} />
                    <span style={{ fontWeight: '800', marginLeft: '5px' }}> Filters </span>
                </div>
                <div className='col'>
                    <span className='Reset'>Reset</span>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col'>
                    <span className='filterName'>Brightness</span>
                    <Slider />
                </div>
                <div className="col">
                    <span className='filterName'>Saturate</span>
                    <Slider />
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col'>
                    <span className='filterName'>Contrast</span>
                    <Slider />
                </div>
                <div className="col">
                    <span className='filterName'>Sepia</span>
                    <Slider />
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col'>
                    <span className='filterName'>Black White</span>
                    <Slider />
                </div>
                <div className="col">

                </div>
            </div>

            <div className="row mt-5">
                <div className='col'>
                    <ClosedCaptionIcon style={{ fontSize: '30' }} />
                    <span style={{ fontWeight: '800', marginLeft: '5px' }}> Text </span>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col'>
                    <span className='filterName'>Content</span>
                </div>
            </div>
            <div className="row mt-2">
                <input type="text" defaultValue='Image Overlay' className='ImageOverlay' />
            </div>


        </div>
    )
}

export default FilterSide