import { useState } from "react";

const Stepper = () => {
  const steps = [
    { name: "Customer Info", description: "Please Enter customer Information" },
    { name: "Shipping Info", description: "Please enter the shipping info" },
    { name: "Payment", description: "Please enter your shipping details" },
    { name: "Delivered", description: "Your order has been delivered" },
  ];

  const [stepper, setStepper] = useState(0);
  return (
    <>
      <div className="flex gap-8 h-[30vh] justify-center items-center">
        {steps.map((step, i) => {
          return (
            <div className="flex flex-col w-56 h-32 relative " key={i}>
              <div
                className={`h-10 w-10 rounded-full border-1 border-gray-400 flex items-center justify-center ${
                  Number(i) == Number(stepper)
                    ? "bg-blue-600 text-white border-none"
                    : Number(i) < Number(stepper)
                    ? "bg-green-600 text-white border-none"
                    : null
                }`}
              >
                {Number(i) < Number(stepper) ? "✔️" : i + 1}
              </div>
              {i < 3 && (
                <div
                  className={`h-2 w-[217px] bg-gray-200 absolute top-4 left-10 ${
                    Number(i) < Number(stepper)
                      ? "bg-green-600 text-white border-none"
                      : null
                  }`}
                ></div>
              )}
              <div className="p-6 ml-[-1.3rem]">{step.name}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center h-[10vh]">
        {steps[stepper]?.description || "Your order has been delivered"}
      </div>

      <div className="flex justify-center items-center h-[10vh]">
        {stepper < 4 && (
          <button
            className="text-white bg-blue-400 rounded-2xl p-3 pl-4 pr-4"
            onClick={() => {
              setStepper((stepper) => stepper + 1);
            }}
          >
            {stepper === 3 ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
