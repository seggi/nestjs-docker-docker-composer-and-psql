
import { Cities } from "../model/cities.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateCities implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Cities)
            .values([
                { name: "Kigali" },
                { name: "Gisenyi" },
                { name: "Ruhengeri" },
                { name: "Kibuye" }
            ])
            .execute()
    }
}