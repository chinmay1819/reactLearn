import React from 'react'
import Title from './Title'
import Author from './Author'
import Image from './Image'
import Book from './Book'

const Booklist = () => {
  const firstBook={
    title:'The Intelligent Investor',
    Author:'Benjamin Franklin',
    image:'https://m.media-amazon.com/images/I/919mmNCTaaL.jpg'
  }
  const seocndBook={
    title:'Five Point Someone',
    Author:'Chetan Bhagat',
    image:'https://m.media-amazon.com/images/I/51FqtXUscFL.jpg'
  }
  const thirdBook={
    title:'The psychology of money',
    Author:'Morgan Housel',
    image:'https://m.media-amazon.com/images/I/71g2ednj0JL.jpg'
  }
  const forthBook={
    title:'To kill a mockingbird',
    Author:'Harper Lee',
    image:'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg'
  }
  const fifthBook={
    title:'Ikigai',
    Author:'Hector Garcia',
    image:'https://m.media-amazon.com/images/I/814L+vq01mL.jpg'
  }
  return (
    
    <section className='booklist'>
      
     <Book title={firstBook.title} Author={firstBook.Author} image={firstBook.image}></Book>
     <Book title={seocndBook.title} Author={seocndBook.Author} image={seocndBook.image}></Book>
     <Book title={thirdBook.title} Author={thirdBook.Author} image={thirdBook.image}></Book>
     <Book title={forthBook.title} Author={forthBook.Author} image={forthBook.image}></Book>
     <Book title={fifthBook.title} Author={fifthBook.Author} image={fifthBook.image}></Book>

     
    </section>
  )
}

export default Booklist
