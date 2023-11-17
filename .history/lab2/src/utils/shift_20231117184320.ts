function transform_part_one(originStr: string): string {
    let wordLine: string[] = originStr.split('\n')
    let lineCnt: number = wordLine.length
    let res: string = ''

    for (let line = 0; line < lineCnt; line++) {
        // 读取当前行字符
        let lineWords: string[] = wordLine[line].split(' ')
        let wordsIndex: number = 0
        // 计算当前行字符数量
        let count: number = lineWords.length
        let tokens: string[] = []
        let i: number = 0
        let j: number = 0
        // 存储当前行字符
        while (i < count) {
            tokens.push(lineWords[wordsIndex++])
            i++
        }
        for (i = 0; i < count; i++) {
            let thisLine: number = ''
            let index: number = i
            for (j = 0; j < count; j++) {
                if (index >= count) {
                    index = 0
                }
                thisLine += tokens[index] + ' '
                index++
            }
            thisLine += '\n'
            res += thisLine
        }
    }
    return res
}
export function shift(originStr: string): string {
    let transformed: string = transform_part_one(originStr)
    let wordLine: string[] = transformed.split('\n')
    wordLine.sort((a, b) => {
        if (a && b) {
            let compareValue = 0
            let line1C = a[0].toLowerCase()
            let line2C = b[0].toLowerCase()
            console.log(line1C, line2C)
            return line1C - line2C > 0
        }
    })
    return wordLine
}