const mysql=require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shopapp-server',
    password: 'Lakki@6625'
})

module.exports=pool.promise();