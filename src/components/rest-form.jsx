import React, { useState } from 'react';
import axios from 'axios'
import './css/rest-form.scss'


export default (props) => {
    const [url, setUrl] = useState('')
    const [method, setMethod] = useState('get')
    const [body, setBody] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(body)
        axios({
            method: method,
            url: url,
            data: body ? JSON.parse(body) : null,
          }).then(data => {
              console.log(data)
            props.handleResults(data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='url'>URL:</label>
                <input type='text' value={url} onChange={e => setUrl(e.target.value)} placeholder='URL to test' />
                <button>Send Request</button>
                <div className="flex method">
                    <span id="get" className={method === 'get' ? 'active btn' : 'btn'} onClick={e => setMethod(e.target.id)}>GET</span>
                    <span id="post" className={method === 'post' ? 'active btn' : 'btn'} onClick={e => setMethod(e.target.id)}>POST</span>
                    <span id="put" className={method === 'put' ? 'active btn' : 'btn'} onClick={e => setMethod(e.target.id)}>PUT</span>
                    <span id="delete" className={method === 'delete' ? 'active btn' : 'btn'} onClick={e => setMethod(e.target.id)}>DELETE</span>
                </div>
                {method === 'put' || method === 'post' ?
                <textarea onChange={e => setBody(e.target.value)} placeholder='Input request body here in proper JSON format' rows='8' cols='40'></textarea> :
                null}
            </form>
        </div>
    )
}