exports.sendForm = (req, res) => {
    res.send(`Formulario enviado com o nome de: ${req.body.nome}`);
}