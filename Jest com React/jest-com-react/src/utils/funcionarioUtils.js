export function validarCPF(cpf) {

    //const cpfsInvalidos = ["11111111111", "22222222222"]


    if (typeof cpf !== 'string') {
        return false;
    }

    const cpfLimpo = cpf.replace(/\D/g, '')

    if (cpfLimpo.length !== 11 || /^(\d)\1+$/.test(cpfLimpo)) {
        return false
    }

    const calcDV = (base) => {
        let soma = 0;
        for (let i = 0; i < base.length; i++) {
            soma += parseInt(base[i]) * (base.length + 1 - i);
        }
        const resto = (soma * 10) % 11;
        return resto === 10 || resto === 11 ? 0 : resto;
    };

    const dv1 = calcDV(cpfLimpo.slice(0, 9));
    const dv2 = calcDV(cpfLimpo.slice(0, 10));

    return dv1 === parseInt(cpfLimpo[9]) && dv2 === parseInt(cpfLimpo[10]);

}