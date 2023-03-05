import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return {
      success: true,
      message: 'API working perfectly in signup'
    }
  }

  signin() {
    return {
      success: true,
      message: 'API working perfectly in signin',
    }
  }
}