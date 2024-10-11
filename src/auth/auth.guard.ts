import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const accessToken = request.headers['authorization']?.split(' ')[1];

      if (!accessToken) {
        throw new UnauthorizedException('Access token is missing');
      }

      // Enviar el token como encabezado Authorization
      const response = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get<string>('MS_IAM')}/auth/check`,  // URL al endpoint de verificación en ms-iam
          {
            headers: { Authorization: `Bearer ${accessToken}` }, // Aquí mandamos el token en el encabezado
          }
        ),
      );

      if (response.data && response.data.isValid) {
        return true;  // Token es válido
      } else {
        throw new UnauthorizedException('Invalid token');
      }

    } catch (error) {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
