import { get } from "../../http";

const doRequests = async (urls) => {
    const [currentUrl, ...otherUrls] = urls;

    if (currentUrl === undefined) {
        return []
    }

    const currentResponse = await get(currentUrl)

    return [currentResponse.data, ...await doRequests(otherUrls)]
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