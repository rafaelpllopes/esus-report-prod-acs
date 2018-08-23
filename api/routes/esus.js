const dao = require('../models/esus-dao');

module.exports = app => {
    app.route('/producao')
        .get(async (req, res) => {
            let { mes, ano, unidade, profissional } = req.query;
            let dados;
            if(unidade) {
                dados = await dao.getProducaoUnidadePeriodo(mes, ano, unidade);
            }

            if(profissional) {
                dados = await dao.getProducaoProfissionalPeriodo(mes, ano, profissional);
            }
            
            if (dados && dados.length > 0) {
                res.status(200).json(dados);
            } else {
                res.status(404).json({ message: "Não encontrado" });
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
                res.status(404).json({ message: "Não encontrado" });
            }
        });
}