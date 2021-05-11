
let API_PATH = "/"
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  API_PATH = "http://localhost:5000/"
}

export {API_PATH}