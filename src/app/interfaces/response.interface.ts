export interface IResponse<T> {
  count: number;
  data: T;
  page: number;
  pageSize: number;
  totalCount: number;
}
