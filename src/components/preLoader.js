import React from "react"
import loadImg from '../else/photo/loader.svg'
const Loading = (props) => {
    return (
        <div>
            {props.isLoading ? <img src={loadImg}/> : null}
        </div>
    )
}
export default Loading;