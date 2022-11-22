import cn from "classnames";

const ResumeList = ({ data = [], className = "", ...others }) => {
  return (
    <div {...others} className={className}>
      {data.map((item, i) => (
        <div className="relative" key={item.id}>
          <div className="w-[12px] h-[12px] absolute rounded-full border-[2px] border-primary bg-white" />

          <div
            className={cn("ml-[5px] px-5 border-l-[2px] border-primary", {
              "pb-[42px]": data.length - 1 !== i,
            })}
          >
            <p className="uppercase text-primary">{item.title}</p>
            <p className="mt-[14px] text-[12px] text-gray-500">
              {item.duration}
            </p>

            <p className="mt-[20px] max-w-[680px] leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeList;
