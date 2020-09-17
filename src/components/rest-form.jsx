import React, { useState, useEffect } from 'react';

import './css/rest-form.scss'


export default (props) => {
    const [request, setRequest] = useState({})

    useEffect(() => {
        const method = props.req.method || 'get';
        const url = props.req.url || '';
        const data = props.req.data ? JSON.stringify(props.req.data) : '';
        setRequest({ method, url, data })
    },[props.req, setRequest])

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(request)
    }

    const changeUrl = (e) => {
        const url = e.target.value
        setRequest({...request, url})
    }

    const changeMethod = (e) => {
       const method = e.target.id
        setRequest({...request, method})
    }

    const changeBody = (e) => {
        const data = JSON.parse(e.target.value)
        console.log(data)
        setRequest({...request, data})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='url'>URL:</label>
                <input type='text' onChange={changeUrl} defaultValue={request.url} placeholder='URL to test' />
                <button>Send Request</button>
                <div className="flex method">
                    <span id="get" className={request.method === 'get' ? 'active btn' : 'btn'} onClick={changeMethod}>GET</span>
                    <span id="post" className={request.method === 'post' ? 'active btn' : 'btn'} onClick={changeMethod}>POST</span>
                    <span id="put" className={request.method === 'put' ? 'active btn' : 'btn'} onClick={changeMethod}>PUT</span>
                    <span id="delete" className={request.method === 'delete' ? 'active btn' : 'btn'} onClick={changeMethod}>DELETE</span>
                </div>
                {request.method === 'put' || request.method === 'post' ?
                <textarea defaultValue={request.data} onChange={changeBody} placeholder='Input request body here in proper JSON format' rows='8' cols='40'></textarea> :
                null}
            </form>
        </div>
    )
}