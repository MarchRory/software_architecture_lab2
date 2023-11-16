import { readFile } from "./request";
const reader = new FileReader();

export const readCode = (filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        readFile(filePath)
            .then((res) => {
                resolve(res as string);
            })
    })
}