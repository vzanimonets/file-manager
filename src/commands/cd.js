import {chdir} from 'node:process'

import { FS_ERROR_MESSAGE } from '../constants/index.js'

const cd = async pathToDirectory => {
    try {
        await chdir(pathToDirectory)
    } catch (error) {
        throw new Error(FS_ERROR_MESSAGE)
    }
}
export {cd}