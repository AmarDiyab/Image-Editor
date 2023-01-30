import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import './ImageSide.css'

const ImageSide = () => {

    const [image, setImage] = useState('https://source.unsplash.com/random/&1');

    const changeImage = () => {
        setImage(image + 1);
    }

    return (
        <div className='ImageSide p-4'>
            <div className='row'>
                <div className='col'>
                    <input type="text" defaultValue="Untitled image" className='ImageName' />
                </div>
                <div className="col">
                    <Link to={'/'}>
                        <button className='NewButton' onClick={changeImage}>New </button>
                    </Link>
                </div>
            </div>
            <div className='ImagePreview'>
                <img src={image} image alt="blank" className='BlankImage' id='image'/>
            </div>
        </div>
    )
}

export default ImageSide