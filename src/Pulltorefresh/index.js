import React from 'react';
import PullToRefresh from '@wecode/pulltorefresh-react';
import './index.css'
export default function Pulltorefresh() {
    const onRefresh = (res,rej)=>{
        let a = false
        if(a){

        }else{
            console.log(2)
        }
    }
    return (
        <div className="wrap" id="wrap">
            <div style={{ height: '100px' }} className="header">
                <div className="ptr--ptr ptr--refresh" style={{'minHeight': '52px'}}>
                    <div className="ptr--box">
                        <div className="ptr--content">
                            <div className="ptr--icon">
                                <div className="weui-loading-dot animated">
                                    <i></i><i></i><i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list">
                <div id='refresh-demo' className="refresh-demo">
                
                    {/* <PullToRefresh
                        
                        
                        onRefresh={onRefresh}
                    >
                        <div className="content">这是内容</div>
                    </PullToRefresh> */}
                </div>
            </div>

        </div>

    );
}