import React, { useEffect, useState } from "react";
import { Text, Dropdown } from "@components/ui";
import Products from "@components/product";
import s from "../styles/Edvora.module.css";

function Edvora({ products, productNames, states, cities }) {
  const [noData, setNoData] = useState(false);

  const [filteredData, setFilteredData] = useState(products);

  const [filterProduct, setFilterProduct] = useState(null);
  const [filterState, setFilterState] = useState(null);
  const [filterCity, setFilterCity] = useState(null);

  useEffect(() => {
    document.getElementsByTagName("body")[0].dataset.theme = "dark";
    return () => {
      document.getElementsByTagName("body")[0].dataset.theme = "light";
    };
  }, []);

  useEffect(() => {
    setFilterCity(null);
  }, [filterState]);

  useEffect(() => {
    let firstFilter = {};

    if (filterProduct) {
      firstFilter = { [filterProduct]: products[filterProduct] || [] };
    } else {
      if (filterProduct || filterState || filterCity) {
        setNoData(true);
      }
      firstFilter = products;
    }

    let secondFilter = {};

    if (filterState && firstFilter) {
      for (const property in firstFilter) {
        firstFilter[property].forEach((product) => {
          if (product.address.state == filterState) {
            if (secondFilter[property]) {
              secondFilter[property].push(product);
            } else {
              secondFilter[property] = [product];
            }
          }
        });
      }
    }

    if (
      filterState &&
      secondFilter &&
      Object.keys(secondFilter).length === 0 &&
      Object.getPrototypeOf(secondFilter) === Object.prototype
    )
      setNoData(true);

    let thirdFilter = {};

    if (filterCity && filterState) {
      for (const property in secondFilter) {
        secondFilter[property].forEach((product) => {
          if (product.address.city == filterCity) {
            if (thirdFilter[property]) {
              thirdFilter[property].push(product);
            } else {
              thirdFilter[property] = [product];
            }
          }
        });
      }
    }

    if (!filterCity) thirdFilter = secondFilter;

    if (!filterProduct && !filterState && !filterCity) thirdFilter = products;

    if (
      thirdFilter &&
      Object.keys(thirdFilter).length !== 0 &&
      Object.getPrototypeOf(thirdFilter) === Object.prototype
    ) {
      setNoData(false);
      setFilteredData(thirdFilter);
    } else {
      setFilteredData(products);
    }

    if (!filterCity && !filterState && !filterProduct) {
      setFilteredData(products);
      setNoData(false);
    }
  }, [filterProduct, filterState, filterCity]);

  let ProductsTable = [];

  for (let property in filteredData) {
    ProductsTable.push(
      <Products data={filteredData[property]} label={property} key={property} />
    );
  }

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.dropdown}>
          <div className={s.dropdownContainer}>
            <Text className="text-accent-5">Filters</Text>
            <hr className="mb-4 mt-1" />
            <Dropdown
              label="Product"
              items={productNames}
              onChange={(value) => setFilterProduct(value)}
            />
            <Dropdown
              label="State"
              items={states}
              onChange={(value) => setFilterState(value)}
            />
            <Dropdown
              label="City"
              items={cities[filterState] || ["Select State First"]}
              onChange={(value) => setFilterCity(value)}
            />
          </div>
          <Text className="text-accent-2 m-4">
            Haven&apos;t used any production dependencies
          </Text>
        </div>
        <div className={s.products}>
          <Text variant="pageHeading" className={s.pageHeading}>
            Edvora
          </Text>
          <Text variant="heading" className={s.heading}>
            Products
          </Text>

          {noData && (
            <Text variant="pageHeading" className={s.heading}>
              NO DATA
            </Text>
          )}

          {ProductsTable}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://assessment-edvora.herokuapp.com`);
  const data = await res.json();

  let products = {};
  let statesSet = new Set();
  let citiesSet = {};

  data.forEach((product) => {
    if (products[product.brand_name]) {
      products[product.brand_name].push(product);
    } else {
      products[product.brand_name] = [product];
    }

    statesSet.add(product.address.state);

    if (citiesSet[product.address.state]) {
      citiesSet[product.address.state].add(product.address.city);
    } else {
      citiesSet[product.address.state] = new Set();
      citiesSet[product.address.state].add(product.address.city);
    }
  });

  let productNames = [];
  let states = Array.from(statesSet);
  let cities = {};

  for (const property in products) {
    productNames.push(property);
  }

  for (const property in citiesSet) {
    cities[property] = Array.from(citiesSet[property]);
  }
  return { props: { products, productNames, states, cities } };
}

export default Edvora;
