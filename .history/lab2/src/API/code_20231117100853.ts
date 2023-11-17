import { readCode } from '@/utils/file'
import { getOOPFiles, getEventsSysFiles, getPipFiles, getMainChildFiles } from '@/utils/file'

/**
 * 统一文件读取工具
 * @param fn 
 * @returns 
 */
const getJavaCode = (fn: Function) => {
    const paths = fn && fn()
    const codes: string[] = []
    return new Promise(async (resolve) => {
        await paths.forEach((path: string) => {
            readCode(path).then((res) => {
                codes.push(res)
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

export const getMainChildCode = () => {
    return getJavaCode(getMainChildFiles)
}