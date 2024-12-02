import React, { useEffect, useRef } from 'react'
import './newPrompt.css'

function NewPrompt() {

  // to make sure we are scrolled down to the bottom of the chat
  // userRef is like useState but it doesn't re-render the component
  // it's like a ref to a DOM element
  // most popular use case is to get the scroll position of an element
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
    {/* ADD new chat */}
    {/* didnt understand this part of why endchat required */}
   
    <div className="endChat" ref = {endRef}></div>
        <form className='newForm'>
          <label htmlFor="file">
            <img src="/attachment.png" alt="" />
          </label>
          <input type="file" id="file" multiple = {false} hidden/>
          <input type="text" placeholder='Ask anything...' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
    </>
  )
}

export default NewPrompt