export function shift(originStr: string): string {
    let wordLine = originStr.split('\n')
    let lineCnt = wordLine.length
    let res: string = ''

    for (let line = 0; line < lineCnt; line++) {
        console.log(wordLine)

        let lineWords: string[] = wordLine[line].split(' ')
        let count = lineWords.length
        let tokens = []
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