import { stat } from 'node:fs/promises'
import { createReadStream } from 'node:fs'

const { createHash } = await import('node:crypto')

const hash = async pathToFile => {
		await stat(pathToFile)
		const hash = createHash('sha256')
		const input = createReadStream(pathToFile)
		input.on('readable', () => {
			const data = input.read()
			if (data) hash.update(data)
			else {
				console.log(`${hash.digest('hex')} `)
			}
		})
}

export { hash }
