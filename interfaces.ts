interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUSer(): Usuario{
    return {
        nome: 'Edney',
        email: 'edney@algumlugar.com'
    }
}

function putUser(user: Usuario){
    // ....
}