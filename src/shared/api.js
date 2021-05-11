import { API_PATH } from "./urls"

const readRecent = async () => {
    let route = "api/history"
    let data = await (await fetch(API_PATH + route)).json()
    return data
}

const writeRecent = async (value) => {
    let route = "api/history/add"
    let result = await fetch(API_PATH + route, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ "value": value })
    })
    if (result.status === 201) {
        return await readRecent()
    }
    else {
        throw Error("Fail to add item, status code:" + result.status)
    }
}

const queryDuckDuckGo = async (value) => {
    let route = "api/search"
    let queryParam = encodeURIComponent(value)
    let result = await fetch(API_PATH + route + "?q=" + queryParam)
    return await result.json()
}

export { readRecent, writeRecent, queryDuckDuckGo }