import { Countries } from "../model/countries.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateCountries implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Countries)
            .values([
                { name: "Rwanda" },
                { name: "D.R.C" },
                { name: "Uganda" },
                { name: "Burundi" }
            ])
            .execute()
    }
}