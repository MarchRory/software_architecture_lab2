import { readFile } from '@/utils/request'
import { getOOPFiles, getEventsSysFiles, getPipFiles, getMainChildFiles } from '@/utils/file'

/**
 * 统一文件读取工具
 * @param fn 
 * @returns 
 */
const getJavaCode = async (fn: Function): Promise<string[]> => {
    const paths = fn && await fn()
    const codes: string[] = []
    return new Promise(async (resolve) => {
        await paths.forEach((path: string) => {
            readFile(path).then((res) => {
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

/**
 * 读取主程序-子程序下所有Java文件
 * @returns 
 */
export const getMainChildCode = () => {
    return getJavaCode(getMainChildFiles)
}