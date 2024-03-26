import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
  collection: "Clients"
})
export class Client {
  @Prop()
  _id: number;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  password: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);