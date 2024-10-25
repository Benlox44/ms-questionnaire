import { HttpService } from '@nestjs/axios';
import { AuthGuard } from './auth.guard';
import { ConfigService } from '@nestjs/config';

describe('AuthGuard', () => {
  it('should be defined', () => {
    const httpService = {} as HttpService;
    const configService = {} as ConfigService;
    expect(new AuthGuard(httpService, configService)).toBeDefined();
  });
});
