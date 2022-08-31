import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersHttpModule } from 'src/users/users-http.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './constants';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersHttpModule,
    PassportModule,
    Repository<User>,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
