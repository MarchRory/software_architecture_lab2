const reader = new FileReader();
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
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/EventSystem/*.java')
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
    const fileList = import.meta.glob('/src/assets/sourceJavaCode/src/MainAndSub/*.java')
    return Object.values(fileList).map((item) => item.name)
}

/**
 * 读取text文本内容
 * @param file 
 */
export const readText = (file: File): Promise<string> => {
    let res: string = ''
    return new Promise((resolve, reject) => {
        reader.readAsText(file)
        reader.onload = (e) => {
            resolve(e.target?.result as string)
        }
    })

}