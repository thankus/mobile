import React from "react";

const NewMap = ()=>{
    const clickHandle = ()=>{
        let _map = window.localStorage.getItem('mapData');
        if(_map){
            _map = new Map(JSON.parse(_map));
            console.log(_map.get('1'),'_map1111')
        }else{
            _map = new Map();
            _map.set('1','11')
            _map.set('1','222')
            console.log(Array.from(_map),'_map')
        }
        window.localStorage.setItem('mapData',JSON.stringify(Array.from(_map)));
    }
    return (
        
        <div>
            <div onClick={clickHandle}>点击</div>
        </div>
    )

}

export default NewMap