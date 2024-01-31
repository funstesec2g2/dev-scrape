// import { Test, TestingModule } from '@nestjs/testing';
// import AuthController from 'src/auth/auth.controller';
// import AuthService from 'src/auth/auth.service';
// import { AuthDto } from 'src/auth/dto/auth.dto';
// import { of } from 'rxjs';
// import { User } from 'src/models/user-folder/user.schema';

// describe('AuthController', () => {
//   let controller: AuthController;
//   let authService: AuthService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       providers: [AuthService],
//     }).compile();

//     controller = module.get<AuthController>(AuthController);
//     authService = module.get<AuthService>(AuthService);
//   });

//   it('should register a new user successfully', async () => {
//     const mockUser = new User();
//     mockUser.email = 'sdf';

//     jest.spyOn(authService, 'findOne').mockReturnValue(of(null));
//     jest.spyOn(authService, 'createUser').mockReturnValue(of(mockUser));

//     const result = await controller.register(mockDto);

//     expect(authService.findOne).toHaveBeenCalledWith(mockUser.email);
//     expect(authService.createUser).toHaveBeenCalledWith(mockDto);
//     expect(result).toEqual(mockUser);
//   });

//   // Add more tests for different scenarios (user already exists, user is blocked, etc.)
// });
