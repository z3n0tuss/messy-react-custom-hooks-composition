import React from 'react'
import { performRequests } from './logic';

const useHTTPWithTransformer = (urls, fn) => {
    const [transformedResponses, setTransformedResponses] = React.useState(null)

    React.useEffect(() => {
        (async function () {
            const responses = await performRequests(urls)
            const transformedResponses = responses.transform(fn)
            setTransformedResponses(transformedResponses)
        })()
    }, []);

    return transformedResponses
}

export default useHTTPWithTransformer