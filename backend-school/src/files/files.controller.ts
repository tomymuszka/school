import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { fileFilter } from './helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/fileNamer.helper';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService:ConfigService
  ) {}

  @Get('document/:imageName')
  findImage(
    @Res() res:Response,
    @Param('imageName')imageName:string
  ){
    const path = this.filesService.getStaticproductImage(imageName)

    res.sendFile( path )
  }

  @Post('document')
  @UseInterceptors(FileInterceptor('file', 
    {fileFilter:fileFilter,
      storage:diskStorage({
        destination: './static/documents',
        filename:fileNamer
      })

    }))
  uploadImage(
    @UploadedFile() file:Express.Multer.File
  ){

    if(!file) throw new BadRequestException('Verifica que el archivo sea una imagen')

      const secureUrl = `${this.configService.get('HOST')}/static/documents/${file.filename}`
      return {secureUrl}
  }
}
