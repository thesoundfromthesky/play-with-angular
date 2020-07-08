import { Selector } from "@ngxs/store";
import { CountriesStateModel } from "./countries-state.model";
import { CountriesState } from "./countries.state";

export class CountriesSelectors {
  @Selector([CountriesState])
  static displays({ original }: CountriesStateModel) {
    if (!original || original.length <= 0) {
      return;
    }
    const rand: number[] = Array(original.length)
      .fill(0)
      .map((e, i) => i);

    function random(max: number = 1, min: number = 0) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const length: number = rand.length;
    for (let i = 0; i < length; ++i) {
      const idxA: number = random(length);
      const idxB: number = random(length);
      let temp: number;
      temp = rand[idxA];
      rand[idxA] = rand[idxB];
      rand[idxB] = temp;
    }

    const result: any[] = [];
    for (let i = 0; i < 3; ++i) {
      const idx: number = random(length);
      result.push(original[rand[idx]]);
    }
    result.push(result[0]);
    return result;
  }
}
