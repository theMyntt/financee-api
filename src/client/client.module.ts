import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './schema/client.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService], 
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), 
      }),
    }),
    MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }])
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
