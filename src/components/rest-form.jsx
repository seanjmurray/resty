import React, { useState } from 'react';
import './css/rest-form.scss'
export default () => {
    const [url, setUrl] = useState('')
    const [method, setMethod] = useState('GET')
    const [result, setResult] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(url, method)
        setResult(
            <div>
                <h2>Method: {method}</h2>
                <h3>URL: {url}</h3>
            </div>
        )
    }

    return (
        <div className="main">

        <form onSubmit={handleSubmit}>
            <label htmlFor='url'>URL:</label>
            <input type='text' value={url} onChange={e => setUrl(e.target.value)} placeholder='URL to test' />
            <button>Send Request</button>
            <div className="flex method">
                <span id="GET" className={method === 'GET' ? 'active' : null} onClick={e => setMethod(e.target.id)}>GET</span>
                <span id="POST" className={method === 'POST' ? 'active' : null} onClick={e => setMethod(e.target.id)}>POST</span>
                <span id="PUT" className={method === 'PUT' ? 'active' : null} onClick={e => setMethod(e.target.id)}>PUT</span>
                <span id="DELETE" className={method === 'DELETE' ? 'active' : null} onClick={e => setMethod(e.target.id)}>DELETE</span>
            </div>
        </form>
        {result}
        </div>
    )
}