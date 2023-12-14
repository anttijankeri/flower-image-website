import { FC } from "react";
import { ImageListProps } from "../../types";
import ImageItem from "./ImageItem";

const ImageList: FC<ImageListProps> = ({ images }) => {
  return (
    <div>
      {images.map((image) => {
        return <ImageItem imageId={image.imageId} />;
      })}
    </div>
  );
};

export default ImageList;
