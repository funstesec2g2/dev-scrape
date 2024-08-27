import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import AuthService from 'src/auth/auth.service';
import { User } from 'src/models/user-folder/user.schema';
import { Model } from 'mongoose';

describe('AuthService', () => {
  let authService: AuthService;
  let userModel: Model<User>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getModelToken(User.name),
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(),
            verifyAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userModel = module.get<Model<User>>(getModelToken(User.name));
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('validateUser', () => {
    it('should validate user credentials', async () => {
      // Mock user data
      const mockUser = new User();
      mockUser.email = 'test@example.com';
      mockUser.password = await argon.hash('password');

      // Mock the findOne method of the userModel
      jest.spyOn(userModel, 'findOne').mockResolvedValue(mockUser);

      // Call the validateUser method
      const result = await authService.validateUser('test@example.com', 'password');

      // Assert the result
      expect(result).toEqual(mockUser);
    });

    // Add more test cases for different scenarios...
  });

  describe('findAll', () => {
    it('should retrieve all users', async () => {
      // Mock user data
      const mockUsers = [/* mock user objects */];

      // Mock the find method of the userModel
      jest.spyOn(userModel, 'find').mockResolvedValue(mockUsers);

      // Call the findAll method
      const result = await authService.findAll();

      // Assert the result
      expect(result).toEqual(mockUsers);
    });

    // Add more test cases for different scenarios...
  });

  // Add more describe blocks for other methods...

  afterAll(async () => {
    // Add any cleanup code if needed
  });
});
