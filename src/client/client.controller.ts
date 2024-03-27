import { Controller, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import CreateID from './utils/createId.util';
import HashText from './utils/hashText.util';

@Controller('api/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('set-user')
  setUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.clientService.setClient({
      _id: CreateID(),
      name,
      email,
      password: HashText(password),
    });
  }

  @Post('get-user')
  getUser(@Body('email') email: string, @Body('password') password: string) {
    return this.clientService.getClient(email, HashText(password));
  }
}
