const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um título de teste',
    descricao: 'Descrição criada!'
}).then(dados => console.log(dados))
  .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
}