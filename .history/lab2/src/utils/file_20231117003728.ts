import { readFile } from "./request";
/**
 * 读取文件夹里的代码字符串
 * @param filePath 绝对路径
 * @returns string 文件里的代码
 */
export const readCode = (filePath: string): Promise<string> => {
    return readFile(filePath)
}

/**
 * 读取Pip文件夹下所有Java文件
 * @param directory 文件夹绝对路径
 */
export const getPipFiles = () => {
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/Pip/*.java')
    return Object.values(fileList).map((item) => item.name)
}

export const getEventsFiles = () => {
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/EventsSys/*.java')
    return Object.values(fileList).map((item) => item.name)
}

export const getOOPFiles = () => {
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/OOP/*.java')
    return Object.values(fileList).map((item) => item.name)
}