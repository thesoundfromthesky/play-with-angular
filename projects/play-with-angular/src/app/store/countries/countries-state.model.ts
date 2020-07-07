import { Country } from "../../models";

export interface CountriesStateModel {
  original: Country[];
  copy: Country[];
  end: boolean;
}
