import React from 'react';


function Student({student, style, ...rest}) {
    return (
        <div style={style}>
            <div style={{height:'100px'}}>{student.name}</div>
            <div>{student.age}</div>
        </div>
    )
}

export default Student