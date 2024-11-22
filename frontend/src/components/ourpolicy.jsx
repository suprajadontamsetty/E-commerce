import { assets } from "../assets/assets";

const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5"
          alt="Exchange Policy"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400 dark:text-gray-500">
          We offer hassle-free exchange policy
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5"
          alt="Return Policy"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400 dark:text-gray-500">
          We provide 7 days free return policy
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5"
          alt="Customer Support"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400 dark:text-gray-500">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Ourpolicy;
