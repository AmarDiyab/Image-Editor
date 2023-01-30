import React from 'react'
import './FilterSide.css'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import { useDispatch } from 'react-redux';
import { text } from '../../redux/action';

const FilterSide = () => {

    const dispatch = useDispatch();

    const handleOverlay=(e)=>{
        dispatch(text(e.target.value));
       }
   

    //  Reset
    const handleReset = () => {
        let brightness = document.getElementById('brightness');
        let brightnessOutput = document.getElementById('brightnessValue')
        brightnessOutput.value = 100
        brightness.value = 100

        let saturate = document.getElementById('saturate');
        let saturateOutput = document.getElementById('saturateValue')
        saturateOutput.value = 100
        saturate.value = 100

        let contrast = document.getElementById('contrast');
        let contrastOutput = document.getElementById('contrastValue')
        contrastOutput.value = 100
        contrast.value = 100

        let sepia = document.getElementById('sepia');
        let sepiaOutput = document.getElementById('sepiaValue')
        sepiaOutput.value = 0
        sepia.value = 0

        let BnW = document.getElementById('bnw');
        let BnWOutput = document.getElementById('bnwValue')
        BnWOutput.value = 0
        BnW.value = 0

        let text = document.getElementById('ImageOverlay')
        let textOutput = document.getElementById('ImageText')
        text.value = ""
        textOutput.innerHTML = ""

        const img = document.getElementById('image');
        img.style.filter = "brightness(100%) saturate(100%) contrast(100%) sepia(0%) grayscale(0%)"
    }

    //  Filters
    const handleBrightness = () => {
        let brightness = document.getElementById('brightness');
        let output = document.getElementById('brightnessValue')
        output.value = brightness.value

        const img = document.getElementById('image')
        img.style.filter = "brightness(" + brightness.value + "%)";
    }

    const handleSaturate = () => {
        let saturate = document.getElementById('saturate');
        let output = document.getElementById('saturateValue')
        output.value = saturate.value

        const img = document.getElementById('image');
        img.style.filter = "saturate(" + saturate.value + "%)";
    }

    const handleContrast = () => {
        let contrast = document.getElementById('contrast');
        let output = document.getElementById('contrastValue')
        output.value = contrast.value

        const img = document.getElementById('image');
        img.style.filter = "contrast(" + contrast.value + "%)";
    }

    const handleSepia = () => {
        let sepia = document.getElementById('sepia');
        let output = document.getElementById('sepiaValue')
        output.value = sepia.value

        const img = document.getElementById('image');
        img.style.filter = "sepia(" + sepia.value + "%)";
    }

    const handleBnW = () => {
        let BnW = document.getElementById('bnw');
        let output = document.getElementById('bnwValue')
        output.value = BnW.value

        const img = document.getElementById('image');
        img.style.filter = "grayscale(" + BnW.value + "%)";
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
                                value={100}
                                onChange={handleBrightness} />
                        </div>
                        <div className='col'>
                            <input type="text" value="100" id='brightnessValue' className='SliderValue' disabled="true" />
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
                                value={100}
                                onChange={handleSaturate} />
                        </div>
                        <div className='col'>
                            <input type="text" value="100" id='saturateValue' className='SliderValue' disabled="true" />
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
                                value={100}
                                onChange={handleContrast} />
                        </div>
                        <div className='col'>
                            <input type="text" value="100" id='contrastValue' className='SliderValue' disabled="true" />
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
                                value={0}
                                onChange={handleSepia} />
                        </div>
                        <div className='col'>
                            <input type="text" value="0" id='sepiaValue' className='SliderValue' disabled="true" />
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
                                value={0}
                                onChange={handleBnW} />
                        </div>
                        <div className='col'>
                            <input type="text" value="0" id='bnwValue' className='SliderValue' disabled="true" />
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
                    <input type="text" placeholder=' Image Overlay'  className='ImageOverlay' id='ImageOverlay'
                    onChange={handleOverlay} />
                </div>
            </div>


        </div>
    )
}

export default FilterSide