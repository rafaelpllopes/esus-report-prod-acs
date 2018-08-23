const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '192.168.50.10',
    database: 'esus',
    password: 'esus',
    port: 5433,
});

client.connect();

module.exports = {
    query: async (text) => {
        try {
            const res = await client.query(text);
            return res.rows;
        } catch (err) {
            throw new Error(err);
        }
    }
}