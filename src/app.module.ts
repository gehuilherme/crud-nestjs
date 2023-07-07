import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [], // Removido AppController
  providers: [], // Removido AppService
})
export class AppModule {}
