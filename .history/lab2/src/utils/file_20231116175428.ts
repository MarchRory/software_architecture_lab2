import { readFile } from "./request";
const reader = new FileReader();

export const readCode = (filePath: string): Promise<string> => {
    return readFile(filePath)
}