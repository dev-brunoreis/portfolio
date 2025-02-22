import { execSync } from 'child_process';
import { createTag } from './create-tag.js';

async function deploy() {
  try {
    const version = createTag();
    
    // Adiciona e commita o arquivo version.txt
    execSync('git add version.txt');
    execSync('git commit -m "chore: update version"');
    execSync('git push');

    console.log('Iniciando deploy...');
    execSync('wrangler pages deploy', { stdio: 'inherit' });
    
    console.log(`Deploy concluído com sucesso! Versão: ${version}`);
  } catch (error) {
    console.error('Erro no deploy:', error.message);
    process.exit(1);
  }
}

deploy(); 