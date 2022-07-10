import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify"

async function bootstrap() {
	
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
	app.enableCors({
		origin: "*"
	});
	await app.listen(3000);
	console.log(`Application is running on: ${await app.getUrl()}`);
	
}
bootstrap()