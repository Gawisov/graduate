import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { Roles } from './auth/roles-auth.decorator';
import { RolesGuard } from './auth/roles.guard';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('avito')
    .setDescription('polnaya huita')
    .setVersion('1.0.0')
    .addTag('NoNameTeam')
    .build()
    const document = SwaggerModule.createDocument(app, config);
    // @Roles("Admin")
    // @UseGuards(RolesGuard)
    SwaggerModule.setup('/api/docs', app, document)
    
    app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
