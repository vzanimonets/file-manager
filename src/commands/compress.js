import { createReadStream, createWriteStream } from 'node:fs'
import { createBrotliCompress } from 'node:zlib'
import { stat } from 'node:fs/promises'

const compress = async (input, output) => {
	await stat(input)

	const readStream = createReadStream(input)
	const writeStream = createWriteStream(output)
	const brotli = createBrotliCompress()

	const stream = await readStream.pipe(brotli).pipe(writeStream)

	stream.on('finish', () => {
		console.log('Compressing is done!')
	})
}
export { compress }
