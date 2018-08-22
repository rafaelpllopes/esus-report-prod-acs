const dao = require('../models/esus-dao');

module.exports = app => {
    app.route('/producao')
        .get(async (req, res) => {
            let { mes, ano, unidade } = req.query;
            const dados = await dao.getProducaoUnidadePeriodo(mes, ano, unidade);
            if (dados) {
                res.status(200).json(dados);
            } else {
                res.status(401).json({ message: "Não encontrado" });
            }
        });

    app.route('/producao2')
        .get(async (req, res) => {
            let { mes, ano, profissional } = req.query;
            const dados = await dao.getProducaoProfissionalPeriodo(mes, ano, profissional);
            if (dados) {
                res.status(200).json(dados);
            } else {
                res.status(401).json({ message: "Não encontrado" });
            }
        });

    app.route('/unidades')
        .get(async (req, res) => {
            const dados = await dao.getUnidades();
            if (dados) {
                res.status(200).json(dados);
            } else {
                res.status(401).json({ message: "Não encontrado" });
            }
        });

    app.route('/profissionais')
        .get(async (req, res) => {
            const dados = await dao.getProfissionais();
            if (dados) {
                res.status(200).json(dados);
            } else {
                res.status(401).json({ message: "Não encontrado" });
            }
        });
}