const db = require('../config/db');

const dao = {};

dao.getProducaoUnidadePeriodo = async (mes, ano, unidade) => {
    let query = {
        text: `SELECT
        a.dt_ficha,
        count(a.*),
        e.no_equipe UNIDADE,
        b.no_pessoa_fisica PROFISSIONAL
        FROM
        tb_cds_ficha_visita_domiciliar as a,
        tb_pessoa_fisica as b,
        tb_cds_prof as c,
        tb_cds_visita_domiciliar as d,
        tb_equipe as e
        where
        EXTRACT(MONTH FROM dt_ficha) = $1 and
        EXTRACT(year FROM dt_ficha) = $2 and
        c.nu_cns = b.nu_cns and
        c.co_seq_cds_prof = a.co_cds_prof and
        d.co_cds_ficha_visita_domiciliar = a.co_seq_cds_ficha_visita_dom and
        c.nu_ine = e.nu_ine and
        e.co_seq_equipe = $3
        group by
        e.no_equipe, b.no_pessoa_fisica, a.dt_ficha
        order by
        e.no_equipe`,
        values: [mes, ano, unidade]
    };
    return await db.query(query);
};

dao.getProducaoProfissionalPeriodo = async (mes, ano, profissional) => {

    let query = {
        text: `SELECT
        a.dt_ficha as data_ficha,
        count(a.*) as quantidade,
        e.no_equipe unidade,
        b.no_pessoa_fisica profissional
        FROM
        tb_cds_ficha_visita_domiciliar as a,
        tb_pessoa_fisica as b,
        tb_cds_prof as c,
        tb_cds_visita_domiciliar as d,
        tb_equipe as e
        where
        EXTRACT(MONTH FROM dt_ficha) = $1 and
        EXTRACT(year FROM dt_ficha) = $2 and
        c.nu_cns = b.nu_cns and
        c.co_seq_cds_prof = a.co_cds_prof and
        d.co_cds_ficha_visita_domiciliar = a.co_seq_cds_ficha_visita_dom and
        c.nu_ine = e.nu_ine and
        c.nu_cns = $3
        group by
        e.no_equipe, b.no_pessoa_fisica, a.dt_ficha
        order by
        e.no_equipe`,
        values: [mes, ano, profissional]
    };
    return await db.query(query);
};

dao.getUnidades = async () => {
    let query = {
        text: 'SELECT co_seq_equipe as id, no_equipe_filtro as unidade FROM tb_equipe'
    }
    return await db.query(query);
};

dao.getProfissionais = async () => {
    let query = {
        text: `SELECT DISTINCT
        pf.nu_cpf as cpf, pf.nu_cns as cns, pf.no_pessoa_fisica as nome
        FROM tb_pessoa_fisica pf 
        INNER JOIN tb_cds_prof pr ON pf.nu_cns = pr.nu_cns`
    }
    return await db.query(query);
};

module.exports = dao;