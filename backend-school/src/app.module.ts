import { Module } from '@nestjs/common';
import { SchoolModule } from './school/school.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { GradeModule } from './grade/grade.module';
import { SubjectModule } from './subject/subject.module';
import { DocumentModule } from './document/document.module';
import { FilesModule } from './files/files.module';


@Module({
  imports: [SchoolModule,
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadEntities:true,
        synchronize: true,
    }),

    CommonModule,

    GradeModule,

    SubjectModule,

    DocumentModule,

    FilesModule
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
