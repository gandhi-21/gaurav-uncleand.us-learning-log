#!/bin/sh

echo "Emptying the trash folder"

empty_trash() {
    cd 
    rm -rf .custom_trash
}

if [ -d ~/.custom_trash ]
then
    empty_trash
fi

echo "Trash folder is empty"