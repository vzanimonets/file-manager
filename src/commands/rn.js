import { rename } from 'node:fs/promises'

const rn = async (from, to) => {
	await rename(from, to)
}
export { rn }
