import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

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

if (opcao ==9) {
    console.log(colors.fg.yellow,        '\n******************************************************** \nZAPDOS BANK - Voe alto com a nossa agilidade financeira!')
    sobre();
    console.log(colors.reset, "");
    process.exit(0);
}

switch (opcao) {
            case 1:
                console.log(colors.fg.yellow,
                    "\n\nCriar nova conta\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.yellow,
                    "\n\nListar todas as contas\n\n", colors.reset);
                keyPress()
                break;
            case 3:
                console.log(colors.fg.yellow,
                    "\n\nConsultar os dados da conta - por número\n\n", colors.reset);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.yellow,
                    "\n\nAtualizar os dados da conta\n\n", colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.yellow,
                    "\n\nExclusão de conta\n\n", colors.reset);
                keyPress()          
                break;
            case 6:
                console.log(colors.fg.yellow,
                    "\n\nSaques\n\n", colors.reset);
                keyPress()
                break;
            case 7:
                console.log(colors.fg.yellow,
                    "\n\nDepósitos\n\n", colors.reset);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.yellow,
                    "\n\nTransferências\n\n", colors.reset);
                keyPress()
                break;
            default:
                console.log(colors.fg.yellow,
                    "\n\nOpção inválida!\n\n", colors.reset);
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
   console.log("\nPress enter to continue...");
   readlinesync.prompt();
}

main();