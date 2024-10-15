import { getWixClient, WixClientType } from "@/lib/wix-client.base";

export async function getCollectionBySlug(
  wixClient: WixClientType,
  slug: string) {
  const {collection} = await wixClient.collections.getCollectionBySlug(slug);

  return collection || null;
}