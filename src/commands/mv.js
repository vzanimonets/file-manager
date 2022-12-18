import { createReadStream, createWriteStream } from 'node:fs'
import { basename, join } from 'path'
import { stat } from 'node:fs/promises'
import { rm } from './index.js'

const mv = async (from, to) => {

		await stat(from)
		await stat(to)

		const fileName = basename(from)
		const readStream = createReadStream(from)

		const writeStream = createWriteStream(join(to, fileName))

		writeStream.on('close', async () => await rm(from))

		readStream.pipe(writeStream)

}
export { mv }
