import React from "react";

interface SmallImgType {
    id: number,
    name: string,
    img: string,
    color: string,
}

interface InfoType {
    style: string, 
    composition: string, 
    weight: string, 
    dimensions: string,
}

interface ProductType {
    id: number,
    name: string,
    category: string,
    smallImgs: SmallImgType[],
    newPrice: number,
    oldPrice: number,
    bigImgs: string[],
    sizes: string[],
    color: string,
    type: string,
    tags: string[],
    info: InfoType,
    desc: string,
}

interface CartNewKeys {
    amount: number,
    total: number,
    chosenSize: string,
    chosenColor: SmallImgType,
}

interface CartItemsType extends ProductType, CartNewKeys {
    amount: number,
    total: number,
    chosenSize: string,
    chosenColor: SmallImgType,
}

interface IDColor {
    id: number,
    color: SmallImgType,
}

interface IDSizeColor extends IDColor {
    size: string,
}

type SortShownVal = string | number;

interface SortShownType {
    id: number;
    name: string;
    value: SortShownVal;
}

type InputEventType = React.ChangeEvent<HTMLInputElement> ;

interface FilterProps {
    filterColors: (e: InputEventType) => void,
    filterTypes: (e: InputEventType) => void,
    categoryData: ProductType[],
}

interface RangeType {
    minRange: number,
    maxRange: number,
}

export type { 
    ProductType,
    CartNewKeys,
    CartItemsType,
    SmallImgType,
    InfoType,
    IDColor,
    IDSizeColor,
    InputEventType,
    FilterProps,
    RangeType,
    SortShownType,
    SortShownVal
}

