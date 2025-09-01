import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

console.log("****************************************************");
console.log("                                                 ");
console.log("                ⚡ ZAPDOS BANK ⚡               ");
console.log("                                                 ");
console.log("****************************************************");
console.log("                                                 ");
console.log("             1 - Criar nova conta                ");
console.log("             2 - Listar todas as contas          ");
console.log("             3 - Buscar conta por número         ");
console.log("             4 - Atualizar os dados da conta     ");
console.log("             5 - Exclusão de conta               ");
console.log("             6 - Saques                          ");
console.log("             7 - Depósitos                       ");
console.log("             8 - Transferências                  ");
console.log("             9 - Sair                            ");
console.log("                                                 ");
console.log("****************************************************");
console.log("                                                 ");
console.log("Entre com a opção desejada: ");

opcao = readlinesync.questionInt("");

if (opcao ==9) {
    console.log('\n******************************************************** \nZAPDOS BANK - Voe alto com a nossa agilidade financeira!')
    sobre();
    process.exit(0);
}

switch (opcao) {
            case 1:
                console.log("\n\nCriar nova conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar os dados da conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar os dados da conta\n\n");

                break;
            case 5:
                console.log("\n\nExclusão de conta\n\n");

                break;
            case 6:
                console.log("\n\nSaques\n\n");

                break;
            case 7:
                console.log("\n\nDepósitos\n\n");

                break;
            case 8:
                console.log("\n\nTransferências\n\n");
                console.log("A velocidade de um raio para fazer suas transferências.\n");

                break;
            default:
                console.log("\n\nOpção inválida!\n\n");
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
