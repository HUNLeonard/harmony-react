import cn from "../../utils/cn";

interface ImgScrollListProps {
  images: string[];
  imgIndex: number;
}

const ImgScrollList = ({ images, imgIndex }: ImgScrollListProps) => {
  return (
    <>
      {images.map((image) => (
        <img
          key={image}
          src={image}
          className={cn(
            "h-full w-full block object-center object-cover",
            "shrink-0 grow-0 transition-transform ease-in-out duration-400",
          )}
          style={{ translate: `${-100 * imgIndex}% ` }}
        />
      ))}
    </>
  );
};

export default ImgScrollList;
