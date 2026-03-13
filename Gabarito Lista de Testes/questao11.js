function validarEmail(email) {
    if (typeof email !== "string") {
        return false
    }

    const partes = email.split('@')

    if (partes.length !== 2) {
        return false
    }

    const [usuario, dominio] = partes
    if (usuario.length === 0) { return false }
    if (!dominio.includes('.')) { return false }

    return true
}