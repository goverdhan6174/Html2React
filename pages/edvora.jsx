import React, { useEffect, useState } from "react";
import { Text, Dropdown } from "@components/ui";
import Products from "@components/product";
import s from "../styles/Edvora.module.css";

const data = [
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Himachal Pradesh",
      city: "Nahan",
    },
    discription: "Its a good product",
    date: "2020-02-27T06:21:12.322Z",
    time: "2020-04-14T03:54:02.566Z",
    image:
      "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
  },
  {
    product_name: "Facebook Inc",
    brand_name: "Facebook",
    price: 1000,
    address: {
      state: "Andaman and Nicobar Islands",
      city: "Port Blair",
    },
    discription: "Its a good product",
    date: "2014-11-06T01:15:27.817Z",
    time: "2012-03-18T10:43:53.100Z",
    image:
      "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Himachal Pradesh",
      city: "Palampur",
    },
    discription: "Its a good product",
    date: "2014-10-17T21:22:18.199Z",
    time: "2014-08-15T04:00:31.761Z",
    image:
      "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Himachal Pradesh",
      city: "Mandi",
    },
    discription: "Its a good product",
    date: "2014-06-26T23:54:54.647Z",
    time: "2017-03-03T20:08:38.006Z",
    image:
      "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Goa",
      city: "Marmagao",
    },
    discription: "Its a good product",
    date: "2014-01-24T15:41:00.668Z",
    time: "2013-04-24T12:40:31.621Z",
    image:
      "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Haryana",
      city: "Panipat",
    },
    discription: "Its a good product",
    date: "2021-06-14T16:15:04.274Z",
    time: "2021-09-13T22:49:14.391Z",
    image:
      "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
  },
  {
    product_name: "Facebook Inc",
    brand_name: "Facebook",
    price: 1000,
    address: {
      state: "Haryana",
      city: "Panchkula",
    },
    discription: "Its a good product",
    date: "2015-08-22T09:35:35.698Z",
    time: "2015-03-21T18:29:37.478Z",
    image:
      "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
  },
  {
    product_name: "Facebook Inc",
    brand_name: "Facebook",
    price: 1000,
    address: {
      state: "Andaman and Nicobar Islands",
      city: "Port Blair",
    },
    discription: "Its a good product",
    date: "2019-04-09T10:12:34.860Z",
    time: "2015-10-27T18:38:51.634Z",
    image:
      "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Goa",
      city: "Mapusa",
    },
    discription: "Its a good product",
    date: "2021-03-16T22:47:40.549Z",
    time: "2014-06-19T04:23:50.403Z",
    image:
      "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Goa",
      city: "Marmagao",
    },
    discription: "Its a good product",
    date: "2015-05-29T23:38:10.157Z",
    time: "2016-02-26T13:36:42.435Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Haryana",
      city: "Charkhi Dadri",
    },
    discription: "Its a good product",
    date: "2018-02-09T12:16:15.603Z",
    time: "2014-09-18T08:17:26.613Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Himachal Pradesh",
      city: "Mandi",
    },
    discription: "Its a good product",
    date: "2013-07-09T13:10:42.267Z",
    time: "2016-03-10T17:13:29.575Z",
    image:
      "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
  },
  {
    product_name: "Facebook Inc",
    brand_name: "Facebook",
    price: 1000,
    address: {
      state: "Haryana",
      city: "Taraori",
    },
    discription: "Its a good product",
    date: "2014-05-11T21:47:54.106Z",
    time: "2015-01-05T22:11:38.557Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Goa",
      city: "Marmagao",
    },
    discription: "Its a good product",
    date: "2020-07-12T07:08:33.247Z",
    time: "2018-05-13T11:14:54.574Z",
    image:
      "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Haryana",
      city: "Mandi Dabwali",
    },
    discription: "Its a good product",
    date: "2018-01-16T15:27:23.873Z",
    time: "2017-01-09T14:37:42.370Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Himachal Pradesh",
      city: "Solan",
    },
    discription: "Its a good product",
    date: "2016-12-16T06:16:12.460Z",
    time: "2018-04-12T17:59:29.878Z",
    image:
      "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Haryana",
      city: "Rania",
    },
    discription: "Its a good product",
    date: "2015-11-17T20:12:45.812Z",
    time: "2019-06-12T09:47:23.939Z",
    image:
      "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Himachal Pradesh",
      city: "Sundarnagar",
    },
    discription: "Its a good product",
    date: "2015-10-23T10:08:48.825Z",
    time: "2019-10-30T05:53:03.454Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  },
  {
    product_name: "Facebook Inc",
    brand_name: "Facebook",
    price: 1000,
    address: {
      state: "Haryana",
      city: "Gurgaon",
    },
    discription: "Its a good product",
    date: "2012-02-01T19:19:37.051Z",
    time: "2018-08-05T11:31:55.396Z",
    image:
      "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Goa",
      city: "Margao",
    },
    discription: "Its a good product",
    date: "2016-03-09T11:09:47.202Z",
    time: "2015-08-07T18:02:38.028Z",
    image:
      "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Haryana",
      city: "Fatehabad",
    },
    discription: "Its a good product",
    date: "2018-02-13T12:27:29.256Z",
    time: "2018-08-21T13:52:38.286Z",
    image:
      "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Himachal Pradesh",
      city: "Mandi",
    },
    discription: "Its a good product",
    date: "2017-12-07T21:36:56.342Z",
    time: "2018-12-29T10:45:05.087Z",
    image:
      "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
  },
  {
    product_name: "Amazon pvt ltd",
    brand_name: "Amazon",
    price: 300,
    address: {
      state: "Goa",
      city: "Margao",
    },
    discription: "Its a good product",
    date: "2018-01-13T15:01:02.454Z",
    time: "2016-06-18T12:05:29.171Z",
    image:
      "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
  },
];

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

console.log(cities);

function Edvora() {
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
      for (const property in products) {
        products[property].forEach((product) => {
          if (product.brand_name == filterProduct) {
            if (firstFilter[property]) {
              firstFilter[property].push(product);
            } else {
              firstFilter[property] = [product];
            }
          }
        });
      }
    } else {
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

    if (filterState && !firstFilter) {
      for (const property in products) {
        products[property].forEach((product) => {
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

    if (thirdFilter) {
      setNoData(false);
      setFilteredData(thirdFilter || secondFilter || firstFilter);
    } else {
      setNoData(true);
      setFilteredData(products);
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
            Haven't used any production dependencies
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

export default Edvora;
