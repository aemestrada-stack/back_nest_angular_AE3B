import { DataSource } from 'typeorm';
import { ConfigService } from '../config/config.service.js';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource = new DataSource({
                type:'postgres',
                host:'localhost',
                port:5432,
                username:'postgres',
                password:'12345',
                database:'back_nest_angular'
            });
            return dataSource.initialize();
        }   
    }
]