import { writeFile } from 'node:fs/promises'

const add = async filename => {
	await writeFile(filename, '', { flag: 'wx' })
}
export { add }
