import React from "react";
import {
  Card,
  CardContentContainer,
  DiscountTag,
  Header,
  Image,
  ImageContainer,
  WishlistIcon,
  Title,
  PriceContainer,
  CurrentPrice,
  OriginalPrice,
  DiscountPercentage,
  AddToCartButton,
  Badge,
  CardBottomContainer,
} from "../styles/ProductCard";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card>
      {/* Header with discount tag and wishlist icon */}
      <Header>
        <DiscountTag>33% Off</DiscountTag>
        <WishlistIcon>❤️</WishlistIcon>
      </Header>

      <CardContentContainer>
        {/* Product image */}
        <ImageContainer>
          <Image src={product.image} alt={product.title} />
        </ImageContainer>
        <CardBottomContainer>
          {/* Product title */}
          <Title>{product.title}</Title>

          {/* Price details */}
          <PriceContainer>
            <CurrentPrice>{product.price}</CurrentPrice>
            <OriginalPrice>₹2,999</OriginalPrice>
            <DiscountPercentage>(33% off)</DiscountPercentage>
          </PriceContainer>

          {/* Add to Cart button with badge */}
          <AddToCartButton onClick={onAddToCart}>
            <Badge>A</Badge>
            Add To Cart
          </AddToCartButton>
        </CardBottomContainer>
      </CardContentContainer>
    </Card>
  );
};

export default ProductCard;
