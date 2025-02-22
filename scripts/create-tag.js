import { execSync } from 'child_process';
import fs from 'fs';

function getCurrentVersion() {
  const tags = execSync('git tag -l "v*"').toString().trim().split('\n');
  if (!tags[0]) return 'v1.0.0';
  
  const latest = tags.sort((a, b) => {
    return b.localeCompare(a, undefined, { numeric: true });
  })[0];
  
  const [major, minor, patch] = latest.substring(1).split('.').map(Number);
  return `v${major}.${minor}.${patch + 1}`;
}

function createTag() {
  const newVersion = getCurrentVersion();
  execSync(`git tag -a ${newVersion} -m "Release ${newVersion}"`);
  execSync(`git push origin ${newVersion}`);
  
  fs.writeFileSync('./version.txt', newVersion);
  
  console.log(`Tag ${newVersion} criada e publicada com sucesso!`);
  return newVersion;
}

export { createTag }; 