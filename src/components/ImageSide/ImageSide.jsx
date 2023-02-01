import React, { useRef, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom'
import './ImageSide.css'
import Draggable from 'react-draggable';
import { addMessage } from '../../redux/action';

const ImageSide = (props) => {

    //  Add Image
    const [image, setImage] = useState('https://source.unsplash.com/random/&1');

    const changeImage = () => {
        setImage(image + 1);
    }

    //  Image Overlay Text
    const custom_style = useSelector(state => state.text);

    //  Image Title
    const [title, setTitle] = useState('Untitled image')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    // Save Image
    const imgRef = useRef();
    const cardRef = useRef();

    const { messages, dispatch } = props;

    const [editImage, setEditImage] = useState()
    const [filter, setFilter] = useState();
    const [editTitle, setEditTitle] = useState();

    const add = props.addMessage(cardRef)

    const saveImg = () => {
        dispatch(add);

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


                    {messages.map((msg, i) => (
                        <div className="col"> 
                            <div className="card" style={{ width: '250px', height: '250px', marginTop: '5rem' }} key={i}  >
                                <img className="card-img-top" src={editImage} alt="CardImage" 
                                style={{ width: "250px", height: '250px', filter: filter }} disabled={true} ref={cardRef} />

                                <img src={msg.src} style={msg.style}
                                 className="card-img-top" alt="CardImage" />

                                <div className="card-body">
                                    <span className="card-text" style={{ fontWeight: 'bold' }}>{editTitle}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        addMessage
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSide);
