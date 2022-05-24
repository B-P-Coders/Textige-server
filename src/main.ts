import { NestFactory } from "@nestjs/core"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.enableCors()
    const config = new DocumentBuilder()
        .setTitle("Textige server")
        .setDescription("The textige server API description")
        .setVersion("1.0")
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("swagger", app, document)

    await app.listen(3000)
}
bootstrap()
