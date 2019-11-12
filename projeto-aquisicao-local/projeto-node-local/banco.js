var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "srveasypark.database.windows.net",
        user: "usereasypark",
        password: "#Gfgrupo4",
        database: "bdeasypark",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    },
    desenvolvimento: {
        server: "srveasypark.database.windows.net",
        user: "usereasypark",
        password: "#Gfgrupo4",
        database: "bdeasypark",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  sql.close();
  return sql.connect(configuracoes[perfil])
} 

module.exports = {
    conectar: conectar,
    sql: sql
}
