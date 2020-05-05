class Usuario{
    constructor(email = '', senha = '', admin=false){
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const user1 = new Usuario('lino@lino.com', '123');
const adm1 = new Admin('admin@admin.com', 'q1w2e3r4');

/**
 * Primeiro exercício
 */
function primeiroExercicio(){
    console.log(user1.isAdmin());
    console.log(adm1.isAdmin());
}


/**
 * Segundo exercício
 */
function segundoExercicio(){
    const usuarios = [
        { nome:'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome:'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome:'Lucas', idade: 30, empresa: 'Facebook' },
    ];
    
    const idades = usuarios.map(function(usuario){
        return usuario.idade;
    });
    console.log(idades);
    
    const maiores = usuarios.filter(function(usuario){
        if (usuario.idade > 18){
            return usuario;
        }
    });
    console.log(maiores);
    
    const googleemployee = usuarios.find(function(usuario){
        return usuario.empresa === 'Google';
    });
    console.log(googleemployee);
}

/**
 * Terceiro exercício
 */
function terceiroExercicio(){
    const arr = [1, 2, 3, 4, 5];    
    arr.map( item => item + 10);
    console.log(arr);

    const usuario = { nome:'Diego', idade:23 };
    const mostraIdade = () => (usuario.idade);
    console.log(mostraIdade());

    const nome = "Diego";
    const idade = 23;
    const mostraUsuario = ( nome='Diego', idade=18) => ({ nome, idade });
    console.log(mostraUsuario(nome, idade));
    console.log(mostraUsuario(nome));

    
    const promise = () => (new Promise(
        (resolve, reject) => (resolve())
    ));
    //const promise = function() {  return new Promise(function(resolve, reject) { return resolve(); })}
    console.log(promise);

}

/**
 * Quarto exercício
 */
function quartoExercicio(){
    const empresa = {
        nome: 'Rocketseat',
        endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC',
        }
    };
    const { nome, endereco: { cidade }, endereco: { estado }} = empresa;
    console.log(nome);
    console.log(cidade);
    console.log(estado);

    const usuario = { nome:'Diego', idade:23 };
    function mostraInfo(usuario){
        const { nome, idade } = usuario;
        return `${nome} tem ${idade} anos.`;
    }
    console.log(mostraInfo(usuario));
}

/**
 * Quinto exercício
 */
function quintoExercicio(){

}
quintoExercicio();