import React from 'react'

function img(props){
    const{src ,width,height,left,right}=props;

    return(
        <>
        <div>
        {<img src={src} alt="logo" width={width} height={height} left={left} right={right}/>}
        </div>
        </>
    )
}
export default img;