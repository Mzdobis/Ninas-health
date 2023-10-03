import dotenv from 'dotenv';
import {Sequelize} from 'sequelize';

dotenv.config()

const {DB_HOST,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT} = process.env

    export const database = new Sequelize(
        DB_NAME!,
        DB_USERNAME!,
        DB_PASSWORD,
{
    host:DB_HOST,
    port:DB_PORT as unknown as number,
    dialect:'postgres',
    logging:false,
    dialectOptions: {
        encrypt: true
    }

}
    )
    

