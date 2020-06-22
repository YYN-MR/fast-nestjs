import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { OptionModule } from './option/option.module';

@Module({
  imports: [DbModule, UsersModule, OptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
