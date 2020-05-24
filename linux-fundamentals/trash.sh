#!/bin/sh

file_name=$1

echo "Deleting file ${file_name}"

trash_file () {
    mv $file_name ~/.custom_trash/
    echo "Deleted the file"
}

if [ ! -d ~/.custom_trash ]
then
    echo "Making trash folder"
    mkdir ~/.custom_trash
fi

trash_file
