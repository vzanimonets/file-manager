import { readFile } from 'node:fs/promises'

import { FS_ERROR_MESSAGE } from '../constants/index.js'

const cat = async path_to_file => {
	try {
		console.log(path_to_file.toString())
		const file_content = await readFile(path_to_file)
		console.log(file_content.toString())
	} catch (error) {
		console.error(FS_ERROR_MESSAGE)
		//throw new Error(FS_ERROR_MESSAGE)
	}
}
export { cat }
