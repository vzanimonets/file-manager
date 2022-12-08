import { readdir } from 'node:fs/promises'

import { FS_ERROR_MESSAGE } from '../constants/index.js'

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
		throw new Error(FS_ERROR_MESSAGE)
	}
}

export { ls }
