export const promiseQueue = (queue: Promise<any>[]): Promise<any>[] => {
    queue.reduce((a, b) => {
        console.log(a, b)
    })
}