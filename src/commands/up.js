import { chdir } from 'node:process'
import path from 'path'

const up = async () => {
	const root = path.parse(process.cwd()).root
	if (process.cwd() !== root) {
		chdir('..')
	}
}
export { up }
