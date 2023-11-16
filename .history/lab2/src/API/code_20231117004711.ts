import { readCode } from '@/utils/file'
import { promiseQueue } from '@/utils/promise'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

export const getOOPCode = () => {
    const paths = getOOPFiles()
    const codes = []
    paths.forEach((path) => {
        readCode(path).then((res) => {
            console.log(res)
            codes.push(res)
        }).finally(() => {
            return
        })
    })
}