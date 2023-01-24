const fs = require('fs-extra')

const dir1 = '/users/svetlanashcherbin/Desktop/first'
const file1 = '/users/svetlanashcherbin/Desktop/first/file.txt'
const dir2 = '/users/svetlanashcherbin/Desktop/second'
const file2 = '/users/svetlanashcherbin/Desktop/second/file.txt'
const dir3 = '/users/svetlanashcherbin/Desktop/third'

fs.ensureDirSync(dir1);
fs.ensureFileSync(file1);
fs.ensureDirSync(dir2);
fs.ensureFileSync(file2);
fs.moveSync(file1, file2, { overwrite: true });
fs.ensureDirSync(dir3);
fs.copySync(dir2,dir3);
fs.emptyDir(dir1,dir2,dir3 );
fs.remove(dir1,dir2,dir3);