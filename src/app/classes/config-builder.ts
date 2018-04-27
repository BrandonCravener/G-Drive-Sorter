import { ConfigsInterface } from "../../interfaces";

export class ConfigBuilder {
    static generateNewConfig(
        configName: string, 
        firstGroupName: string, 
        firstGroupRule: object
    ): ConfigsInterface {
        const configHolder: ConfigsInterface = {
            name: '',
            groups: {}
        };
        configHolder['name'] = configName;
        configHolder['groups'][firstGroupName] = [firstGroupRule]
        return configHolder;
    }
}
