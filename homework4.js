const fs = require('fs-extra')

const dir1 = 'first'
const desiredMode = 0o2775
const file1 = 'first/file.txt'
const dir2 = 'second'
const file2 = 'second/file.txt'
const dir3 = 'third'

fs.mkdirpSync(dir1, desiredMode);
fs.ensureFileSync(file1);
fs.ensureDirSync(dir2, desiredMode);
fs.ensureFileSync(file2);
fs.moveSync(file1, file2, { overwrite: true });
fs.ensureDirSync(dir3, desiredMode);
fs.copySync(dir2,dir3);
fs.emptyDir(dir2);fs.emptyDir(dir3);
fs.remove(dir1);fs.remove(dir2);fs.remove(dir3);