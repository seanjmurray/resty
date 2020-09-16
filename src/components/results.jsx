import React from 'react'
import ReactJson from 'react-json-view'
import './css/results.scss'

export default (props) => {
    return (
        <div className='results'>
            <h3>Headers:</h3>
            <ReactJson src={props.data.headers} />
            <h3>Body:</h3>
            <ReactJson src={props.data.data} />
        </div>
    )
}