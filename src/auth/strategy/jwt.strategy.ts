import { Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { PayloadDto } from '../dto/payload.dto';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService,) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    });
  }
  // La payloadInterface sert à typer votre code à vous de la créer selon votre payload
  async validate(payload: PayloadDto) {
    //console.log(payload.role == 'admin')
    const isAuthorized = payload.role == 'admin';
    if (!isAuthorized) {
      Logger.error(`Unauthorized: Invalid role`);
      throw new UnauthorizedException();
    }
    return true;
  }
}
