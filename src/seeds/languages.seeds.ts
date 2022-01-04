import { Languages } from "../model/languages.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateLanguages implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Languages)
            .values([
                { name: "French" },
                { name: "English" },
                { name: "Kinyarwanda" },
                { name: "Swahili" }
            ])
            .execute()
    }
}