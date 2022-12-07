import { chdir } from 'node:process'
import * as path from 'path'

//TODO: move this function from this file
const getRootDir = () => path.parse(process.cwd()).root

const up = async () => {
	try {
		const root = getRootDir()
		if (process.cwd() !== root) {
			chdir('..')
		}
	} catch (error) {
		throw new Error('Operation failed')
	}
}
export { up }
