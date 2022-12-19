import { createReadStream, createWriteStream } from 'node:fs'
import { basename, join } from 'path'
import { stat } from 'node:fs/promises'

const cp = async (from, to) => {
	await stat(from)
	await stat(to)

	const fileName = basename(from)
	const rStream = createReadStream(from)

	const wStream = createWriteStream(join(to, fileName))
	rStream.pipe(wStream)
}
export { cp }
