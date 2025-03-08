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
            <div className="flex flex-col items-center w-56 h-32" key={i}>
              <div
                className={`h-10 w-10 rounded-full border-1 border-gray-400 flex items-center justify-center ${
                  Number(i) == Number(stepper)
                    ? "bg-green-600 text-white border-none"
                    : ""
                }`}
              >
                {i + 1}
              </div>
              <div className="p-6">{step.name}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center h-[10vh]">
        {steps[stepper]?.description || ""}
      </div>

      <div className="flex justify-center items-center h-[10vh]">
        {stepper < 4 && (
          <button
            className="text-white bg-blue-400 rounded-2xl p-3 pl-4 pr-4"
            onClick={() => {
              setStepper((stepper) => stepper + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
