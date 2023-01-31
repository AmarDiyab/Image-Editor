import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom'
import './ImageSide.css'
import Draggable from 'react-draggable';

const ImageSide = () => {

    //  Add Image
    const [image, setImage] = useState('https://source.unsplash.com/random/&1');

    const changeImage = () => {
        setImage(image + 1);
    }

    //  Image Overlay Text
    const custom_style = useSelector((store) => store);

    //  Image Title
    const [title, setTitle] = useState('Untitled image')

    const handleTitle = (e) => {
        setTitle(e.target.value)
        // image.title = e.target.value;
        console.log(image)
    }

    return (
        <div className='ImageSide p-4'>
            <div className='row'>
                <div className='col'>
                    <input type="text" value={title} onChange={handleTitle} className='ImageName' />
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
                    <h1 className='TextOverlay' id="ImageText">{custom_style.text_value}</h1>
                </Draggable>
            </div>

            <div>
                <div className='row'>
                    <div className='col mt-4'>
                        <h5>Recent image</h5>
                    </div>
                    <div className='col mt-1'>
                        <button className='NewButton'>Save</button>
                    </div>
                </div>
                <div className="row">

                    <div className="col">
                        <div class="card" style={{width: '250px', height: '250px'}} >
                            <img class="card-img-top" src={image} alt="CardImage" style={{ width: "250px", height: '250px' }} />
                            <div class="card-body">
                                <span class="card-text" style={{ fontWeight: 'bold' }}>Title</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ImageSide