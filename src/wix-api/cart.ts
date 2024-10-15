import { WIX_STORES_APP_ID } from "@/lib/constants";
import { findVariant } from "@/lib/utils";
import { WixClientType } from "@/lib/wix-client.base";
import { products } from "@wix/stores";

export async function getCart(wixClient: WixClientType) {
  try {
    return await wixClient.currentCart.getCurrentCart();
  } catch (error) {
    if (
      (error as any).details.applicationError.code === "OWNED_CART_NOT_FOUND"
    ) {
      return null;
    } else {
      throw error;
    }
  }
}

export interface AddToCartValues {
  product: products.Product;
  selectedOptions: Record<string, string>;
  quantity: number;
}

export async function addToCart(
  wixClient: WixClientType,
  { product, quantity, selectedOptions }: AddToCartValues,
) {
  const selectedVariant = findVariant(product, selectedOptions);

  return await wixClient.currentCart.addToCurrentCart({
    lineItems: [
      {
        catalogReference: {
          appId: WIX_STORES_APP_ID,
          catalogItemId: product._id,
          options: selectedVariant
            ? {
                variantId: selectedVariant._id,
              }
            : { options: selectedOptions },
        },
        quantity,
      },
    ],
  });
}

export interface UpdateCartItemQuantityValues {
  productId: string;
  newQuantity: number;
}

export async function updateCartItemQuantity(
  wixClient: WixClientType,
  { productId, newQuantity }: UpdateCartItemQuantityValues,
) {
  return wixClient.currentCart.updateCurrentCartLineItemQuantity([
    {
      _id: productId,
      quantity: newQuantity,
    },
  ]);
}

export async function removeCartItem(wixClient: WixClientType, productId: string) {
  return wixClient.currentCart.removeLineItemsFromCurrentCart([productId]);
}