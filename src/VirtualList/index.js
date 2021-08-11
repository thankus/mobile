import React,{useState} from 'react';
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer'
import { List as VList } from 'react-virtualized/dist/commonjs/List'
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized/dist/commonjs/CellMeasurer'
import Student from './Student' 
import List from './data'

const VirtualList = ()=>{
    const [list,setList] = useState(List || [])
    const [heights,setLights] = useState([])
    const measureCache = new CellMeasurerCache({
        fixedWidth: true,
        minHeight: 58,
        rowHeight:50
    })
   

    const renderItem = ({ index, key, parent, style }) => {
        return (
            <CellMeasurer cache={measureCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
                <Student key={key} student={list[index]} />
            </CellMeasurer>
        )
    }

    const getRowHeight = ({ index }) => {
        const row = heights.find(item => item.index === index)
        return row ? row.height : 100
    }


    return (
        <div style={{height: 1000}}>
            <AutoSizer>
                {({ width, height }) => (
                    <VList
                        width={width}
                        height={height}
                        overscanRowCount={10}
                        rowCount={list.length}
                        rowHeight={getRowHeight}
                        rowRenderer={renderItem}
                        deferredMeasurementCache={measureCache}
                        rowHeight={measureCache.rowHeight}
                    />
                )}
            </AutoSizer>
        </div>

    )
}

export default VirtualList;