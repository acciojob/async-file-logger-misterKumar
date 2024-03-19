//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

// do not change the code above
// add your code here
// Function to read the content of a file asynchronously
async function readFile(fileName) {
  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${fileName}`);
    }
    const content = await response.text();
    console.log(`${fileName}: ${content}`);
  } catch (error) {
    console.error(error);
  }
}

// Function to read content of all files asynchronously
async function readFiles() {
  await Promise.all(fileNames.map(fileName => readFile(fileName)));
}

// Call the function to read all files
readFiles();