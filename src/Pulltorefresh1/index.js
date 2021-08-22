
import {useState} from 'react'
import "./index.css";
import PullToRefresh from "react-simple-pull-to-refresh";
function App() {
  const [list, setlist] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
  const handleRefresh = ()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve()
      },500) 
    })
  }

  const loadingHtml = ()=>{
    return (
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
    )
  }
  return (
    <div className="App">
      <div className="header">header</div>
      <PullToRefresh onRefresh={handleRefresh} refreshingContent={loadingHtml()} className="pullto" canFetchMore={false}>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </PullToRefresh>
    </div>
  );
}

export default App;