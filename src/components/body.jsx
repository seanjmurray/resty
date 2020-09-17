import React, { useState, useEffect } from 'react'
import axios from 'axios'
import md5 from 'md5'
import Restform from './rest-form'
import ResultsSection from './results'
import HistorySection from './history'

export default () => {
    const [results, setResults] = useState()
    const [loading, setLoading] = useState(false)
    const [history, setHistory] = useState({})
    const [request, setRequest] = useState({})

    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem('history')))
    },[setHistory])

    const handleLoad =  () => setLoading(loading => !loading)

    const updateHistory = (req) => {
        let hash = md5(JSON.stringify(req));

        const newHistory = { ...history, [hash]: req }
        setHistory(newHistory)
        localStorage.setItem('history', JSON.stringify(newHistory));
    }
    
    const updateRequest = (req) => {
        setRequest(req)
    }

    const handleSubmit = (request) => {
        const { method,url,body } = request
        console.log('REQ', request)
        setRequest(request)
        handleLoad()
        axios({
            method: method,
            url: url,
            data: body ? body : null,
          }).then(data => {
            setResults(data)
            handleLoad()
            updateHistory(request)
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <div className="main">
            <Restform req={request} handleSubmit={handleSubmit} />
            <section className="flex">
            <HistorySection history={history} handle={updateRequest} />
            <ResultsSection loading={loading} data={results} />
            </section>
        </div>
    )
}