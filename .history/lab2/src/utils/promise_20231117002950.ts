export const promiseQueue = (queue: Promise<any>[]): Promise<any>[] => {
    return queue.reduce((a: Promise<any>, b: Promise<any>)) => {
    console.log(a, b)
    a = a.then(b)
}, Promise.resolve())
}