export const REQUEST_POST = 'REQUEST_POST'
export const LOAD_POST = 'LOAD_POST'

export const requestPost = json => {
    return {
        type: REQUEST_POST,
        post: json
    }
}

export const loadPost = item => {
    return {
        type: LOAD_POST,
        post: item
    }
}


