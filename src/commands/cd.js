import { chdir } from 'node:process'
import { sep } from 'path'

const cd = async pathToDirectory => {
	const _path =
		pathToDirectory.length === 2 && pathToDirectory.endsWith(':')
			? pathToDirectory.concat(sep)
			: pathToDirectory
	await chdir(_path)
}
export { cd }
