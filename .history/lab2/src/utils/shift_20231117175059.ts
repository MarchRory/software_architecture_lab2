export function shift(originStr: string): string {
    let lineCnt = originStr.split('\n').length
    const tokens: string[] = originStr.split(' ')
    let tokenIndex: number = 0
    let res: string = ''

    for (let line = 0; line < lineCnt; line++) {
        let token = []
        let i: number = 0
        let j: number = 0
        while (i < lineCnt) {
            token.push(tokens[tokenIndex++])
            i++
        }
        for (i = 0; i < tokens.length; i++) {
            let index = i
            for (j = 0; j < tokens.length; j++) {
                if (index >= tokens.length) {
                    index = 0
                }
                res += tokens[index] + ' '
                index++
            }
        }
    }

    return res
}