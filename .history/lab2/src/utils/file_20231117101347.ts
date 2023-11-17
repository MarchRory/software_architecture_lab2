import { readFile } from "./request";

/**
 * 读取Pip文件夹下所有Java文件
 * @param directory 文件夹绝对路径
 */
export const getPipFiles = () => {
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/Pip/*.java')
    return Object.values(fileList).map((item) => item.name)
}

/**
 * 读取EventsSys文件夹下所有Java文件
 * @returns 
 */
export const getEventsSysFiles = () => {
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/EventsSys/*.java')
    return Object.values(fileList).map((item) => item.name)
}

/**
 * 读取OOP文件夹下所有Java文件
 * @returns 
 */
export const getOOPFiles = () => {
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/OOP/*.java')
    return Object.values(fileList).map((item) => item.name)
}

/**
 * 读取主程序-子程序文件夹下所有Java文件
 * @returns 
 */
export const getMainChildFiles = () => {
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/MainAndSub/MainAndSub.java')
    return Object.values(fileList).map((item) => item.name)
}