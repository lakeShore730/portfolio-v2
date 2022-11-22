import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import cn from "classnames";
import TestimonialItem from "../../components/testimonial-item";

const testimonials = [
  {
    id: 1,
    user: {
      name: "Lorem ipsum dolor",
      position: "Project Manager",
    },
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus.",
  },

  {
    id: 2,
    user: {
      name: "Lorem ipsum dolor",
      position: "Project Manager",
    },
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus.",
  },

  {
    id: 3,
    user: {
      name: "Lorem ipsum dolor",
      position: "Project Manager",
    },
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus.",
  },
];

const Testimonials = ({ className = "" }) => {
  return (
    <div id="testimonials" className={cn(className)}>
      <h1 className="title">Testimonials</h1>

      <Swiper
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mt-[38px]"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="pb-[55px]">
            <TestimonialItem testimonial={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
