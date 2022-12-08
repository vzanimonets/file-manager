import * as os from 'os'

import { cd, ls, up } from './commands/index.js'

import * as constants from './constants/index.js'

const homedir = os.homedir()

process.chdir(homedir)

const parseArgs = arg =>
	process.argv
		.slice(2)
		.map(str => {
			if (str.includes(arg)) {
				return str.slice(arg.length + 1)
			}
		})
		.join('')

const checkInput = async cmd => {
	switch (cmd) {
		case 'up':
			await up()
			break
		case 'cd':
			await cd()
			break
		case 'ls':
			await ls()
			break
		case 'cat':
			return
		case 'add':
			return
		case 'rn':
			return
		case 'cp':
			return
		case 'mv':
			return
		case 'rm':
			return
		case 'os':
			return
		case 'hash':
			return
		case 'compress':
			return
		case 'decompress':
			return
		default:
			console.log(constants.OPERATION_ERROR_MESSAGE)
	}
	console.log(`You are currently in ${process.cwd()}`)
}

async function init() {
	const argVal = parseArgs('--username')
	const userName = argVal ? argVal : 'mr Someone'

	process.stdout.write(`Welcome to the File Manager, ${userName}!\n`)

	process.stdin.on('data', data => {
		if (data.toString().includes('.exit')) process.exit(0)
		checkInput(data.toString().trim())
	})

	process.on('exit', data => {
		process.exit(0)
	})

	process.on('SIGINT', () => {
		process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!`)
	})
}
await init()