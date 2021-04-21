import { Repository, EntityRepository } from "typeorm";
import { setting } from "../entities/setting";


@EntityRepository(setting)
class SettingsRepository extends Repository<setting>{}
export { SettingsRepository }