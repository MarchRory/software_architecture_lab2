import { readCode } from '@/utils/file'
import { promiseQueue } from '@/utils/promise'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

/**
 * 读取Pip代码
 * @returns 
 */
export const getPipCode = () => {
    const paths = getPipFiles()
    const codes: string[] = []
    paths.forEach((path) => {
        readCode(path).then((res) => {
            console.log(res)
            codes.push(res)
        }).finally(() => {
            return
        })
    })
    console.log(codes)
    return codes
}