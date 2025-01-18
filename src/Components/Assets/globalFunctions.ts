import { ProductType } from "./types";

export const isItemExist = (id: number, list: ProductType[]): boolean => {
    const theItem:ProductType | undefined = list.find((item) => item.id === id);
    if (theItem === undefined) {
        return false
    } else {
        return true
    }
  }

  
