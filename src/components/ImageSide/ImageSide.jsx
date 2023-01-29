import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import './ImageSide.css'
import blankImage from '../../img/blank-image-icon.jpeg';

const ImageSide = () => {

    const setImage = () => {
        let img = document.getElementById('image');
        img.src = 'https://source.unsplash.com/random'
    }

    return (
        <div className='ImageSide p-4'>
            <div className='row'>
                <div className='col'>
                    <input type="text" defaultValue="Untitled image" className='ImageName' />
                </div>
                <div className="col">
                    <Link to={'/'}>
                        <button className='NewButton' onClick={()=> setImage()}>New </button>
                    </Link>
                </div>
            </div>
            <div className='ImagePreview'>
                <img src={blankImage} image alt="blank" className='BlankImage' id='image'/>
            </div>
        </div>
    )
}

export default ImageSide