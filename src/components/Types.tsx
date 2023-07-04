export interface navPropsType {
  handleClick: () => void;
}

export interface cartType {
  handleClick: () => void;
  addAmount: number;
  innerWidth: number;
}

export interface AmountType {
  setAddAmount: React.Dispatch<React.SetStateAction<number>>;
}
export type cartBoxType = {
  addAmount: number;
  setAddAmount: React.Dispatch<React.SetStateAction<number>>;
};
export interface styledHeaderType {
  hideNav: boolean;
}
export interface styleImageBox {
  innerWidth: number;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
