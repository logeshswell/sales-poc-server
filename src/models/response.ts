export interface Response<T> {
  readonly count: number,
  readonly page: number,
  readonly results: Array<T>,
  readonly pages?: Page
}

export interface Page {
  readonly [index: number]: PageOptions;
}

export interface PageOptions {
  readonly start: number,
  readonly end: number
}
