export function shift(originStr: string): string {
    const tokens: string[] = originStr.split(' ')
    let lineCnt = 0;
    tokens.forEach((item) => {
        console.log(item)
        if (item.includes(' ')) { lineCnt++ }
    })

    lineCnt++
    console.log(lineCnt)
    let res: string = ''
    let i: number = 0
    let j: number = 0
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
    return res
}