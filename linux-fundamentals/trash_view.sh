#!/bin/sh

echo "Showing the contents of the trash folder"

view_trash() {
    cd ~/.custom_trash
    ls -l
}

if [ ! -d ~/.custom_trash ]
then
    mkdir ~/.custom_trash
fi

view_trash