import { chdir } from 'node:process'
import * as path from 'path'

import { FS_ERROR_MESSAGE } from '../constants/index.js'

//TODO: move this function from this file
const getRootDir = () => path.parse(process.cwd()).root

const up = async () => {
	try {
		const root = getRootDir()
		if (process.cwd() !== root) {
			chdir('..')
		}
	} catch (error) {
		throw new Error(FS_ERROR_MESSAGE)
	}
}
export { up }
