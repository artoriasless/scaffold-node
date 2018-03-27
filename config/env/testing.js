'use strict';

module.exports = {
    db: {
        host: 'test',
        port: 3306,
        user: 'test',
        password: 'test',
        database: 'test',
        seq_options: {
            logging: false,
            dialectOptions: {
                charset: 'utf8',
            },
        },
    },
};
