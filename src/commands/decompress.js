import { createReadStream, createWriteStream } from 'node:fs'
import { createBrotliDecompress } from 'node:zlib'
import { stat } from 'node:fs/promises'

const decompress = async (input, output) => {
	await stat(input)
	await stat(output)

	const readStream = createReadStream(input)
	const writeStream = createWriteStream(output)

	const brotli = createBrotliDecompress()

	const stream = readStream.pipe(brotli).pipe(writeStream)

	stream.on('finish', () => {
		console.log('Done decompressing')
	})
}
export { decompress }
