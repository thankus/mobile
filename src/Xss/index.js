import React, { useEffect } from 'react';
import xss from "xss";
const Xss = ()=>{
    useEffect(()=>{
        const html = xss('<script>alert("xss");</script>');

        console.log(html,'1111');

    },[])
    return(
        <div>xss</div>
    )
}
export default Xss