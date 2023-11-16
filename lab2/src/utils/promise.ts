/**
 * Promise队列, 解决读取文件一个挂了全挂的问题
 * @param queue Promise数组
 * @returns 
 */
export const promiseQueue = (queue: Promise<any>[]): Promise<any>[] => {
    return queue.reduce((pre, cur) => {
        pre = pre.then(cur)
        return pre
    }, Promise.resolve())
}