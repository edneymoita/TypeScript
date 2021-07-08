var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 2021; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var Data2 = /** @class */ (function () {
    function Data2(dia, mes, ano) {
        if (ano === void 0) { ano = 2021; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data2;
}());
var data = new Data(7, 7, 2021);
var data2 = new Data(7, 7);
console.log(data.dia);
console.log(data.mes);
