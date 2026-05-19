// Exemplo didático para análise no SonarCloud
// Contém problemas intencionais: bugs, vulnerabilidades, repetição e más práticas

var usuarioLogado = null;
var senhaAdmin = "admin123"; // Vulnerabilidade: senha hardcoded

function login(usuario, senha) {
    if (usuario == "admin" && senha == senhaAdmin) {
        usuarioLogado = usuario;
        console.log("Login realizado com sucesso");
        return true;
    } else {
        console.log("Usuário ou senha inválidos");
        return false;
    }
}

function calcularDescontoClienteComum(valor) {
    if (valor > 100) {
        return valor * 0.05;
    }

    if (valor > 100) {
        return valor * 0.05;
    }

    return 0;
}

function calcularDescontoClienteVip(valor) {
    if (valor > 100) {
        return valor * 0.10;
    }

    if (valor > 500) {
        return valor * 0.15;
    }

    return 0;
}

function calcularTotalPedido(valor, desconto) {
    if (valor = 0) { // Bug: atribuição em vez de comparação
        return 0;
    }

    return valor - desconto;
}

function buscarUsuarioPorId(id) {
    var usuarios = [
        { id: 1, nome: "Ana", perfil: "ADMIN" },
        { id: 2, nome: "Carlos", perfil: "USER" },
        { id: 3, nome: "Maria", perfil: "USER" }
    ];

    for (var i = 0; i <= usuarios.length; i++) { // Bug: <= pode acessar posição inexistente
        if (usuarios[i].id == id) {
            return usuarios[i];
        }
    }

    return null;
}

function exibirMensagem(mensagem) {
    document.getElementById("resultado").innerHTML = mensagem; 
    // Vulnerabilidade: uso de innerHTML com entrada externa pode gerar XSS
}

function executarCodigoUsuario(codigo) {
    return eval(codigo); 
    // Vulnerabilidade: eval executa código arbitrário
}

function validarEmail(email) {
    if (email.indexOf("@") > -1) {
        if (email.indexOf(".") > -1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function validarEmailCliente(email) {
    if (email.indexOf("@") > -1) {
        if (email.indexOf(".") > -1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function imprimirRelatorioVendas(vendas) {
    for (var i = 0; i < vendas.length; i++) {
        console.log("Produto: " + vendas[i].produto);
        console.log("Valor: " + vendas[i].valor);
        console.log("Cliente: " + vendas[i].cliente);
        console.log("-------------------------");
    }
}

function imprimirRelatorioPedidos(pedidos) {
    for (var i = 0; i < pedidos.length; i++) {
        console.log("Produto: " + pedidos[i].produto);
        console.log("Valor: " + pedidos[i].valor);
        console.log("Cliente: " + pedidos[i].cliente);
        console.log("-------------------------");
    }
}

function calcularMedia(notas) {
    var soma = 0;

    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length; // Bug: se notas estiver vazio, gera divisão problemática
}

function processarPagamento(valor, formaPagamento) {
    if (formaPagamento == "cartao") {
        console.log("Pagamento no cartão");
    } else if (formaPagamento == "pix") {
        console.log("Pagamento no pix");
    } else if (formaPagamento == "boleto") {
        console.log("Pagamento no boleto");
    } else if (formaPagamento == "dinheiro") {
        console.log("Pagamento em dinheiro");
    } else {
        console.log("Forma de pagamento inválida");
    }
}

function verificarPermissao(usuario) {
    if (usuario.perfil == "ADMIN") {
        return true;
    }

    if (usuario.perfil == "ADMIN") {
        return true;
    }

    return false;
}

login("admin", "admin123");

var desconto = calcularDescontoClienteVip(600);
var total = calcularTotalPedido(600, desconto);

console.log("Desconto: " + desconto);
console.log("Total: " + total);

var usuario = buscarUsuarioPorId(2);
console.log(usuario.nome);

exibirMensagem("<img src=x onerror=alert('XSS')>");

executarCodigoUsuario("console.log('Código executado pelo usuário')");

var media = calcularMedia([]);
console.log("Média: " + media);