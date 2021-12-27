import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILanguage } from "src/database/intefaces/language.interface";
import { Languages } from "src/model/languages.entity";
import { Repository } from "typeorm";
import { languages } from "./data";

@Injectable()
export class LanguageSeederService {
    constructor(
        @InjectRepository(Languages)
        private readonly languageRepository: Repository<Languages>,) { }

    /**
     * Seed all languages.
     * @function
     */

    create(): Array<Promise<Languages>> {
        return languages.map(async (language: ILanguage) => {
            return await this.languageRepository
                .findOne({ name: language.name })
                .then(async dbLanguage => {
                    //  Check if data already exists.
                    // If yes don't create a new one 
                    if (dbLanguage) {
                        return Promise.resolve(null);
                    }

                    return Promise.resolve(
                        await this.languageRepository.create(language),
                    );
                })
                .catch(error => Promise.reject(error));
        })

    }
}