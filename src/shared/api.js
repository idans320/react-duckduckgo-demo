import {API_PATH} from "./urls"

const read_recent = async () => {
    let route = "api/history"
    let data = await (await fetch(API_PATH + route)).json()
    return data
}

export {read_recent}