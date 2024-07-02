document.addEventListener('DOMContentLoaded', () => {

    function cadastro(evento) {
            evento.preventDefault();

            const mensagem = document.getElementById('envio');
            mensagem.innerText = "O cadastro foi realizado com sucesso!!";

            const form = document.getElementById('cadastroForm');
            form.reset();
        }

        document.getElementById('cadastroForm').addEventListener('submit', cadastro);
})

document.getElementById('cpf').addEventListener('input', function (e) {
    let cpf = e.target.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = cpf;
});

document.getElementById('numero').addEventListener('input', function (e) {
    let phone = e.target.value.replace(/\D/g, '');
    phone = phone.replace(/(\d{2})(\d)/, '($1) $2');
    phone = phone.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    e.target.value = phone;
});