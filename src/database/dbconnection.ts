import mysql from 'mysql2/promise';

const config = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'Online Chinese Basic Class',
};

export const getConnection = async () => {
    return await mysql.createPool({
        host: config.HOST,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DB,
    });
}