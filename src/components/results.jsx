import React from 'react'
import ReactJson from 'react-json-view'
import { WindMillLoading } from 'react-loadingg'
import './css/results.scss'

export default (props) => {
    return (
        <div className='results'>
            {props.loading ?
            <WindMillLoading /> :
            props.data ?
            <>
            <h3>Headers:</h3>
            <ReactJson src={props.data.headers} />
            <h3>Body:</h3>
            <ReactJson src={props.data.data} />
            </> :
            <WindMillLoading />}

        </div>
    )
}