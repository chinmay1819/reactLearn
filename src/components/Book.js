import React from 'react'
import Title from './Title'
import Author from './Author'
import Image from './Image'

const Book = (props) => {
  const title=props.title
  const author=props.Author
  const image=props.image
  
  return (
    
    <article className='book'>
     
      {/* <Image></Image> */}
      <img src={image} alt='Image not found'/>
{/*       
      <Title></Title> */}
      <h2>{title}</h2>
      {/* <Author></Author> */}
      <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.5rem'}}> {author}</h4>
      
    </article>
  
  )
  
}

export default Book
