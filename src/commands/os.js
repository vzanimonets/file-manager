import { cpus, EOL, homedir, userInfo } from 'os'

const os = args => {
	switch (args) {
		case '--EOL':
			return console.log(EOL)
		case '--cpus':
			return console.log(cpus())
		case '--homedir':
			return console.log(homedir())
		case '--username':
			return console.log(userInfo().username)
		case '--architecture':
			return console.log(process.arch)
	}
	return
}
export { os }
