import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Popup from "./Popup";
import FilterSidebar from "./FilterSidebar";
import {
  Container,
  ContentContainer,
  HeaderContainer,
  HeaderText,
  InnerConatiner,
  Loading,
  MiniHeaderContainer,
  MiniHeaderText,
  ProductCardContainer,
  Select,
  SideBarContainer,
} from "../styles/ProductList";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterProducts] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("Featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilterProducts(data);
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory) {
      setFilterProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    } else {
      setProducts(products);
    }
  };

  const handlePriceRangeChange = (range) => {
    const rangeKey = `${range.min}-${range.max}`;

    setSelectedPriceRanges((prevSelectedRanges) => {
      const updatedRanges = prevSelectedRanges.includes(rangeKey)
        ? prevSelectedRanges.filter((key) => key !== rangeKey)
        : [...prevSelectedRanges, rangeKey];

      const filtered = filterproducts.filter((product) =>
        updatedRanges.some((rangeKey) => {
          const [min, max] = rangeKey.split("-").map(Number);
          return product.price >= min && product.price <= max;
        })
      );

      setFilterProducts(filtered);
      return updatedRanges;
    });
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prevSelectedRatings) => {
      return prevSelectedRatings.includes(rating)
        ? prevSelectedRatings.filter((r) => r !== rating)
        : [...prevSelectedRatings, rating];
    });
  };

  const applyFilters = () => {
    let filtered = products;

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some((rangeKey) => {
          const [min, max] = rangeKey.split("-").map(Number);
          return product.price >= min && product.price <= max;
        })
      );
    }

    if (selectedRatings.length > 0) {
      filtered = filtered.filter((product) =>
        selectedRatings.some((rating) => product.rating.rate >= rating)
      );
    }

    console.log("filtered", filtered);
    setFilterProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedPriceRanges, selectedRatings]);

  useEffect(() => {
    const sortedProducts = [...filterproducts].sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });
    setFilterProducts(sortedProducts);
  }, [sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Loading>{error}</Loading>;

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>UMART STORE</HeaderText>
      </HeaderContainer>

      <InnerConatiner>
        <SideBarContainer>
          <FilterSidebar
            onCategoryChange={handleCategoryChange}
            handlePriceChange={handlePriceRangeChange}
            handleRatingChange={handleRatingChange}
            selectedRatings={selectedRatings}
            selectedPriceRanges={selectedPriceRanges}
          />
        </SideBarContainer>

        <ContentContainer>
          <MiniHeaderContainer>
            <MiniHeaderText>Multivitamins</MiniHeaderText>
            <Select onChange={handleSortChange} value={sortOrder}>
              <option value="Featured" disabled>
                Featured
              </option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
          </MiniHeaderContainer>

          <ProductCardContainer>
            {filterproducts && filterproducts.length > 0 ? (
              filterproducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => setSelectedProduct(product)}
                />
              ))
            ) : (
              <p>No products available.</p>
            )}
          </ProductCardContainer>

          {selectedProduct && (
            <Popup
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </ContentContainer>
      </InnerConatiner>
    </Container>
  );
}

export default ProductList;
