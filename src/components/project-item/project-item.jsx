import cn from "classnames";

const ProjectItem = ({ item, className = "", ...others }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
        className
      )}
      {...others}
    >
      <figure className="py-[32px] px-[18px] flex items-center justify-center lg:col-span-2 bg-gray-100">
        <img src={item.image} alt={item.name} />
      </figure>

      <div className="py-[32px] px-[18px] lg:col-span-3">
        <h2 className="text-[20px] font-medium text-gray-700">{item.name}</h2>
        <p className="mt-[16px] tracking-wider leading-7 text-gray-600">
          {item.shortDescription}
        </p>

        <p className="mt-[28px] text-[14px] font-medium text-gray-500">
          USED STACK:
        </p>

        <div className="flex flex-wrap gap-5 mt-[16px]">
          {item.usedStacks.map((stack, i) => (
            <p
              key={i}
              className="px-[8px] py-[4px] text-[14px] capitalize rounded-md text-primary bg-light-primary"
            >
              {stack}
            </p>
          ))}
        </div>

        <div className="flex justify-end">
          <a
            href={item.link.url}
            target="_blank"
            rel="noreferrer"
            className="mt-[16px] text-[14px] font-medium text-primary"
            onClick={(e) => e.stopPropagation()}
          >
            {item.link.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
