import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {
  constructor(private userServ:UserService){}
  transform(id: number| string, ...type: string[]): unknown {
    
    return (type[0]==='username')? this.userServ.getById(id).username:(type[0]==='image')?this.userServ.getById(id).img:false;
  }

}
