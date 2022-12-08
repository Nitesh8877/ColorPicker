import React, { useState } from 'react'
import Values from 'values.js';
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Feed from './components/feed/feed'
// import Profile from './components/profile/profile'
// import {Post} from './components/post/post';
// import Header from './components/headers/index'
import './index.css';
import SingleColor from './components/colorPicker/singleColor';

export default function App() {
  const [color,setColer]=useState('');
  const [error,setError]=useState(false);
  const [list,setList]=useState(new Values('#f15025').all(10));
  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
      let colors=new Values(color).all(10);

    }catch(err){
      setError(true);
      console.log(err);
    }
  }
  return (


      <>
      <section className='container'>
        <h3> Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
          type='text'
          value={color}
          onChange={(e)=>{setColer(e.target.value)}}
          placeholder="#f15025"
          className={`${error}?'error':null`}
          />
          <button className='btn' type='submit'
          >
            Submit
          </button>
 
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index)=>{
          return (
            <SingleColor key={index}
            {...color}
            index={index}
            hexColor={color.hex}
            ></SingleColor>
          )
        })
        
        
        }
      </section>
      </>

  )
}


    {/* <BrowserRouter>
        <Header />
        <div className='instragram-container'>
          <Routes>
            <Route path='/' element={<Feed />}></Route>
            <Route path='/:username' element={<Profile />}></Route>
            <Route path='/:username/posts' element={<Post />}></Route>
          </Routes>
        </div>
      </BrowserRouter> */}
      