import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";

export function main() {

    // Instancia da Classe ContaController:
    let contas: ContaController = new ContaController();

    // Variáveis auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta corrente', 'Conta poupanca'];

console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();

while (true) {
console.log(colors.bg.black, colors.fg.yellow,
"*****************************************************");
console.log("                                                     ");
console.log("                 ⚡ ZAPDOS BANK ⚡                  ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Criar nova conta                     ");
console.log("            2 - Listar todas as contas               ");
console.log("            3 - Buscar conta por número              ");
console.log("            4 - Atualizar os dados da conta          ");
console.log("            5 - Exclusão de conta                    ");
console.log("            6 - Saques                               ");
console.log("            7 - Depósitos                            ");
console.log("            8 - Transferências                       ");
console.log("            9 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ",
colors.reset);
console.log("Entre com a opção desejada: ");
opcao = readlinesync.questionInt("");

if (opcao === 9) {
    console.log(colors.fg.yellow, '\n******************************************************** \nZAPDOS BANK - Voe alto com a nossa agilidade financeira!')
    sobre();
    console.log(colors.reset, "");
    process.exit(0);
}
  switch (opcao) {
    case 1:
    console.log(colors.fg.whitestrong, "\n\nCriar conta\n\n", colors.reset);

    console.log("Digite o número da agência: ");
    agencia = readlinesync.questionInt("");

    console.log("Digite o nome do titular da conta: ");
    titular = readlinesync.question("");

    console.log("\nDigite o tipo da conta: ");
    tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

    console.log("\nDigite o saldo da conta (R$):");
    saldo = readlinesync.questionFloat("");

    switch (tipo) {
    case 1:
        console.log("Digite o limite da conta (R$):");
        limite = readlinesync.questionFloat("");
        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo , titular, saldo, limite));
        break;
    case 2:
        console.log("Digite o dia do aniversário da conta poupança: ");
        aniversario = readlinesync.questionInt("");
        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
        break;
    }
    keyPress()
    break;

    case 2:
    console.log(colors.fg.whitestrong, "\n\nListar todas as contas\n\n", colors.reset);

    contas.listarTodas();

    keyPress()
    break;
 
    case 3:
    console.log(colors.fg.yellow,"\n\nConsultar os dados da conta - por número\n\n", colors.reset);
    
    console.log("Digite o número da conta: ");
    numero = readlinesync.questionInt("");
    contas.procurarPorNumero(numero);

    keyPress()
    break;
    
    case 4:
    console.log(colors.fg.yellow,"\n\nAtualizar os dados da conta\n\n", colors.reset);
    
    keyPress()
    break;
            
    case 5:
    console.log(colors.fg.yellow,"\n\nExclusão de conta\n\n", colors.reset);
    
    keyPress()          
    break;
            
    case 6:
    console.log(colors.fg.yellow,"\n\nSaques\n\n", colors.reset);
    
    keyPress()
    break;
            
    case 7:
    console.log(colors.fg.yellow, "\n\nDepósitos\n\n", colors.reset);
    
    keyPress()
    break;
            
    case 8:
    console.log(colors.fg.yellow, "\n\nTransferências\n\n", colors.reset);
    
    keyPress()
    break;
    default:
    
    console.log(colors.fg.yellow, "\n\nOpção inválida!\n\n", colors.reset);
    
    keyPress()
    break;
        }
    }
}
export function sobre(): void {
    console.log("********************************************************");
    console.log("Projeto Desenvolvido por: Dandara Nascimento");
    console.log("Generation Brasil - dandaran@genstudents.org");
    console.log("github.com/dan-olivnas/conta_bancaria");
    console.log("********************************************************");
}
function keyPress(): void {
   console.log(colors.reset, "");
   console.log("\nPressione enter para continuar...");
   readlinesync.prompt();
}
main();