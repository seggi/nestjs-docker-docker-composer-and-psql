/**
 * Import and provide seeder classes.
 * @module
 */

import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "src/config/config.service";
import { LanguageSeederModule } from "./language/languages.module";
import { Seeder } from "./seeder";

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        LanguageSeederModule
    ],
    providers: [Logger, Seeder],
})

export class SeederModule { }