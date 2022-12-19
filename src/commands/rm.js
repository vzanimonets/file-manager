import { rm as _rm, stat, unlink } from 'node:fs/promises'

const rm = async path => {
	const _path = await stat(path)

	if (_path.isFile()) {
		await unlink(path)
	} else {
		await _rm(path, { recursive: true })
	}
}
export { rm }
