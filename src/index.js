import os from 'os'

import * as constants from './constants/index.js'
import {
	add,
	cat,
	cd,
	compress,
	cp,
	decompress,
	hash,
	ls,
	mv,
	os as _os,
	rm,
	rn,
	up
} from './commands/index.js'

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

const checkInput = async (cmd, args) => {
	//TODO: need to refactor

	const [arg1, arg2] = args

	try {
		switch (cmd) {
			case 'up':
				await up()
				break
			case 'ls':
				await ls()
				break
			case 'cd':
				await cd(arg1)
				break
			case 'cat':
				cat(arg1)
				return
			case 'add':
				await add(arg1)
				return
			case 'rn':
				await rn(arg1, arg2)
				return
			case 'cp':
				await cp(arg1, arg2)
				return
			case 'mv':
				await mv(arg1, arg2)
				return
			case 'rm':
				await rm(arg1)
				return
			case 'os':
				_os(arg1)
				return
			case 'hash':
				await hash(arg1)
				return
			case 'compress':
				await compress(arg1, arg2)
				return
			case 'decompress':
				await decompress(arg1, arg2)
				break
			default:
				console.log(constants.INPUT_ERROR_MESSAGE)
		}
	} catch (e) {
		console.log(constants.OPERATION_ERROR_MESSAGE)
	}
	console.log(`You are currently in ${process.cwd()}`)
}

const parseParameters = str => {
	//TODO: need to refactor
	let arg1
	let arg2
	let endArg1Idx
	if (str.startsWith('"') || str.startsWith("'")) {
		const quotes = str[0]
		const firstQuotesIdx = str.indexOf(quotes)
		const secondQuotesIdx = str.indexOf(quotes, firstQuotesIdx + 1)

		arg1 = str.slice(firstQuotesIdx + 1, secondQuotesIdx)
		endArg1Idx = secondQuotesIdx + 1
	} else {
		arg1 = str.split(' ', 1).toString()
		endArg1Idx = arg1.length
	}
	const str2 = str.slice(endArg1Idx).trim()
	if (str2.startsWith('"') || str2.startsWith("'")) {
		const quotes = str2[0]
		const firstQuotesIdx = str2.indexOf(quotes)
		const secondQuotesIdx = str2.indexOf(quotes, firstQuotesIdx + 1)

		arg2 = str2.slice(firstQuotesIdx + 1, secondQuotesIdx)
	} else {
		arg2 = str2
	}
	return [arg1, arg2]
}

async function init() {
	const argVal = parseArgs('--username')
	const userName = argVal ? argVal : 'mr Someone'

	process.stdout.write(`Welcome to the File Manager, ${userName}!\n`)
	process.stdout.write(`You are currently in ${process.cwd()}\n`)

	process.stdin.on('data', data => {
		if (data.toString().includes('.exit')) process.exit(0)

		const inputStr = data.toString().trim()
		if (inputStr.includes('.exit')) process.exit(0)

		const cmd = inputStr.split(' ', 1).toString()
		const argsStr = inputStr.split(' ').slice(1).join(' ').trim()
		const args = parseParameters(argsStr)

		checkInput(cmd, args)
	})

	process.on('exit', data => {
		console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
		process.exit(0)
	})

	process.on('SIGINT', () => {
		process.stdout.write(
			`Thank you for using File Manager, ${userName}, goodbye!`
		)
	})
}

await init()
