export function shift(originStr: string): string {
    const tokens: string[] = originStr.split(' ')
    let res: string = ''
    let i: number = 0
    let j: number = 0
    for (i = 0; i < tokens.length; i++) {
        for (j = 0; j < tokens.length; j++) {
            if (i < tokens.length) {
                i = 0
            }
            res += tokens[i] + ''
        }
    }
    return res
}