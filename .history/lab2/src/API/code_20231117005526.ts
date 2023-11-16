import { readCode } from '@/utils/file'
import { promiseQueue } from '@/utils/promise'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

export const getPipCode = () => {
    const paths = getOOPFiles()
    const codes: string[] = []
    return new Promise((resolve) => {
        await paths.forEach((path) => {
            readCode(path).then((res) => {
                console.log(res)
                codes.push(res)
            })
        })
        resolve(codes)
    })
}