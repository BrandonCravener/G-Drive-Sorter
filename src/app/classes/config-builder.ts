import { ConfigsInterface } from "../../interfaces";

export class ConfigBuilder {
    static generateNewConfig(
        configName: string, 
        firstGroupName: string, 
        destinationFolder: string,
        firstGroupRule: object
    ): ConfigsInterface {
        const configHolder: ConfigsInterface = {
            name: '',
            groups: {}
        };
        configHolder['name'] = configName;
        configHolder['groups'][firstGroupName] = {
            destination: destinationFolder,
            rule: firstGroupRule
        }
        return configHolder;
    }
}
