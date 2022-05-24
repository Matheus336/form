const pgp = require("pg-promise")();
const conf = {
    user: 'postgres',
    password: 'phillipp1',
    host: 'localhost',
    port: 5432,
    database: 'TI2'
}
const conn = pgp(conf)

module.exports = conn