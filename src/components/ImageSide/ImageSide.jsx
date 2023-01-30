import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom'
import './ImageSide.css'
import Draggable from 'react-draggable';

const ImageSide = () => {

    const [image, setImage] = useState('https://source.unsplash.com/random/&1');

    const changeImage = () => {
        setImage(image + 1);
    }

    const custom_style = useSelector((store) => store);


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
                <img src={image} alt="blank" className='BlankImage' id='image' />
                <Draggable>
                    <h1 className='TextOverlay' id="typed_text">{custom_style.text_value}</h1>
                </Draggable>
            </div>
        </div>
    )
}

export default ImageSide