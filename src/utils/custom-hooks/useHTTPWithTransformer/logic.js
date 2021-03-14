import { get } from "../../http";

// Recursively calls itself until it has processed all of the urls.
const doRequests = async (urls) => {
    const [currentUrl, ...otherUrls] = urls;

    if (currentUrl === undefined) {
        return []
    }

    const currentResponse = await get(currentUrl)
    const nextResponse = await doRequests(otherUrls)

    return [currentResponse.data, ...nextResponse]
}

// Runs the recursive perform requests function and then returns a function which calls the transform function
export const performRequests = async (urls) => {
    const allResponses = await doRequests(urls)

    return {
        responses: allResponses,
        transform: (fn) => {
            return fn(...allResponses)
        }
    }
}