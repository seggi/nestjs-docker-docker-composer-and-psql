/**
 * Import and provide seeder classes for languages.
 * @module
 */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Languages } from "src/model/languages.entity";
import { LanguageSeederService } from "./languages.service";

@Module({
    imports: [TypeOrmModule.forFeature([Languages])],
    providers: [LanguageSeederService],
    exports: [TypeOrmModule, LanguageSeederService],
})

export class LanguageSeederModule { };