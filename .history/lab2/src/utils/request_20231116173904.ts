const xhr = new XMLHttpRequest();

const request = ({ method, url }) => {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.status)
            }
        }
        xhr.open(method, url, true)
        xhr.send()
    })
}

export const readFile = (url: string) => {
    return request({ method: 'GET', url })
}