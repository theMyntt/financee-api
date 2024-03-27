import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDataType } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<ClientDataType>,
  ) {}

  async setClient(client: ClientDataType): Promise<string | ClientDataType> {
    try {
      const hasUser = await this.clientModel.findOne({ email: client.email }).exec();
      if (hasUser) return "Usuário já cadastrado";
  
      new this.clientModel(client).save();
      return "Usuário cadastrado com sucesso"
    } catch {
      return "Não foi possível cadastrar o usuário"
    }
  }

  async getClient(email: string, password: string): Promise<ClientDataType | string> {
    return await this.clientModel.findOne({email, password}).exec();
  }
}
