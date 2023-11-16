import { readFile } from "./request";
/**
 * 读取文件夹里的代码字符串
 * @param filePath 绝对路径
 * @returns string 文件里的代码
 */
export const readCode = (filePath: string): Promise<string> => {
    return readFile(filePath)
}

export const getFiles = (directory: string) => {
    return require.context(directory, false, /.java$/)
}
