import { readCode } from '@/utils/file'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

export const getJavaCode = (fn: Function) => {
    const paths = fn && fn()
    console.log(paths)
    const codes: string[] = []
    return new Promise((resolve) => {
        paths.forEach((path: string) => {
            readCode(path).then((res) => {
                codes.push(res)
                return;
            }).catch((e) => {
                console.log('glob err: ', e)
            })
        })
        resolve(codes)
    })
}

export const getPipCode = (getPipFiles: Function) => {
    return getJavaCode(getPipFiles)
}