const reader = new FileReader();
/**
 * 读取Pip文件夹下所有Java文件
 * @param directory 文件夹绝对路径
 */
export const getPipFiles = () => {
    const fileList = import.meta.glob('../utils/Pip/*.txt', { eager: true, import: 'default' })
    return Object.values(fileList).map((item) => item)
}

/**
 * 读取EventsSys文件夹下所有Java文件
 * @returns 
 */
export const getEventsSysFiles = async () => {
    //const fileList = import.meta.glob('../utils/*')
    const fileList = import.meta.glob('../utils/EventSystem/*.txt', { eager: true, import: 'default' })
    return Object.values(fileList).map((item) => item)
}

/**
 * 读取OOP文件夹下所有Java文件
 * @returns 
 */
export const getOOPFiles = () => {
    const fileList = import.meta.glob('../utils/OOP/*.txt', { eager: true, import: 'default' })
    return Object.values(fileList).map((item) => item)
}

/**
 * 读取主程序-子程序文件夹下所有Java文件
 * @returns 
 */
export const getMainChildFiles = () => {
    const fileList = import.meta.glob('../utils/MainAndSub/*.txt', { eager: true, import: 'default' })
    return Object.values(fileList).map((item) => item)
}

/**
 * 读取text文本内容
 * @param file 
 */
export const readText = (file: File): Promise<string> => {
    return new Promise((resolve) => {
        reader.readAsText(file)
        reader.onload = (e) => {
            resolve(e.target?.result as string)
        }
    })

}