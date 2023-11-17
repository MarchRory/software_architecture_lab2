import { readCode } from '@/utils/file'
import { promiseQueue } from '@/utils/promise'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

export const getPipCode = () => {
    const paths = getOOPFiles()
    const codes: string[] = []
    const fetchs = paths.map((path) => readCode(path))
    const res = promiseQueue(fetchs)
    console.log('res: ', res)
    /*     return new Promise((resolve) => {
            paths.forEach((path) => {
                readCode(path).then((res) => {
                    console.log(res)
                    codes.push(res)
                    return;
                }).catch((e) => {
                    console.log('Blob')
                })
            })
            resolve(codes)
        }) */
}