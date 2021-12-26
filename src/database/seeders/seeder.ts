import { Injectable, Logger } from "@nestjs/common";
import { LanguageSeederService } from "./language/languages.service";

@Injectable()
export class Seeder {
    constructor(
        private readonly logger: Logger,
        private readonly languageSeederService: LanguageSeederService,
    ) { }

    async seed() {
        await this.languages()
            .then(
                completed => {
                    this.logger.debug('Successfuly completed seeding users...');
                    Promise.resolve(completed);
                }
            )
            .catch(error => {
                this.logger.error('Failed seeding users...');
                Promise.reject(error);
            });
    }

    async languages() {
        return await Promise.all(this.languageSeederService.create())
            .then(createdLanguages => {
                this.logger.debug(
                    'No. of languages created : ' +
                    createdLanguages.filter(
                        nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
                    ).length,
                );
                return Promise.resolve(true);
            })
            .catch(error => Promise.reject(error));
    }
}