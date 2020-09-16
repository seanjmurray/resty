import React, { useState } from 'react'
import Restform from './rest-form'
import ResultsSection from './results'

export default () => {
    const [results, setResults] = useState()

    const handleResults = (data) => {
        setResults(data)
    }

    return (
        <div className="main">
            <Restform handleResults={handleResults} />
            {results ?
            <ResultsSection data={results} /> :
            null}
        </div>
    )
}