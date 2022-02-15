import { LOADER_STATUS } from 'types/enum';

export interface LoaderState {
  isLoading: boolean;
  status: LOADER_STATUS;
}
