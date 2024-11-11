import React, { useState } from "react";
import {
  Checkbox,
  CheckboxLabel,
  Section,
  SectionContent,
  SectionHeader,
  SeeAll,
  Sidebar,
  StarRating,
} from "../styles/FilterSidebar";

const FilterSidebar = ({
  onCategoryChange,
  handlePriceChange,
  selectedPriceRanges,
  selectedRatings,
  handleRatingChange,
}) => {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);

  const toggleCategory = () => setCategoryOpen(!categoryOpen);
  const toggleRating = () => setRatingOpen(!ratingOpen);
  const togglePrice = () => setPriceOpen(!priceOpen);

  const categories = [
    { label: "Electronics", value: "electronics" },
    { label: "Jewelry", value: "jewelery" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
  ];

  const priceRanges = [
    { min: 0, max: 1000, label: "₹0 - ₹1000" },
    { min: 1000, max: 2000, label: "₹1000 - ₹2000" },
    { min: 2000, max: 3000, label: "₹2000 - ₹3000" },
    { min: 3000, max: 4000, label: "₹3000 - ₹4000" },
    { min: 4000, max: 5000, label: "₹4000 - ₹5000" },
  ];

  const ratingOptions = [5, 4, 3, 2]; // Rating thresholds for 5 stars, 4 stars, etc.

  return (
    <Sidebar>
      {/* Category Section */}
      <Section>
        <SectionHeader onClick={toggleCategory}>
          Category {categoryOpen ? "▾" : "▸"}
        </SectionHeader>
        <SectionContent isOpen={categoryOpen}>
          {categories.map((category) => (
            <CheckboxLabel
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
            >
              {category.label}
            </CheckboxLabel>
          ))}
          <SeeAll>See all</SeeAll>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader onClick={togglePrice}>
          Price {priceOpen ? "▾" : "▸"}
        </SectionHeader>
        <SectionContent isOpen={priceOpen}>
          {priceRanges.map((range) => {
            const rangeKey = `${range.min}-${range.max}`;
            return (
              <CheckboxLabel key={range.label}>
                <Checkbox
                  type="checkbox"
                  checked={selectedPriceRanges.includes(rangeKey)}
                  onChange={() => handlePriceChange(range)}
                />
                {range.label}
              </CheckboxLabel>
            );
          })}
          <SeeAll>See all</SeeAll>
        </SectionContent>
      </Section>

      {/* Rating Section */}
      <Section>
        <SectionHeader onClick={toggleRating}>
          Rating {ratingOpen ? "▾" : "▸"}
        </SectionHeader>
        <SectionContent isOpen={ratingOpen}>
          {ratingOptions.map((rating) => (
            <CheckboxLabel key={rating}>
              <Checkbox
                type="checkbox"
                checked={selectedRatings.includes(rating)}
                onChange={() => handleRatingChange(rating)}
              />
              <StarRating>{"⭐".repeat(rating)}</StarRating> & Up
            </CheckboxLabel>
          ))}
        </SectionContent>
      </Section>
    </Sidebar>
  );
};

export default FilterSidebar;
