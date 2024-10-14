import { getProductBySlug } from "@/wix-api/products";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const mainImg = product.media?.mainMedia?.image;

  return {
    title: product.name,
    description: "Product description",
    openGraph: {
      images: mainImg?.url
        ? [
            {
              url: mainImg.url,
              width: mainImg.width,
              height: mainImg.height,
              alt: mainImg.altText || "",
            },
          ]
        : undefined,
    },
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const product = await getProductBySlug(slug);

  if (!product?._id) notFound();

  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <ProductDetails product={product} />
    </main>
  );
}
