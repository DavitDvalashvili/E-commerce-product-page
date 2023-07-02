
export interface navPropsType {
    handleClick: () => void;
}

export interface cartType {
    handleClick: () => void;
    addAmount: number;
}

export interface AmountType {
    setAddAmount: React.Dispatch<React.SetStateAction<number>>;
}
export type cartBoxType = {
    addAmount: number;
    setAddAmount: React.Dispatch<React.SetStateAction<number>>;
}
export interface styledDeaderType {
    hideNav: boolean;
}