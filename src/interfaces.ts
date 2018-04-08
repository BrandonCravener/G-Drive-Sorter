interface ConfigGroup {
    classifier: Number;
    constraint: Number;
    data: Object;
}

export interface Config {
    groups: ConfigGroup;
    name: String;
}