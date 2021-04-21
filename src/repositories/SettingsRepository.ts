import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/setting";


@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{}
export { SettingsRepository }