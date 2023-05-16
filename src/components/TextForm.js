import React,{useState} from 'react'

const TextForm = (props) => {
    const [text,setText]=useState('');
 
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows='8' ></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
           
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>    

        </div>
        <div className='container my-2'>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm
