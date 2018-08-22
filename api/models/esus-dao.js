const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '192.168.50.10',
    database: 'esus',
    password: 'esus',
    port: 5433,
});

const dao = {};

dao.getProducaoUnidadePeriodo = async (mes, ano, unidade) => {
    await client.connect();

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

    return client
        .query(query)
        .then(res => res.rows)
        .catch(e => e.stack)
};

dao.getProducaoProfissionalPeriodo = async (mes, ano, profissional) => {
    await client.connect();

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
        c.nu_cns = $3
        group by
        e.no_equipe, b.no_pessoa_fisica, a.dt_ficha
        order by
        e.no_equipe`,
        values: [mes, ano, profissional]
    };

    return client
        .query(query)
        .then(res => res.rows)
        .catch(e => e.stack)
};

dao.getUnidades = async () => {
    await client.connect();

    return client
            .query('SELECT co_seq_equipe as id, no_equipe_filtro as unidade FROM tb_equipe')
            .then(res => res.rows)
            .catch(e => e.stack)
};

dao.getProfissionais = async () => {
    await client.connect();

    return client
        .query(`SELECT DISTINCT
         pf.nu_cpf, pf.nu_cns, pf.no_pessoa_fisica 
         FROM tb_pessoa_fisica pf 
         INNER JOIN tb_cds_prof pr ON pf.nu_cns = pr.nu_cns`)
        .then(res => res.rows)
        .catch(e => e.stack);
};

module.exports = dao;