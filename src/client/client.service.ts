import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDataType } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<ClientDataType>,
  ) {}

  async setUser(client: ClientDataType): Promise<string | ClientDataType> {
    const hasUser = await this.clientModel.findOne({ email: client.email }).exec();
    if (hasUser) return "Usuário já cadastrado";

    new this.clientModel(client).save();
    return "Usuário cadastrado com sucesso"
  }
}
