import cn from "../utils/cn";

interface ImgSwitcher {
  img1: string;
  img2: string;
  name: string;
  isSwitched: boolean;
  children?: React.ReactNode;
}

const ImgSwitcher = ({
  img1,
  img2,
  name,
  isSwitched,
  children,
}: ImgSwitcher) => {
  return (
    <div className="w-full h-full relative">

      <img
        src={img1}
        alt={`Img of ${name}`}
        className="w-full h-full aspect-square object-center object-contain lg:rounded-4xl"
      />
      <img
        src={img2}
        alt={`Img of ${img2}`}
        className={cn(
          "absolute left-0 top-0 w-full h-full object-center object-contain lg:rounded-4xl transition-opacity duration-400",
          isSwitched ? "opacity-100" : "opacity-0",
        )}
      />
      {children}


    </div>
  );
};

export default ImgSwitcher;
