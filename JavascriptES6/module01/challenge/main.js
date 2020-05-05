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
    const arr = [1, 2, 3, 4, 5, 6];
    const [x, ...y] = arr;
    console.log(x);
    console.log(y);

    function soma(...params){
        return params.reduce((total, next) => total + next);
    }
    console.log(soma(1,1,1,1,1));

    const usuario1 = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
        }        
    };
    const usuario2 = { ...usuario1, nome:'Gabriel'};
    const usuario3 = { ...usuario1, endereco:{ ...usuario1.endereco, cidade:'Lontras' }};
    console.log(usuario1);
    console.log(usuario2);
    console.log(usuario3);

}

/**
 * Sexto exercício
 */
function sextoExercicio(){
    const usuario = 'Diego';
    const idade = 23;

    console.log(`O usuário ${usuario} possui ${idade} anos`);

}


/**
 * Sétimo exercício
 */
function setimoExercicio(){
    const nome = 'Diego';
    const idade = 23;

    const usuario = {
        nome,
        idade,
        cidade: 'Rio do Sul',
    }
    console.log(usuario);
}
setimoExercicio();