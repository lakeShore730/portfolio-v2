import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ExperienceLoader = (props) => {
  const { title, level } = props;

  const { ref, inView } = useInView();
  const [displayLoader, setDisplayLoader] = useState(false);

  useEffect(() => {
    if (inView) {
      setDisplayLoader(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-[14px] tracking-wide text-gray-500">
        <p>{title}</p>
        <p>{level}%</p>
      </div>

      <div className="mt-4 w-full rounded-sm bg-gray-200">
        <div
          style={displayLoader ? { width: `${level}%` } : {}}
          className="h-[6px] w-[0] rounded-sm transition-all duration-1000 ease-in bg-primary"
        />
      </div>
    </div>
  );
};

export default ExperienceLoader;
