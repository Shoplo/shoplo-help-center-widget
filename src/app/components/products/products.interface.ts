export interface RefinementListState {
  canRefine: boolean;
  canToggleShowMore: boolean;
  createURL: Function;
  isShowingMore: boolean;
  items: {}[];
  refine: Function;
  toggleShowMore: Function;
  searchForItems: Function;
  isFormSearch: boolean;
}

export interface MenuState {
  canRefine: boolean;
  canToggleShowMore: boolean;
  createURL: Function;
  isShowingMore: boolean;
  items: {}[];
  refine: Function;
  toggleShowMore: Function;
}

export interface HierarchicalMenuItem {
  value: string;
  label: string;
  count: number;
  isRefined: boolean;
  data: HierarchicalMenuItem[];
}

export interface HierarchicalMenuState {
  createURL: Function;
  items: {}[];
  refine: Function;
}

