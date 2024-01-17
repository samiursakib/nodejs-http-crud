import path from 'path';

const __filename = import.meta.filename;

console.log('dirname: ', path.dirname(__filename));
console.log('basename: ', path.basename(__filename));
console.log('basename: ', path.basename(__filename, path.extname(__filename)));
console.log('extname: ', path.extname(__filename));
console.log(path.delimiter);
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

const parsedFilepath = path.parse(import.meta.filename);
console.log(parsedFilepath);
console.log(path.format(parsedFilepath));

console.log(path.isAbsolute('/test/something'));
console.log(path.isAbsolute('./test/something'));

console.log(path.join('c:\\user', 'sakib', 'codefiles', '..', 'projects', './sample', 'new'));
console.log(path.normalize('c:\\user\\sakib\\projects\\sample\\..\\dew'));
console.log(path.normalize('c:/user/sakib/projects/sample/../dew'));

console.log(path.win32);

console.log(path.relative('/user/sakib/codefiles/htr/new/sample', '/user/sakib/projects/new/nodejs'));

console.log(path.resolve('www', './nodejs', 'files/important', '..', '', '.', 'image/animation.gif'));

console.log(__filename.split(path.sep));