import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

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

main();

function keyPress(): void {
   console.log(colors.reset, "");
   console.log("\nPress enter to continue...");
   readlinesync.prompt();
}
