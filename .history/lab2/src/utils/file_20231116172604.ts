const reader = new FileReader();

export const readCode = (filePath: Blob): string => {
    let code = ''
    try {
        reader.onload = (e) => {
            code = e?.target.result
            console.log(code)
        }
        reader.readAsText(filePath)
    } catch (e) {
        console.log(e)
    }

    return code
}