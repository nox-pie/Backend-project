import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Products')
    .setDescription('Ecommerce Products API')
    .setVersion('1.0')
    .addTag('products')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3001);
  setInterval(() => {
    axios.get("https://backend-project-wiu7.onrender.com")
  },10 * 60 * 1000)
}
bootstrap();
