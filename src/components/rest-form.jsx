import React, { useState } from 'react';

export default () => {
    const [url, setUrl] = useState('')
    const [method, setMethod] = useState('get')
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
        <div>

        <form onSubmit={handleSubmit}>
            <label htmlFor='url'>URL:</label>
            <input type='text' value={url} onChange={e => setUrl(e.target.value)} placeholder='URL to test' />
            <button>Send Request</button>
            <div className="flex">
                <span id="get" onClick={e => setMethod(e.target.id)}>GET</span>
                <span id="post" onClick={e => setMethod(e.target.id)}>POST</span>
                <span id="put" onClick={e => setMethod(e.target.id)}>PUT</span>
                <span id="delete" onClick={e => setMethod(e.target.id)}>DELETE</span>
            </div>
        </form>
        {result}
        </div>
    )
}