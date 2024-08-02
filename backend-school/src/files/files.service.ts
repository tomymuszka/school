import { Injectable, NotFoundException } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  
  getStaticproductImage(imageName:string){
    const path = join(__dirname + '../../../static/documents/' + imageName)

    if(!existsSync(path)) throw new NotFoundException(`Image with name ${imageName} not found`)

      return path
  }
}
