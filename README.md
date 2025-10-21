# 🚀 Guia de Início Rápido - IBank Investimentos

## ✅ Correções Realizadas
O projeto foi corrigido para garantir que o frontend e backend se comuniquem corretamente:

1. ✅ Nomes de campos padronizados (`investment_date`, `created_at`, `updated_at`)
2. ✅ Tipo de dados correto (`amount` agora é número)
3. ✅ Conversão automática de dados no formulário
4. ✅ CORS habilitado no backend
5. ✅ Validações sincronizadas

## 🎯 Iniciar o Projeto (2 passos)

### Passo 1: Iniciar o Backend
```bash
cd "Back-End---GF"
npm install
npm start
```
✅ Backend rodando em: **http://localhost:3000**

### Passo 2: Iniciar o Frontend (em outro terminal)
```bash
cd "Front-End---GF"
npm install
npm run dev
```
✅ Frontend rodando em: **http://localhost:8080**

## 🧪 Testar a Aplicação

1. Abra seu navegador em: http://localhost:8080
2. Clique em **"Novo Investimento"** ou na aba **"Cadastrar"**
3. Preencha o formulário:
   - **Nome:** "Meu Primeiro Investimento"
   - **Tipo:** Escolha "Ações"
   - **Valor:** Digite 1000,00
   - **Data:** Selecione a data de hoje
4. Clique em **"Cadastrar Investimento"**
5. ✅ Você verá uma mensagem de sucesso!

## 📊 Recursos Disponíveis

### 🏠 Visão Geral
- Dashboard com estatísticas
- Gráfico de distribuição por tipo
- Resumo da carteira

### ➕ Cadastrar
- Formulário para novo investimento
- Validação em tempo real
- Formatação automática de valores

### 📋 Listar
- Tabela com todos os investimentos
- Opções de editar e excluir
- Totalizadores

## 🔧 Testar Conexão com Banco de Dados

```bash
cd "Back-End---GF"
npm test
```

Isso verificará se a conexão com o Supabase está funcionando.

## 📚 Documentação da API

Acesse: **http://localhost:3000/docs**

Você verá a documentação Swagger com todos os endpoints disponíveis.

## 🎨 Campos do Formulário

| Campo | Tipo | Exemplo | Obrigatório |
|-------|------|---------|-------------|
| Nome | Texto | "Ações Magazine Luiza" | Sim |
| Tipo | Seleção | "Ações" | Sim |
| Valor | Número | 1500.50 | Sim (> 0) |
| Data | Data | 2025-10-21 | Sim |

## 🆘 Problemas Comuns

### ❌ "Erro ao carregar investimentos"
**Solução:** Verifique se o backend está rodando na porta 3000

### ❌ "Erro ao cadastrar investimento"
**Solução:** 
1. Abra o console do navegador (F12)
2. Veja a mensagem de erro detalhada
3. Verifique se todos os campos estão preenchidos

### ❌ Página em branco
**Solução:** 
1. Verifique se o frontend está rodando na porta 8080
2. Limpe o cache do navegador (Ctrl+Shift+Delete)

## 📱 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/investments` | Lista todos |
| GET | `/investments/:id` | Busca por ID |
| POST | `/investments` | Cria novo |
| PUT | `/investments/:id` | Atualiza |
| DELETE | `/investments/:id` | Remove |
| GET | `/investments/types/distribution` | Distribuição por tipo |

## 🎯 Exemplo de Requisição

### Criar Investimento
```bash
curl -X POST http://localhost:3000/investments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ações Petrobras",
    "type": "Ações",
    "amount": 2500.00,
    "investment_date": "2025-10-21"
  }'
```

## 🌟 Tipos de Investimento Disponíveis

- 📈 Ações
- 💰 Renda Fixa
- 📊 Fundos
- 🪙 Criptomoedas
- 🏠 Imóveis
- 🥇 Commodities
- 📦 Outros

## 🔐 Banco de Dados

O projeto usa **Supabase** (PostgreSQL na nuvem):
- Já está configurado e pronto para uso
- Tabela `investments` já existe
- Sem necessidade de configuração adicional

## 📞 Suporte

Se encontrar problemas:
1. Verifique os arquivos `INSTRUÇÕES.md` e `RESUMO_CORREÇÕES.md`
2. Verifique os logs no terminal do backend
3. Verifique o console do navegador (F12) no frontend

## ✨ Próximos Passos

Depois de testar:
1. ✅ Cadastre alguns investimentos
2. ✅ Veja o gráfico de distribuição
3. ✅ Teste editar um investimento
4. ✅ Teste excluir um investimento
5. ✅ Explore a documentação da API

---

**Projeto corrigido e pronto para uso! 🎉**

