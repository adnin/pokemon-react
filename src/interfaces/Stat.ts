export interface IStat {
    name: string;
    url: string;
}

export interface IStats {
    base_stat: number;
    effort: number;
    stat: IStat
}