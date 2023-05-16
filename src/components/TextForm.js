import React,{useState} from 'react'

const TextForm = (props) => {
    const [text,setText]=useState(null);
 
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows='8' ></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Upperase</button>            
        </div>
    )
}

export default TextForm