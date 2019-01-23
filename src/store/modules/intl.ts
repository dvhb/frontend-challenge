import { createReducer, createAction, Reducer } from 'redux-act';

export const setLocale = createAction('locale.set');

export interface IntlState {
  locale: string;
}

const defaultIntlState: IntlState = {
  locale: 'en-EN',
};

export const intlReducer: Reducer<IntlState> = createReducer<IntlState>({}, defaultIntlState);

intlReducer.on(setLocale, (state: IntlState, payload: string) => ({
  ...state,
  locale: payload,
}));
