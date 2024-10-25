
async function tree(dir: string): Promise<string[]> {
  let files: string[] = [];
  for await (const dirEntry of Deno.readDir(dir)) {
    if (dirEntry.isDirectory) {
      tree(`${dir}/${dirEntry.name}`);
    } else {
      files.push(`${dir}/${dirEntry.name}`);
    }

  }
  return files;
}

const results = await tree(".");
console.log(results);
