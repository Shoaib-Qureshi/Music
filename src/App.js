import React from 'react';
import './App.css';
import { useState,useEffect } from "react";
import {storage } from "./firebase";
import{ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import { v4 } from "uuid";


function App() {
  const [AudioUpload, playUpload] = useState();
  const [AudioList,AudioSetList]=useState([]);

  const AudioListReff=ref(storage,"Audio/")

  const upload = () => {
    if(AudioUpload==null)
    return;
    const areff=ref(storage,`Audio/${AudioUpload.name +v4()}`);
    uploadBytes(areff,AudioUpload).then((snaphsot)=>{
      getDownloadURL(snaphsot.ref).then((url)=>{
        AudioSetList((prev)=>[...prev,url]);
      });
    });

  };
  useEffect(()=>{
    listAll(AudioListReff).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          AudioSetList((prev)=>[...prev,url]);
        });
      });
    });
  },[])
  return (
    <div className="App">
      <h3>MUSIC UPLOAD </h3>
      <label class="button-31"> <input id="file"  type="file" aria-label="File browser example" onChange={(event) => { 
        playUpload(event.target.files[0]);
         }} 
         />  <span class="file-custom"></span> </label>
      <button className='button-31' onClick={upload}>Click To Upload </button>
      {AudioList.map((url)=>{
        return <audio controls src={url}/>
      })}
    </div>
  );
}

export default App;
