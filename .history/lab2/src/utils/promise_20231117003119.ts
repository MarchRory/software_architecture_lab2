export const promiseQueue = (queue: Promise<any>[]): Promise<any>[] => {
    return queue.reduce((pre: Promise<any>, cur: Promise<any>) => {
        console.log(pre, cur)
        pre = pre.then(cur)
        return pre
    }, Promise.resolve())
}