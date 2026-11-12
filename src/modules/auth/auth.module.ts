import { Module, UseGuards } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy.js';

@UseGuards(JwtStrategy)

@Module({
  imports:[
    JwtModule.register({
      secret:"MI CODIGO SECRETO",
      signOptions:{expiresIn:'60m'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
