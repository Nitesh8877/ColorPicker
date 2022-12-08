import React,{useState,useEffect} from "react";
import rgbToHex from "./utils";

const SingleColor=({rgb,weight,index,hexColor})=>{
    const [alert,setAlert]=useState(false);
    const bcg=rgb.join(',');
    const hex=rgbToHex(...rgb);
    const HexValue=`#${hexColor}`;
    useEffect(()=>{
        const timout=setTimeout(()=>{
            setAlert(false);
        },3000);
        return ()=>clearTimeout(timout);
    },[alert]);
    return (
        <>
        <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb${bcg}`}}
        onClick={()=>{setAlert(true)
        navigator.clipboard.writeText(HexValue)
        }}
        ><p className="percent-vaue" >{weight}%</p>
        <p className="color-value">{HexValue}</p>
        {
            alert && <p className="alert">Copied to Clipboard</p>
        }
        </article>
        </>
    )
}

export default SingleColor;