import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import * as faker from "faker"
import { ProductsService } from 'src/products/products.service';
import { Product } from 'src/products/entities/product.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  console.log('in seed File');
  // application logic...

  // Todo : Seed Product

  const stores = [faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productAdjective()];

  const productService = app.get(ProductsService);
  console.log('seeding products');
  for (let i = 1; i < 10; i++) {
    const product = new Product();
    product.name = faker.commerce.productName();
    product.store = stores[i % 3]
    product.price = parseFloat(faker.commerce.price());
    product.description = faker.commerce.productDescription();
    product.quantity = i + 4;
    await productService.create(product);
  }
  console.log('end seed product');

  await app.close();
}
bootstrap();