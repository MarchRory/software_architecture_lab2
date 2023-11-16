export const promiseQueue = (queue: Promise<any>[]): Promise<any>[] => {
    return queue.reduce((a, b) => {
        console.log(a, b)

        a = a.then(b)
    }, Promise.resolve())
}