/* eslint-disable @next/next/no-img-element */
import { products } from "@wix/stores";
import Link from "next/link";
import { media as wixMedia } from "@wix/sdk";

interface ProductProps {
  product: products.Product;
}

export default function Product({ product }: ProductProps) {
  const mainImg = product.media?.mainMedia?.image;

  const resizedImgUrl = mainImg?.url
    ? wixMedia.getScaledToFillImageUrl(mainImg.url, 700, 700, {})
    : null;

  return (
    <Link href={`/products/${product.slug}`} className="h-full border">
      <div className="overflow-hidden">
        <img
          src={resizedImgUrl || "/placeholder.png"}
          alt={mainImg?.altText || ""}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-3">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
        />
      </div>
    </Link>
  );
}
