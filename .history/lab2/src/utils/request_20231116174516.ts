const xhr = new XMLHttpRequest();

const request = ({ method, url }) => {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('res: ', xhr.responseText)
                    resolve(xhr.responseText)
                }

            } else {
                reject(xhr.status)
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
export const readFile = (url: string) => {
    return request({ method: 'GET', url })
}