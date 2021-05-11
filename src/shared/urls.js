
let API_PATH = "/"
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  API_PATH = "http://localhost:5000/"
}

export const DUCK_DUCK_GO = "http://api.duckduckgo.com/"

export {API_PATH}