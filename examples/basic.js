/*
 *  Basic example of commander.js with rupa formatter.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

// create a new command using commander.js
const program = new Command()

// setup program details
program.name('basic')
program.version('0.0.0')

// show help if no command is provided
program.action(() => {
    program.help()
})

// parse the command line arguments
await program.parseAsync(process.argv)

// try out:
// $ node examples/basic.js
// $ node examples/basic.js --help
