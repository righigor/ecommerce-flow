import { products } from "@wix/stores";
import { Button, ButtonProps } from "./ui/button";
import { addToCart } from "@/wix-api/cart";

interface AddToCartButtonProps extends ButtonProps {
  product: products.Product;
  selectedOptions: Record<string, string>;
  quantity: number;
}

export default function AddToCartButton({
  product,
  selectedOptions,
  quantity,
  className,
  ...props
}: AddToCartButtonProps) {
  return (
    <Button
      {...props}
      onClick={() => {
        addToCart({ product, selectedOptions, quantity });
      }}
    >
      Add to Cart
    </Button>
  );
}
