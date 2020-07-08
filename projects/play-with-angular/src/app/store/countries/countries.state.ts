import { Injectable } from "@angular/core";
import { State, Action, StateContext, NgxsOnInit } from "@ngxs/store";
import { tap } from "rxjs/operators";

import { CountriesService } from "../../core/http";
import { CountriesStateModel } from "./countries-state.model";
import { Countries } from "./countries.actions";

@Injectable()
@State<CountriesStateModel>({
  name: "countries",
  defaults: {
    original: [],
    copy: [],
    end: false
  }
})
export class CountriesState implements NgxsOnInit {
  constructor(private cs: CountriesService) {}

  ngxsOnInit({ dispatch }: StateContext<CountriesStateModel>) {
    dispatch(Countries.FetchAll);
  }

  @Action(Countries.FetchAll)
  fetchAllCountries({
    getState,
    patchState
  }: StateContext<CountriesStateModel>) {
    const state: CountriesStateModel = getState();
    if (0 < state.original.length) {
      return;
    }

    return this.cs.getAll().pipe(
      tap(data => {
        patchState({ original: data });
      })
    );
  }

  @Action(Countries.Batch)
  batchCountries(
    { getState, patchState }: StateContext<CountriesStateModel>,
    { payload: { quantity } }: Countries.Batch
  ) {
    const { original, copy }: CountriesStateModel = getState();
    const current: number = copy.length;
    if (original.length === current) {
      return;
    } else if (quantity <= original.length - current) {
      patchState({
        copy: copy.concat(original.slice(current, current + quantity))
      });
    } else {
      patchState({
        copy: copy.concat(original.slice(current)),
        end: true
      });
    }
  }
}
