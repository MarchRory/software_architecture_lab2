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
function transform_part_two(originStr: string): string {
    let cur: string[] = []
    let cache: string[] = originStr.split('\n')
    let lineCnt = cache.length
    function compare(a: string, b: string): number {
        console.log(a, b)
        let compareValue = 0
        if (a && b) {
            let line1C = a.toLowerCase().charCodeAt(0)
            let line2C = b.toLowerCase().charCodeAt(0)
            compareValue = line1C - line2C
        }

        returncompareValue
    }
    for (let i = 0; i < lineCnt; i++) {
        cur.push(cache[i])
        cur.sort(compare)
    }
    return cur
}
export function shift(originStr: string): string {
    let transformed: string = transform_part_one(originStr)
    let res = transform_part_two(transformed)
    return res
}