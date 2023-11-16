const xhr = new XMLHttpRequest();

function request<T = any>(method = 'GET', url: string): Promise<T> {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText as T)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.open(method, url, true)
        xhr.send()
    })
}

/**
 * ajax读取项目项目文件夹下的文件
 * @param url 
 * @returns 
 */
export const readFile = (url: string): Promise<string> => {
    return request('GET', url)
}