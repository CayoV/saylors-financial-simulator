
function calcularFaturamento (alunos,mensalidade) {
    return (alunos * mensalidade);
}
function calcularDesconto (mensalidade, desconto) {
    return (mensalidade * (desconto / 100));
}
function somaTripla (numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3);
}
function calcularFaturamentoLiquido (alunos, mensalidade, desconto){
    return (mensalidade - (mensalidade * (desconto / 100))) * alunos
}

const mensalidadeLive = 199;
const mensalidadeHybrid = 130;
const mensalidadeRecorded = 79;
const alunosLive = 12;
const alunosRecorded = 25;
const alunosHybrid = 8;
const descontoLive = 10;
const descontoHybrid = 15;

const faturamentoLive = calcularFaturamentoLiquido(alunosLive, mensalidadeLive, descontoLive);
const faturamentoRecorded = calcularFaturamento(alunosRecorded,mensalidadeRecorded);
const faturamentoHybrid = calcularFaturamentoLiquido(alunosHybrid, mensalidadeHybrid, descontoHybrid);

console.log(`
    ===== SAYLORS ENGLISH SCHOOL =====

    LIVE
    Alunos: ${alunosLive}
    Mensalidade: R$ ${mensalidadeLive.toFixed(2)}
    Faturamento Bruto: R$ ${calcularFaturamento(alunosLive,mensalidadeLive).toFixed(2)}
    Desconto: ${descontoLive} %
    Faturamento Líquido: R$ ${faturamentoLive.toFixed(2)}

    RECORDED
    Alunos: ${alunosRecorded}
    Mensalidade: R$ ${mensalidadeRecorded.toFixed(2)}
    Faturamento Bruto: R$ ${calcularFaturamento(alunosRecorded,mensalidadeRecorded).toFixed(2)}
    Desconto: 0 %
    Faturamento Líquido: R$ ${faturamentoRecorded.toFixed(2)}

    HYBRID
    Alunos: ${alunosHybrid}
    Mensalidade: R$ ${mensalidadeHybrid.toFixed(2)}
    Faturamento Bruto: R$ ${calcularFaturamento(alunosHybrid,mensalidadeHybrid).toFixed(2)}
    Desconto: ${descontoHybrid} %
    Faturamento Líquido: R$ ${faturamentoHybrid.toFixed(2)}

    ----------------------
    Total de alunos: ${somaTripla(alunosHybrid,alunosLive,alunosRecorded)}
    Faturamento mensal: R$ ${somaTripla(faturamentoLive,faturamentoHybrid,faturamentoRecorded).toFixed(2)}
    =================================
  `);