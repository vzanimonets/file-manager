# file-manager

- After starting the program displays the following text in the console (`Username` is equal to value that was passed on application start in `--username` CLI argument)  
  `Welcome to the File Manager, Username!`  
- After program work finished (`ctrl + c` pressed or user sent `.exit` command into console) the program displays the following text in the console  
    `Thank you for using File Manager, Username, goodbye!`  
- At the start of the program and after each end of input/operation current working directory should be printed in following way:  
    `You are currently in path_to_working_directory` 
- Starting working directory is current user's home directory (for example, on Windows it's something like `system_drive/Users/Username`)
- By default program should prompt user in console to print commands and wait for results 
- User can't go upper than root directory (e.g. on Windows it's current local drive root). If user tries to do so, current working directory doesn't change  