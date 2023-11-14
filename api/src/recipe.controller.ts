// recipes.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('recipes')
export class RecipesController {

  @Get('top-secret')
  @UseGuards(AuthGuard('jwt'))
  getTopSecretRecipe(): string {
    return 'Shhh! The top-secret recipe is…';
  }
}