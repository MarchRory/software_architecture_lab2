export function shift(originStr: string): string {
    let wordLine: string[] = originStr.split('\n')
    let lineCnt: number = wordLine.length
    let res: string = ''

    for (let line = 0; line < lineCnt; line++) {
        let lineWords: string[] = wordLine[line].split(' ')
        let wordsIndex: number = 0
        let count: number = lineWords.length
        let tokens: string[] = []
        let i: number = 0
        let j: number = 0
        while (i < count) {
            tokens.push(lineWords[wordsIndex++])
            i++
        }
        for (i = 0; i < count; i++) {
            let thisLine = ''
            let index = i
            for (j = 0; j < count; j++) {
                if (index >= count) {
                    index = 0
                }
                thisLine += token[index] + ' '
                index++
            }
            thisLine += '\n'
            res += thisLine
        }
    }
    return res
}