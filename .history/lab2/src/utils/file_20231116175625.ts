import { readFile } from "./request";
export const readCode = (filePath: string): Promise<string> => {
    return readFile(filePath)
}