export function shift(originStr: string): string {
    let wordLine = originStr.split('\n')
    let lineCnt = wordLine.length
    console.log()
    let tokenIndex: number = 0
    let res: string = ''

    for (let line = 0; line < lineCnt; line++) {
        console.log(wordLine)
        let count = wordLine.split(' ').length
        let tokens = []
        let i: number = 0
        let j: number = 0
        while (i < count) {
            token.push(tokens[tokenIndex++])
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