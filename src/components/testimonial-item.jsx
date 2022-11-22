import cn from "classnames";

const TestimonialItem = ({ className = "", testimonial }) => {
  return (
    <div className={cn(className)}>
      <div className="pb-[24px] border-b border-gray-200">
        <h2 className="uppercase text-gray-700">{testimonial.user.name}</h2>
        <p className="mt-[8px] text-[14px] text-gray-600">
          Position: {testimonial.user.position}
        </p>
      </div>

      <p className="mt-[24px] leading-7 tracking-wide text-gray-600">
        {testimonial.testimonial}
      </p>
    </div>
  );
};

export default TestimonialItem;
