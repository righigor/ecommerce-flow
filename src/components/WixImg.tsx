/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes } from "react";
import { media as wixMedia } from "@wix/sdk";

type WixImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "alt"
> & {
  mediaIndentifier: string | undefined;
  placeholder?: string;
  alt?: string | null | undefined;
} & (
    | {
        scaleToFill?: true;
        width: number;
        height: number;
      }
    | {
        scaleToFill: false;
      }
  );

export function WixImg({
  mediaIndentifier,
  placeholder = "/placeholder.png",
  alt,
  ...props
}: WixImgProps) {
  const imgUrl = mediaIndentifier
    ? props.scaleToFill || props.scaleToFill === undefined
      ? wixMedia.getScaledToFillImageUrl(
          mediaIndentifier,
          props.width,
          props.height,
          {},
        )
      : wixMedia.getImageUrl(mediaIndentifier).url
    : placeholder;

  return (
    <img src={imgUrl} alt={alt || ""} {...props} />
  )
}
