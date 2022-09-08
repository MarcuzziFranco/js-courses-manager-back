import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudensController } from './studens/studens.controller';
import { StudensService } from './studens/studens.service';
import { AdministratorsModule } from './administrators/administrators.module';
import { StudensModule } from './studens/studens.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [StudensModule, AdministratorsModule, LoginModule],
  controllers: [AppController, StudensController],
  providers: [AppService, StudensService],
})
export class AppModule {}
