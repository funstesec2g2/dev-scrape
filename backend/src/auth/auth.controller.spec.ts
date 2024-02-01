import { Test, TestingModule } from '@nestjs/testing';
import AuthService from './auth.service';
import AuthController from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

describe('AuthController', () => {
  let authController: AuthController;
  const newMockUserService = {
    createUser: jest.fn(dto => ({
      access_token: 'access_token',
      message: 'success',
      email: dto.email,
    })),
    findOne: jest.fn().mockImplementation(async (query) => {
      if (query.email === 'existinguser@example.com') {
        return {
         
        };
      } else {
        return null;
      }
    }),
    login: jest.fn().mockImplementation(async (query) =>{
      if (query ==='amanueltsehay11@gmail.com'){
        return {
          // access_token: 'access_token',
          email: query,
          message: 'success'
      };
      
      }
      return null;

    })
    
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: newMockUserService },
        JwtService,
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(authController).toBeDefined();
    });

    it('create a new user', async () => {
      const mockDto = {
        fullName: 'Amanuel',
        email: 'amanueltsehay11@gmail.com',
        password: 'amanuel',
      };
      console.log(mockDto);
      const result = await authController.register(mockDto);

      expect(result).toEqual({
        access_token: 'access_token',
        email: 'amanueltsehay11@gmail.com',
        message: 'success',
      });
    });

    it('should login a user successfully', async () => {
      const mockUser = {
        email: 'amanueltsehay11@gmail.com',
        password: 'amanuel',
        message: 'success'}

        const result = await authController.login(mockUser)

        expect(result).toEqual({ email: 'amanueltsehay11@gmail.com', message: 'success' });


    });
    
    
    
  });
});
