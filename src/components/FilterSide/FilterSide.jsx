import React, { useState } from 'react'
import './FilterSide.css'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import { useDispatch } from 'react-redux';
import { text } from '../../redux/action';

const FilterSide = () => {

    const dispatch = useDispatch();

    const handleOverlay = (e) => {
        dispatch(text(e.target.value));
    }


    //  Reset
    const handleReset = () => {
        setBrightness(100)
        setSaturate(100)
        setContrast(100)
        setSepia(0)
        setGrayscale(0)

        let text = document.getElementById('ImageOverlay')
        let textOutput = document.getElementById('ImageText')
        text.value = ""
        textOutput.innerHTML = ""

        const img = document.getElementById('image');
        img.style.filter = "brightness(100%) saturate(100%) contrast(100%) sepia(0%) grayscale(0%)"
    }

    //  Filters

    const [brightness, setBrightness] = useState(100);
    const [saturate, setSaturate] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [sepia, setSepia] = useState(0);
    const [grayscale, setGrayscale] = useState(0);

    const filters = `brightness(${brightness}%) saturate(${saturate}%) contrast(${contrast}%)
                     sepia(${sepia}%) grayscale(${grayscale}%)`;

    const handleBrightness = (e) => {
        setBrightness(e.target.value)
        const img = document.getElementById('image');
        img.style.filter = filters;
    }

    const handleSaturate = (e) => {
        setSaturate(e.target.value)
        const img = document.getElementById('image');
        img.style.filter = filters;
    }

    const handleContrast = (e) => {
        setContrast(e.target.value)
        const img = document.getElementById('image');
        img.style.filter = filters;
    }

    const handleSepia = (e) => {
        setSepia(e.target.value)
        const img = document.getElementById('image');
        img.style.filter = filters;
    }

    const handleBnW = (e) => {
        setGrayscale(e.target.value)
        const img = document.getElementById('image');
        img.style.filter = filters;
    }

    return (
        <div className='FilterSide p-4 '>
            <div className='row'>
                <div className='col'>
                    <AutoFixHighIcon style={{ fontSize: '30' }} />
                    <span style={{ fontWeight: '800', marginLeft: '5px' }}> Filters </span>
                </div>
                <div className='col'>
                    <span className='Reset' style={{ cursor: 'pointer' }} onClick={handleReset}>Reset</span>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col'>
                    <span className='filterName'>Brightness</span>

                    <div className='Slider row'>
                        <div className='col'>
                            <input type="range" className='form-range' id='brightness'
                                min={0}
                                max={200}
                                value={brightness}
                                onChange={handleBrightness}
                                onClick={handleBrightness}
                                />
                        </div>
                        <div className='col'>
                            <input type="text" value={brightness} id='brightnessValue' className='SliderValue' disabled="true" />
                        </div>
                    </div>

                </div>


                <div className="col">
                    <span className='filterName'>Saturate</span>
                    <div className='Slider row'>
                        <div className='col'>
                            <input type="range" className='form-range' id='saturate'
                                min={0}
                                max={200}
                                value={saturate}
                                onChange={handleSaturate}
                                onClick={handleSaturate}
                                />
                        </div>
                        <div className='col'>
                            <input type="text" value={saturate} id='saturateValue' className='SliderValue' disabled="true" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col'>
                    <span className='filterName'>Contrast</span>
                    <div className='Slider row'>
                        <div className='col'>
                            <input type="range" className='form-range' id='contrast'
                                min={0}
                                max={200}
                                value={contrast}
                                onChange={handleContrast}
                                onClick={handleContrast}
                                />
                        </div>
                        <div className='col'>
                            <input type="text" value={contrast} id='contrastValue' className='SliderValue' disabled="true" />
                        </div>
                    </div>
                </div>

                <div className="col">
                    <span className='filterName'>Sepia</span>
                    <div className='Slider row'>
                        <div className='col'>
                            <input type="range" className='form-range' id='sepia'
                                min={0}
                                max={100}
                                value={sepia}
                                onChange={handleSepia}
                                onClick={handleSepia}
                                />
                        </div>
                        <div className='col'>
                            <input type="text" value={sepia} id='sepiaValue' className='SliderValue' disabled="true" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col'>
                    <span className='filterName'>Black/White</span>
                    <div className='Slider row'>
                        <div className='col'>
                            <input type="range" className='form-range' id='bnw'
                                min={0}
                                max={100}
                                value={grayscale}
                                onChange={handleBnW}
                                onClick={handleBnW}
                                 />
                        </div>
                        <div className='col'>
                            <input type="text" value={grayscale} id='bnwValue' className='SliderValue' disabled="true" />
                        </div>
                    </div>
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
                <div className="col">
                    <input type="text" placeholder=' Image Overlay' className='ImageOverlay' id='ImageOverlay'
                        onChange={handleOverlay} />
                </div>
            </div>


        </div>
    )
}

export default FilterSide