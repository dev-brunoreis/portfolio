import { execSync } from 'child_process';
import { createTag } from './create-tag.js';

async function deploy() {
  try {
    const status = execSync('git status --porcelain').toString();
    if (status) {
      throw new Error('Existem mudanças não commitadas. Faça commit antes do deploy');
    }

    const version = createTag();

    console.log('Iniciando deploy...');
    execSync('wrangler pages deploy', { stdio: 'inherit' });
    
    console.log(`Deploy concluído com sucesso! Versão: ${version}`);
  } catch (error) {
    console.error('Erro no deploy:', error.message);
    process.exit(1);
  }
}

deploy(); 