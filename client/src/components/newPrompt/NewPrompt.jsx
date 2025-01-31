import React, { useEffect, useRef, useState } from 'react'
import Upload from '../upload/Upload';
import './newPrompt.css'
import { IKImage } from 'imagekitio-react';
import model from '../../lib/gemini';

function NewPrompt() {
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error:"",
    dbData:{}
  });
  // to make sure we are scrolled down to the bottom of the chat
  // userRef is like useState but it doesn't re-render the component
  // it's like a ref to a DOM element
  // most popular use case is to get the scroll position of an element
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // trying out
  const add = async () => {
    // const prompt = Prompt;
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    console.log(response);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await add();
    setPrompt("");
  }
  return (
    <>
    {/* ADD new chat */}
    {img.dbData?.filePath && (
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={img.dbData?.filePath}
        transformation={[{width:400}]}
      />
    )}

    {/* just to test */}
    <button onClick={add}>Test AI</button>

    {/* didnt understand this part of why endchat required */}   
    <div className="endChat" ref = {endRef}></div>
        <form className='newForm' onSubmit={handleSubmit}>
          {/* below removed to make way for upload component*/} 
          {/* <label htmlFor="file">
            <img src="/attachment.png" alt="" />
          </label> */}
          <Upload setImg = {setImg}/>
          <input type="file" id="file" multiple = {false} hidden/>
          <input type="text" name = "prompt" placeholder='Ask anything...' value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
          <button>
            <img src="/arrow.png" alt="" type="submit"/>
          </button>
        </form>
    </>
  )
}

export default NewPrompt