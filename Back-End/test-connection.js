// Script de teste para verificar conexão com Supabase e estrutura da tabela
const supabase = require('./supabaseClient');

async function testConnection() {
  console.log('🔍 Testando conexão com Supabase...\n');

  try {
    // Testa seleção de dados
    const { data, error } = await supabase
      .from('investments')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Erro ao conectar:', error.message);
      return;
    }

    console.log('✅ Conexão bem-sucedida!');
    console.log('\n📊 Estrutura esperada da tabela:');
    console.log({
      id: 'UUID (gerado automaticamente)',
      name: 'TEXT',
      type: 'TEXT',
      amount: 'NUMERIC ou REAL',
      investment_date: 'DATE',
      created_at: 'TIMESTAMP (gerado automaticamente)',
      updated_at: 'TIMESTAMP (gerado automaticamente)'
    });

    if (data && data.length > 0) {
      console.log('\n📝 Exemplo de registro:');
      console.log(JSON.stringify(data[0], null, 2));
    } else {
      console.log('\n⚠️  Tabela está vazia. Cadastre um investimento para testar.');
    }

    console.log('\n✨ Teste concluído!');
    process.exit(0);

  } catch (err) {
    console.error('❌ Erro inesperado:', err);
    process.exit(1);
  }
}

testConnection();

