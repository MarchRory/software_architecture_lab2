import { readCode } from '@/utils/file'
import { promiseQueue } from '@/utils/promise'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

export const getPipCode = () => {
    const paths = getOOPFiles()
    const codes: string[] = []
    return new Promise((resolve) => {
        paths.forEach((path) => {
            readCode(path).then((res) => {
                codes.push(res)
                return;
            }).catch((e) => {
                console.log('glob error : ', e)
            })
        })
        resolve(codes)
    })
}