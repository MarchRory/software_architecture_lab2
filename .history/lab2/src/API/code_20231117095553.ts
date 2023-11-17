import { readCode } from '@/utils/file'
import { getOOPFiles, getEventsSysFiles, getPipFiles } from '@/utils/file'

const getJavaCode = (fn: Function) => {
    const paths = fn && fn()
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


/**
 * 读取管道、过滤器风格Java文件
 * @returns 
 */
export const getPipCode = () => {
    return getJavaCode(getPipFiles)
}

/**
 * 读取面向对象风格Java文件
 * @returns 
 */
export const getOOPCode = () => {
    return getJavaCode(getOOPFiles)
}

/**
 * 读取事件系统风格Java文件
 * @returns 
 */
export const getEventsCode = () => {
    return getJavaCode(getEventsSysFiles)
}