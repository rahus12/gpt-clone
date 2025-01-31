import React from 'react'
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import { useRef } from 'react';
// below code is directly taken from documentation
const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY; 
const authenticator =  async () => {
    try {
        const response = await fetch('http://localhost:3000/api/upload');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};



function Upload({setImg}) {
    const ikUploadRef = useRef(null);
    
    const onError = (err) => {
      console.log("Error", err);
    };
    
    const onSuccess = (res) => {
      console.log("Success", res);
      setImg((img) => ({...img, isLoading: false, dbData: res}));
    };
    
    const onUploadProgress = (progress) => {
      console.log("Progress", progress);
      setImg((img) => ({...img, isLoading: true}));
    };
    
    const onUploadStart = (evt) => {
      console.log("Start", evt);
    };
    return (
        // below code is directly taken from documentation
        <div className="App">
          <IKContext
            urlEndpoint={urlEndpoint}
            publicKey={publicKey}
            authenticator={authenticator}
          >
            <IKUpload
            fileName="test-upload.png"
            onError={onError}
            onSuccess={onSuccess}
            useUniqueFileName={true}
            onUploadProgress={onUploadProgress}
            onUploadStart={onUploadStart}
            style={{display: "none"}}
            ref={ikUploadRef}
            />
            {
              <label onClick={() => ikUploadRef.current.click()}>
              <img src="/attachment.png" alt="" />
            </label>
            }    
            </IKContext>
          {/* ...other SDK components added previously */}
        </div>
      );
}

export default Upload