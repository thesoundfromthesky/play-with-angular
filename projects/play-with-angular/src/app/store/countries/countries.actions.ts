// tslint:disable-next-line: no-namespace
export namespace Countries {
  export class FetchAll {
    static readonly type = "[Country] Fetch All";
  }
  export class Batch {
    static readonly type = "[Country] Batch Countries";
    constructor(public payload: { quantity: number }) {}
  }
}
