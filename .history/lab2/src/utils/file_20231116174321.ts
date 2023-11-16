import { readFile } from "./request";
const reader = new FileReader();

export const readCode = (filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        readFile(filePath)
            .then((res) => {
                console.log('fileContent: ', res)
                let blob = new Blob()
                try {
                    reader.onload = (e) => {
                        code = e?.target.result
                        console.log(code)
                        resolve(code)
                    }
                    reader.readAsText(filePath)
                } catch (e) {
                    console.log(e)
                }
            })
    })

}