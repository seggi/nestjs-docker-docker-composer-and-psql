/**
 * Import and provide seeder classes.
 * @module
 */

import { Logger, Module } from "@nestjs/common";
import { LanguageSeederModule } from "./language/languages.module";
import { Seeder } from "./seeder";

@Module({
    imports: [LanguageSeederModule],
    providers: [Logger, Seeder],
})

export class SeederModule { }