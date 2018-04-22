export class ConfigBuilder {
    static generateNewConfig(
        configName: string, 
        firstGroupName: string, 
        firstGroupRule: object
    ): object {
        const configHolder: object = {
            groups: {}
        };
        configHolder['name'] = configName;
        configHolder['groups'][firstGroupName] = [firstGroupRule]
        return configHolder;
    }
}
