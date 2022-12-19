import { createReadStream } from 'node:fs'

const cat = path_to_file => {
	const readStream = createReadStream(path_to_file)

	readStream.on('data', chunk => {
		console.log(chunk.toString())
	})
}
export { cat }
