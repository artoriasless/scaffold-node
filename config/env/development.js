'use strict';

module.exports = {
    db: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123',
        database: 'blog_local',
        seq_options: {
            logging: false,
            dialectOptions: {
                charset: 'utf8',
            },
        },
    },
};
