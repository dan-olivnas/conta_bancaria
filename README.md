⚡ Zapdos Bank ⚡  

Sistema de simulação bancária desenvolvido em **TypeScript**, com funcionalidades para gerenciamento de contas correntes e poupança.  

# Funcionalidades: 

O sistema permite:  
- Criar novas contas (Corrente ou Poupança)  
- Listar todas as contas cadastradas  
- Consultar conta por número  
- Atualizar dados de uma conta  
- Excluir contas  
- Realizar **saques**  
- Realizar **depósitos**  
- Fazer **transferências** entre contas  

# Tecnologias utilizadas:  

- **TypeScript**  
- **Node.js**  
- **readline-sync** (entrada de dados pelo console)  

# Estrutura do Projeto  

```
├── src
│   ├── controller
│   │   └── ContaController.ts
│   ├── model
│   │   ├── Conta.ts
│   │   ├── ContaCorrente.ts
│   │   └── ContaPoupanca.ts
│   └── util
│       └── Colors.ts
├── index.ts (arquivo principal)
```

# Como executar o projeto  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/dan-olivnas/conta_bancaria.git
   ```

2. Acesse a pasta do projeto:  
   ```bash
   cd conta_bancaria
   ```

3. Instale as dependências:  
   ```bash
   npm install
   ```

4. Compile o TypeScript:  
   ```bash
   tsc
   ```

5. Execute o programa:  
   ```bash
   node dist/index.js
   ```

# Menu Principal  

Ao executar, o sistema exibe o menu:  

```
*****************************************************
                 ⚡ ZAPDOS BANK ⚡
*****************************************************
1 - Criar nova conta
2 - Listar todas as contas
3 - Buscar conta por número
4 - Atualizar os dados da conta
5 - Exclusão de conta
6 - Saques
7 - Depósitos
8 - Transferências
9 - Sair
*****************************************************
```

# Autora  

Projeto desenvolvido por **Dandara Nascimento**  
- Generation Brasil  
- 📧 Email: dandaran@genstudents.org  
- 🔗 GitHub: [dan-olivnas](https://github.com/dan-olivnas/conta_bancaria)  
