import { readdir } from 'node:fs/promises'

const ERROR_MESSAGE = 'FS operation failed'

const getFileList = async dirName => {
	let files = []
	const items = await readdir(dirName, { withFileTypes: true })
	for (const item of items) {
		item.type = item.isDirectory() ? 'folder' : 'file'
		files.push(item)
	}
	return files
}

const sortFiles = (a, b) =>
	b.type.localeCompare(a.type) || a.name.localeCompare(b.name)

const ls = async () => {
	const folder = process.cwd()
	try {
		const files = await getFileList(folder)
		const sorted = files.sort(sortFiles)
		console.table(sorted)
	} catch (e) {
		console.log(e)
		throw new Error(ERROR_MESSAGE)
	}
}

export { ls }
