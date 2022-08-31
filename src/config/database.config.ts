import { registerAs } from "@nestjs/config";
import { User } from "src/users/entities/user.entity";

export default registerAs('database', () => ({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    autoLoadEntities: true,
    // logging: process.env.DB_LOGGING === 'true',
}));