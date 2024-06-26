import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[32rem] mx-auto md:scale-90 h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-1/2 py-14 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/200 texct-xl">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">₹</div>
                <div className="text-7xl leading-none font-bold">
                  {item.price}
                </div>
                <p className="line-through text-lg md:text-3xl mx-4 mt-8 opacity-80">{item.cancel}</p>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.link}
            white={!!item.price}
          >
            {item.contact ? "Register Now" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
