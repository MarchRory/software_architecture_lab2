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
 * 读取文件夹下所有Java文件
 * @param directory 文件夹绝对路径
 */
export const getFiles = (directory: string) => {
    const fileList = require.context(directory, false, /.java$/)
    console.log(fileList)
}
