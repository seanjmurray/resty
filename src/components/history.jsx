import React from 'react'
import './css/history.scss'

export default (props) => {
    
    const handleClick = (call) => {
        console.log(call)
        props.handle(call)
    }
    
    const obj = props.history || {}
    const history = Object.keys(obj).map(key => {
        return (
            <div key={key}>
                <button onClick={() => handleClick(obj[key])}>{obj[key].method}</button>
                <p>{obj[key].url}</p>
            </div>
        )
    })
    return (
        <section className='history'>
            {history}
        </section>
    )

}