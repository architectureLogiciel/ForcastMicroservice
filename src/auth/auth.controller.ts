import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

}
