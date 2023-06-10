export interface IResult {
    count: number;
    next: string;
    previous: string;
    results: []
  }
  

export interface IPokemonState {
    result: IResult;
    loading: boolean;
    error: string | null;
}