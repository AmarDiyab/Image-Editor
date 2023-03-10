import React, { useRef, useState } from 'react'
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
    const custom_style = useSelector(store => store);

    //  Image Title
    const [title, setTitle] = useState('Untitled image')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    // Save Image
    const imgRef = useRef();
    const cardRef = useRef();

    const [editImage, setEditImage] = useState()
    const [filter, setFilter] = useState();
    const [editTitle, setEditTitle] = useState();


    const saveImg = () => {
        let img = imgRef.current.src;
        setEditImage(img)
        let filt = imgRef.current.style.filter
        setFilter(filt)
        let name = imgRef.current.title
        setEditTitle(name)
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
                <img src={image} alt="blank" title={title} className='BlankImage' id='image' ref={imgRef} />
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
                        <button className='NewButton' onClick={saveImg}>Save</button>
                    </div>
                </div>
                <div className="row">


                        <div className="col"> 
                        
                            <div className="card" style={{ width: '250px', height: '250px', marginTop: '1rem' }}  >
                                <img className="card-img-top" src={editImage} alt="CardImage" 
                                style={{ width: "250px", height: '250px', filter: filter }}  ref={cardRef} />

                                

                                <div className="card-body">
                                    <span className="card-text" style={{ fontWeight: 'bold' }}>{editTitle}</span>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

        </div>
    )
}


export default ImageSide;
