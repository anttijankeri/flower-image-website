import { FC, useMemo } from "react";
import { ImageItemProps } from "../../types";
import useAppContext from "../../AppContext";

const ImageItem: FC<ImageItemProps> = ({ imageId }) => {
  const { state } = useAppContext();

  const data = useMemo(() => {
    return state.images.find((image) => image.id === imageId);
  }, [imageId, state]);
  return (
    <div>
      {data && <img src={data.url} alt={data.userText} />}
      {!data && <span>Error image not found</span>}
    </div>
  );
};

export default ImageItem;
