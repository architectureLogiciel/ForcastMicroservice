import { Controller, Get, HttpException, HttpStatus, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/user.decorator';
import { User, UserRoleEnum } from 'src/users/entities/user.entity';
import { ProductsService } from './products.service';
import * as faker from "faker"

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@GetUser() user: User,) {
    return this.productsService.findAll({});
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id, {});
  }

  // return an array of forcasted values for the next 12 months
  @UseGuards(AuthGuard('jwt'))
  @Get('forcast/:id')
  forcast(@Param('id') id: string) {
    let arr = []
    for (let i = 0; i < 12; i++)
      arr.push(faker.datatype.number({
        'min': 10,
        'max': 50
      }))
    return arr
  }


}
