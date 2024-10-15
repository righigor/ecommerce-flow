import { products } from "@wix/stores";
import { Button, ButtonProps } from "./ui/button";
import { addToCart } from "@/wix-api/cart";
import { wixBrowserClient } from "@/lib/wix-client.browser";

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
        addToCart(
          wixBrowserClient,
          { product, selectedOptions, quantity });
      }}
    >
      Add to Cart
    </Button>
  );
}
