import { readCode } from '@/utils/file'
import { promiseQueue } from '@/utils/promise'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

/**
 * 读取Pip代码
 * @returns 
 */
export const getPipCode = () => {
    const paths = getPipFiles()
    const fetchs = []
    paths.forEach((path) => {
        fetchs.push(readCode(path))
    })
    const codes = Promise.resolve()
    fetchs.forEach((fetch) => {
        codes = codes.then(fetch)
    })
    console.log(codes)
    return codes
}