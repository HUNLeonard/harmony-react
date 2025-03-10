import cn from "../../utils/cn";

interface ImgScrollListProps {
  images: string[];
  imgIndex: number;
}

const ImgScrollList = ({ images, imgIndex }: ImgScrollListProps) => {
  const translatePercentage = -100 * imgIndex;

  return (
    <>
      {images.map((image, idx) => (
        <img
          key={image}
          src={image}
          className={cn(
            "h-full w-full block object-center object-cover",
            "shrink-0 grow-0 [transition:translate_0.4s,opacity_0.1s] ease-in-out",
            idx === imgIndex ? "opacity-100" : "opacity-0"
          )}
          style={{ translate: `${translatePercentage}% ` }}
        />
      ))}
    </>
  );
};

export default ImgScrollList;
