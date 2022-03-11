require('dotenv').config()
module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'dbteste',
        },
        tunnelSSH: {
            user: 'root',
            host: 'localhost',
            port: 22,
            password: '',
            dstHost: 'localhost',
            dstPort: 27017,
            srcHost: 'localhost',
            srcPort: 3306,
            localHost: 'localhost',
            localPort: 27000,
        },
    },
    production: {
        database: {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE,
        },
        tunnelSSH: {
            user: process.env.DATABASE_SSH_USER,       
            host:process.env.DATABASE_SSH_HOST,       
            port:process.env.DATABASE_SSH_PORT,       
            dstHost:'127.0.0.1',       
            dstPort:3306,       
            srcPost:'127.0.0.1',       
            srcPort:3306,       
            localHost:'127.0.0.1',       
            localPort: 3306,  
        },
    },
};