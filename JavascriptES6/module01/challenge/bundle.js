"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario() {
    var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var senha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var admin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = admin;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var user1 = new Usuario('lino@lino.com', '123');
var adm1 = new Admin('admin@admin.com', 'q1w2e3r4');
/**
 * Primeiro exercício
 */

function primeiroExercicio() {
  console.log(user1.isAdmin());
  console.log(adm1.isAdmin());
}
/**
 * Segundo exercício
 */


function segundoExercicio() {
  var usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
  }, {
    nome: 'Gabriel',
    idade: 15,
    empresa: 'Rocketseat'
  }, {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
  }];
  var idades = usuarios.map(function (usuario) {
    return usuario.idade;
  });
  console.log(idades);
  var maiores = usuarios.filter(function (usuario) {
    if (usuario.idade > 18) {
      return usuario;
    }
  });
  console.log(maiores);
  var googleemployee = usuarios.find(function (usuario) {
    return usuario.empresa === 'Google';
  });
  console.log(googleemployee);
}
/**
 * Terceiro exercício
 */


function terceiroExercicio() {
  var arr = [1, 2, 3, 4, 5];
  arr.map(function (item) {
    return item + 10;
  });
  console.log(arr);
  var usuario = {
    nome: 'Diego',
    idade: 23
  };

  var mostraIdade = function mostraIdade() {
    return usuario.idade;
  };

  console.log(mostraIdade());
  var nome = "Diego";
  var idade = 23;

  var mostraUsuario = function mostraUsuario() {
    var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
    var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
    return {
      nome: nome,
      idade: idade
    };
  };

  console.log(mostraUsuario(nome, idade));
  console.log(mostraUsuario(nome));

  var promise = function promise() {
    return new Promise(function (resolve, reject) {
      return resolve();
    });
  }; //const promise = function() {  return new Promise(function(resolve, reject) { return resolve(); })}


  console.log(promise);
}
/**
 * Quarto exercício
 */


function quartoExercicio() {
  var empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC'
    }
  };
  var nome = empresa.nome,
      cidade = empresa.endereco.cidade,
      estado = empresa.endereco.estado;
  console.log(nome);
  console.log(cidade);
  console.log(estado);
  var usuario = {
    nome: 'Diego',
    idade: 23
  };

  function mostraInfo(usuario) {
    var nome = usuario.nome,
        idade = usuario.idade;
    return "".concat(nome, " tem ").concat(idade, " anos.");
  }

  console.log(mostraInfo(usuario));
}
/**
 * Quinto exercício
 */


function quintoExercicio() {
  var arr = [1, 2, 3, 4, 5, 6];
  var x = arr[0],
      y = arr.slice(1);
  console.log(x);
  console.log(y);

  function soma() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return params.reduce(function (total, next) {
      return total + next;
    });
  }

  console.log(soma(1, 1, 1, 1, 1));
  var usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil'
    }
  };

  var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
    nome: 'Gabriel'
  });

  var usuario3 = _objectSpread(_objectSpread({}, usuario1), {}, {
    endereco: _objectSpread(_objectSpread({}, usuario1.endereco), {}, {
      cidade: 'Lontras'
    })
  });

  console.log(usuario1);
  console.log(usuario2);
  console.log(usuario3);
}
/**
 * Sexto exercício
 */


function sextoExercicio() {
  var usuario = 'Diego';
  var idade = 23;
  console.log("O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
}
/**
 * Sétimo exercício
 */


function setimoExercicio() {
  var nome = 'Diego';
  var idade = 23;
  var usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul'
  };
  console.log(usuario);
}

setimoExercicio();
