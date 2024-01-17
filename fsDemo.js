import fs from 'fs/promises';
import path from 'path';

const textFilepath = './textContent.txt'

// reading content of file
try {
  const content = await fs.readFile(textFilepath, 'utf-8');
  console.log('# file reading ...');
  console.log(content);

  // writing content to another file
  try {
    console.log('# content writing ...');
    await fs.writeFile('./newTextContent.txt', content);
  } catch(e) {
    console.error(e);
  }
} catch(e) {
  console.error(e);
}

try {
  // await fs.appendFile(textFilepath, '\nextra text to add to the file...');
  console.log('text added');
} catch(e) {
  console.error(e);
}

try {
  const file = await fs.open(textFilepath);
  for await (const line of file.readLines()) {
    console.log('### Each and every line', line);
  }
} catch(e) {
  console.error(e);
}

// copying one file
try {
  await fs.copyFile(textFilepath, path.join(import.meta.dirname, 'new'));
  console.log('file copied');
} catch(e) {
  console.error(e);
}

//making directory
try {
  const dir = await fs.mkdir('./newDirectory');
  console.log('Created directory ', dir);
} catch(e) {
  console.error(e);
}

// opening directory
try {
  const directory = await fs.opendir('./');
  for await (const dirent of directory) {
    console.log(dirent);
  }
} catch(e) {
  console.error(e);
}

// renaming a file or directory
try {
  await fs.rename('textContent.txt', './content.txt');
  console.log('file renamed');
} catch(e) {
  console.error(e);
}

// removing a file or directory
try {
  await fs.rm('./newDirectory');
  console.log('file removed');
} catch(e) {
  console.error(e);
}