import React, { FC, useEffect, useState } from 'react'
import { FaList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Shop.scss"
import products from '../Assets/globalData/products';
import ShopBanner from './ShopBanner/ShopBanner';
import FilterWomenData from './FilterWomenData';
import FilterMenData from './FilterMenData';
import FilterKidsData from './FilterKidsData';
import FilterAllData from './FilterAllData';
import { InputEventType, ProductType, RangeType, SortShownVal } from '../Assets/types';
import PriceRange from './PriceRange/PriceRange';
import newArrivals from '../Assets/globalData/newArrivals';
import { Item } from '../Item/Item';
import noItems from "../Assets/images/no-items.png"
import Pagination from './Pagination/Pagination';
import { shownItemsNum, sortBy } from './DropdownMenu/data';
import DropdownMenu from './DropdownMenu/DropdownMenu';

interface Props {
    img: string,
    category: string,
}

const Shop:FC<Props> = ({img, category}) => {

    const categoryData = products.filter(item => item.category === category || category === "Shop");
    const[itemsList, setItemsList] = useState<ProductType[]>(categoryData);
    const[listView, setListView] = useState<boolean>(false);
    const[isColorCheck, setIsColorCheck] = useState<boolean>(false);
    const[isTypeCheck, setIsTypeCheck] = useState<boolean>(false);
    const[chosenColors, setChosenColors] = useState<string[]>([]);
    const[chosenTypes, setChosenTypes] = useState<string[]>([]);
    const[valToSort, setValToSort] = useState<SortShownVal>(sortBy[0].value);
    const[paginationItems, setPaginationItems] = useState(6);
    const[togglePrice, setTogglePrice] = useState<boolean>(false);
    const[range, setRange] = useState<RangeType>({
        minRange: 0,
        maxRange: 300,
    });

    // pagination
    const data = itemsList;
    const [current, setCurrent] = useState<number>(1);
    const paginationPages: number = Math.ceil(data.length / paginationItems);
    const startIndex: number = (current - 1) * paginationItems;
    const endIndex: number = startIndex + paginationItems;
    const dataPerPage:ProductType[] = data.slice(startIndex, endIndex);

    useEffect(()=> {
        setItemsList(categoryData);
        setChosenColors([]);
        setChosenTypes([]);
        setRange({minRange: 0, maxRange: 300})
        setValToSort(sortBy[0].value);
        setPaginationItems(6);
        setCurrent(1);
        setListView(false);
    }, [category]);

    /* shown number of items function */
    const handleShownItemNum = (val: SortShownVal) => {
        if (typeof(val) === "number") {
            setPaginationItems(val);
        }
        console.log(1112);
        setCurrent(1);
      }

    /* dropdown sort function */
    const handleDropdownSort = (val: SortShownVal, list:ProductType[] = products) => {
        setValToSort(val);
        if (val === "Featured") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return a.id - b.id;
            });
            setItemsList(sortedItemsList);
        }
        else if (val === "Best selling") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return (b.oldPrice - b.newPrice) - (a.oldPrice - a.newPrice);
            });
            setItemsList(sortedItemsList);
        }
        else if (val === "Alphabetically, A-Z") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            setItemsList(sortedItemsList);
        }
        else if (val === "Alphabetically, Z-A") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
            setItemsList(sortedItemsList);
        }
        else if (val === "Price, low to high") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return a.newPrice - b.newPrice;
            });
            setItemsList(sortedItemsList);
        }
        else if (val === "Price, high to low") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return b.newPrice - a.newPrice;
            });
            setItemsList(sortedItemsList);
        }
        else if (val === "Date, old to new") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return a.id - b.id;
            });
            setItemsList(sortedItemsList);
        }
        else if (val === "Date, new to old") {
            const sortedItemsList: ProductType[] = [...list].sort((a, b) => {
                return b.id - a.id;
            });
            setItemsList(sortedItemsList);
        }
        
    }

    /* handle filter list */
    const getFiltersList = () => {
        if (range.minRange === 0 && range.maxRange === 300) {
            return [...chosenColors, ...chosenTypes];
        } else {
            return [...chosenColors, ...chosenTypes,`$${range.minRange} - $${range.maxRange}`];
        }
    }

    const mapFiltersList = getFiltersList().map(item => {
        return (
            <li>
                <button className='remove-btn'><IoCloseSharp /></button>
                <span>{item}</span>
            </li>
        )
    })

    /* filter colors function */
    const filterColors = (e:InputEventType): void => {
        if(e.target.checked) {
            if (!isColorCheck) {
                if (!isTypeCheck) {
                    const newItems = categoryData.filter(item => item.color === e.target.value && (item.newPrice >= range.minRange && item.newPrice <= range.maxRange));
                    handleDropdownSort(valToSort, newItems);
                } else {
                    const newItems = itemsList.filter(item => item.color === e.target.value);
                    handleDropdownSort(valToSort, newItems);
                }
                setIsColorCheck(true);
            } else {
                if (!isTypeCheck) {
                    const newItems = categoryData.filter(item => item.color === e.target.value && (item.newPrice >= range.minRange && item.newPrice <= range.maxRange));
                    const finalProducts = [...itemsList, ...newItems];
                    handleDropdownSort(valToSort, finalProducts);
                } else {
                    let newItems:ProductType[] = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = categoryData.filter(item => item.color === e.target.value && item.type === chosenTypes[i]);
                        newItems = [...newItems, ...newItem];
                    }
                    const finalProducts = [...itemsList, ...newItems].filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                    handleDropdownSort(valToSort, finalProducts);
                }
            }
            setChosenColors([...Array.from(new Set([...chosenColors, e.target.value]))]);
        } else {
            chosenColors.splice(chosenColors.indexOf(e.target.value), 1);
            const newItems = itemsList.filter(item => item.color !== e.target.value );
            console.log(newItems);
            if (newItems.length) {
                handleDropdownSort(valToSort, newItems);
            } 
            if(!newItems.length && isTypeCheck) {
                let newItems:ProductType[] = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = categoryData.filter(item => item.type === chosenTypes[i]);
                        newItems = [...newItems, ...newItem];
                    }
                const finalProducts = [...newItems].filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
            if (!newItems.length && !isTypeCheck) {
                const newItems = categoryData.filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                handleDropdownSort(valToSort, newItems);
            } 
            if (!newItems.length) {
                setIsColorCheck(false);
            }
        }
        setCurrent(1);
    }

    /* filter types function*/
    const filterTypes = (e: InputEventType): void => {
        if(e.target.checked) {
            if (!isTypeCheck) {
                if (!isColorCheck) {
                    const newProducts = categoryData.filter(item => item.type === e.target.value && (item.newPrice >= range.minRange && item.newPrice <= range.maxRange));
                    handleDropdownSort(valToSort, newProducts);
                } else {
                    const newProducts = itemsList.filter(item => item.type === e.target.value);
                    handleDropdownSort(valToSort, newProducts);
                }
                setIsTypeCheck(true);
            } else {
                if (!isColorCheck) {
                    const newProducts = categoryData.filter(item => item.type === e.target.value && (item.newPrice >= range.minRange && item.newPrice <= range.maxRange));
                    const finalProducts = [...itemsList, ...newProducts];
                    handleDropdownSort(valToSort, finalProducts);
                } else {
                    let newProducts: ProductType[] = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = categoryData.filter(item => item.type === e.target.value && item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                    const finalProducts = [...itemsList, ...newProducts].filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                    handleDropdownSort(valToSort, finalProducts);
                }
            }
            setChosenTypes([...Array.from(new Set([...chosenTypes, e.target.value]))]);
        } else {
            chosenTypes.splice(chosenTypes.indexOf(e.target.value), 1);
            const newProducts = itemsList.filter(item => item.type !== e.target.value );
            if (newProducts.length) {
                handleDropdownSort(valToSort, newProducts);
            } 
            if(!newProducts.length && isColorCheck) {
                let newProducts: ProductType[] = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = categoryData.filter(item => item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = [...newProducts].filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
            if (!newProducts.length && !isColorCheck) {
                const newProducts = categoryData.filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                handleDropdownSort(valToSort, newProducts);
            } 
            if (!newProducts.length) {
                setIsTypeCheck(false);
            }
        }
        setCurrent(1);
    }

    /* filter price function*/
    const filterPrices = (e: InputEventType): void => {
        if (!isColorCheck && !isTypeCheck) {
            const newProducts = categoryData.filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
            handleDropdownSort(valToSort, newProducts);
        } else {
            const newProducts = itemsList.filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
            setItemsList(newProducts);
            if (isColorCheck && !isTypeCheck) {
                let newProducts: ProductType[] = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = categoryData.filter(item => item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                    const finalProducts = newProducts.filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                    handleDropdownSort(valToSort, finalProducts);
            } 
            if (!isColorCheck && isTypeCheck) {
                let newProducts: ProductType[] = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = categoryData.filter(item => item.type === chosenTypes[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = newProducts.filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            } 
            if (isColorCheck && isTypeCheck) {
                let firstProducts: ProductType[] = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = categoryData.filter(item => item.color === chosenColors[i]);
                        firstProducts = [...firstProducts, ...newItem];
                    }
                console.log(firstProducts);
                let secondProducts: ProductType[] = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = firstProducts.filter(item => item.type === chosenTypes[i]);
                        secondProducts = [...secondProducts, ...newItem];
                }
                const finalProducts = secondProducts.filter(item => item.newPrice >= range.minRange && item.newPrice <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
        }
        setCurrent(1);
    }

    /* get the right filter data comp */
    const getFilterComp = () => {
        if (category === "Women") {
            return <FilterWomenData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData} />
        } else if (category === "Men") {
            return  <FilterMenData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData} />
        } else if (category === "Kids") {
            return <FilterKidsData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData} />
        } else {
            return <FilterAllData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData}/>
        }
    }

  return (
    <div className='shop'>
        <ShopBanner category={category} img = {img} />
        <div className='container'>
            <div className='content'>
                <div className='left-box'>
                    <div className='filter'>
                        <ul className='chosen-filters'>
                            {mapFiltersList}
                        </ul>
                    </div>
                    {getFilterComp()}
                    <div className='category'>
                        <h3 className='hide-mobile'>Price range</h3>
                        <button className='hide-pc' onClick={() => setTogglePrice(!togglePrice)}>
                            <h3>Price range</h3>
                            {togglePrice ? <span><FaChevronUp /></span>
                            : <span><FaChevronDown /></span> }
                        </button>
                        <PriceRange range = {range} setRange = {setRange} filterPrices = {filterPrices} togglePrice={togglePrice} />
                    </div>
                    <div className='category hide-mobile'>
                        <h3>New Arrivals</h3>
                        {
                            newArrivals.map(item => {
                                return (
                                    <Item key={item.id} itemClass={"new-arrivals-view"} {...item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='right-box'>
                    <div className='top-filter'>
                        <div className='view'>
                            <button 
                            className={listView ? "view-btn": "view-btn active"} 
                            onClick={()=>setListView(false)}
                            >
                            <BsGridFill />
                            </button>
                            <button 
                            className={listView ? "view-btn active": "view-btn"}
                            onClick={()=>setListView(true)}
                            >
                            <FaList />
                            </button>
                        </div>
                        <div className='select-boxes'>
                            <div className='sort'>
                                <DropdownMenu data = {sortBy} dropAction = {handleDropdownSort} categoryData = {categoryData}/>
                            </div>
                            <div className='show'>
                                <DropdownMenu data = {shownItemsNum} dropAction = {handleShownItemNum} categoryData = {categoryData} />
                            </div>
                        </div>
                    </div>
                    <div className='products'>
                        {itemsList.length ? <div className='products-content'>
                            {
                                dataPerPage.map(item => {
                                    return (
                                        <Item itemClass = {listView? 'list-view' : 'item shop-item'} key = {item.id} {...item} />
                                    )
                                })
                            }
                        </div> :
                            <div className='no-products'>
                                <img src={noItems} />
                                <h2>No products</h2>
                                <ul className='chosen-filters'>
                                    {mapFiltersList}
                                </ul>
                            </div>
                        }
                        <Pagination current={current} setCurrent={setCurrent} paginationPages = {paginationPages} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop;