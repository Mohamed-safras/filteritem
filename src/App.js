import { useEffect, useState } from "react";
import "./app.scss";
import Filter from "./components/Filter";
import Products from "./components/Products";
import SkeltonLoading from "./components/skelton/SkeltonLoading";
import { products } from "./components/data/products-data";
function App() {
  const [brand, setBrand] = useState([]);
  const [changeBrand, setChangeBrand] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [newProduct, setNewProduct] = useState(products);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const getSkeltonLoading = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    getSkeltonLoading();
  }, []);

  useEffect(() => {
    const newbrand = () => {
      let brands = ["all"];
      for (let i = 0; i < products.length; i++) {
        if (!brands.includes(products[i].brand)) {
          brands.push(products[i].brand);
        }
      }
      setBrand(brands);
    };
    newbrand();
  }, []);

  useEffect(() => {
    const FilterProduct = () => {
      for (let i = 1; i < brand.length; i++) {
        if (changeBrand === brand[i]) {
          setFilterProduct(
            newProduct.filter((item) => {
              return item.brand === brand[i];
            })
          );
        }
      }
    };

    const getProduct = () => {
      if (changeBrand === "all") {
        setFilterProduct(newProduct);
      } else {
        FilterProduct();
      }
    };
    getProduct();
  }, [changeBrand, newProduct, brand]);

  return (
    <div className="app">
      {isLoading ? (
        <SkeltonLoading products={products} />
      ) : (
        <div className="container">
          <Filter
            brand={brand}
            changeBrand={changeBrand}
            setChangeBrand={setChangeBrand}
          />
          <Products
            filterProduct={filterProduct}
            setNewProduct={setNewProduct}
          />
        </div>
      )}
    </div>
  );
}

export default App;
