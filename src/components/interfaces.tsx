export interface TagProps {
  val: string;
  index: number;
  onTagClicked: (index: number) => void;
  activeTag: number;
}

export interface ItemProps {
  item: string;
}
