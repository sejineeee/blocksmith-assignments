export interface ArrowButtons {
  [key: string]: () => void;
  prev: () => void;
  prevGroup: () => void;
  next: () => void;
  nextGroup: () => void;
}
