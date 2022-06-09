import { MiddlewareConsumer, Module, NestModule,RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [LoginModule, NewsModule],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
      .forRoutes(
        { path: 'news', method: RequestMethod.POST },
        { path: 'login', method: RequestMethod.POST },
      );
  }
}
