# Linux Fundamentals Course

## Better rm command for bash
The above scripts can be used to simulate a trash folder in the linux system and ensure that there are no accidental deletions.

## To use the commands
* Clone this repository
* Add the path to the cloned repository in your shell $PATH
* Make alias so that remove commands use the trash scripts and no work is lost!

### Alias recommended
alias remove="trash.sh"

alias remove-empty="trash_empty.sh"

alias remove-view="trash_view.sh"

## Usage
After configuring using the steps given, these are the usage for this script

### remove file_name
This removes a file and moves it to the trash folder located in ~/.custom_trash

### remove-empty
This empties the ~/.custom_trash directory

### remove-view
This shows the contents of the current ~/.custom_trash directory


### References
* Zsh
  * [Getting started with Zsh shell (and Oh My Zsh)](https://blog.codefor.cash/2020/04/19/so-long-and-thanks-for-all-the-zsh/)
* Vim
  * [7 Vim Tips](https://www.freecodecamp.org/news/7-vim-tips-that-changed-my-life/)
* Linux / Mac OS
  * [Linux/Mac Tutorials with Corey Schafer](https://www.youtube.com/watch?v=j6vKLJxAKfw&list=PL-osiE80TeTvGhHkpvfmKWOiIPF8UVy6c)
