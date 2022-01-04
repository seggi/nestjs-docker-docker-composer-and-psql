
import { States } from "../model/states.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateStates implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(States)
            .values([
                { name: "West" },
                { name: "Est" },
                { name: "Sourth" },
                { name: "Kigali" }
            ])
            .execute()
    }
}