import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Nest Js Documentation Using Swagger Module")
    .setDescription("This is an documentation about nest js api module I am still Learning and testing new modules")
    .setTermsOfService("http://localhost:3000/terms")
    .setLicense('MIT', 'https://github.com/vinaypartap-singh')
    .setContact('Email', 'developervsandhu@gmail.com', 'developervsandhu@gmail.com')
    .addServer("https://localhost:3000")
    .setVersion('1').build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document)


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
