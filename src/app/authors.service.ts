import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  
    getAuthors(){
        return ["1", "2", "3"];
    }

}
