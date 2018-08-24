const dao = require('../models/esus-dao');

module.exports = app => {
    app.route('/producao')
        .get(async (req, res) => {
            let { mes, ano, unidade, profissional } = req.query;
            let dados;
            let erros = '';

            if (!mes) {
                erros += "mes, ";
            } else if (!ano) {
                erros += "ano, ";
            } else if (!unidade && !profissional) {
                erros += "unidade ou profissional ";
            }

            if (erros) {
                erros += "deve ser selecionado.";
                res.status(404).json({ message: erros });
            } else {
                if (unidade) {
                    dados = await dao.getProducaoUnidadePeriodo(mes, ano, unidade);
                } else if (profissional) {
                    dados = await dao.getProducaoProfissionalPeriodo(mes, ano, profissional);
                } else {
                    res.status(404).json({ message: "Parametro não enviado." });
                }

                if (dados && dados.length > 0) {
                    res.status(200).json(dados);
                } else {
                    res.status(404).json({ message: "Nada encontrado." });
                }
            }
        });

    app.route('/unidades')
        .get(async (req, res) => {
            const dados = await dao.getUnidades();
            if (dados) {
                res.status(200).json(dados);
            } else {
                res.status(401).json({ message: "Não encontrado." });
            }
        });

    app.route('/profissionais')
        .get(async (req, res) => {
            const dados = await dao.getProfissionais();
            if (dados) {
                res.status(200).json(dados);
            } else {
                res.status(404).json({ message: "Não encontrado." });
            }
        });
}