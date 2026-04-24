import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Paypal from "../Components/Layout/Paypal";

const EnrollCourse = () => {
  const location = useLocation();
  const course = location.state;
  const [viewClicked,setViewClicked]=useState(false);
  const [proceedPayClicked,setProceedPayClicked]=useState(false);
  const [isPayClicked,setIsPayClicked]=useState(false);
  const navigate = useNavigate();

  function handleSuccess(orderDetails){
    navigate("/my-order", {
      state: {
        course: course,
        orderDetails: orderDetails
      }
    });
  }

  function handleError(err){
    console.log(err);
  }

  function handlePayClicked(){
    setIsPayClicked(true);
  }

  function handleView() {
    setViewClicked((prev) => !prev);
  }

  function handleProceedToPay(){
    setProceedPayClicked(true);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900"
    >
      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        {!proceedPayClicked && (
        <div className="bg-blue-100/40 p-5 flex flex-col gap-4">

          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-6 text-center relative">
            <p className="absolute top-2 right-4 text-xs opacity-80">
              Secured by Cashfree
            </p>
            <div className="bg-white text-black text-xs px-2 py-1 rounded w-fit mx-auto mb-2">
              APNA COLLEGE
            </div>
            <h2 className="text-xl font-semibold">Apna College</h2>
          </div>

          <h3 className="font-semibold text-gray-800">
            {course?.name} | Complete Placement Preparation + AI/ML
          </h3>

          <div className="bg-white rounded-xl p-4 shadow-md">
            <img
              src={course?.image}
              alt="course"
              className="rounded-lg w-full h-44 object-cover"
            />

            <h3 className="mt-3 font-semibold text-gray-900">
              {course?.name} – {course?.type} Batch
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              {course?.description}
            </p>

            {viewClicked && (
              <>
                <p className="text-sm text-gray-600 mt-2">{course?.startDate}</p>
                <p className="text-sm text-gray-600 mt-2">{course?.expireDate}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Note : Recheck your email id, batch access will be provided for your email id.
                </p>
                <div className="mt-3 text-center text-sm text-gray-600 cursor-pointer">
                  <p onClick={handleView}>View less ^</p>
                </div>
              </>
            )}

            {!viewClicked && (
              <div className="mt-3 text-center text-sm text-gray-600 cursor-pointer">
                <p onClick={handleView}>View details ⌄</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-4 shadow text-sm font-medium">
            <h1 className="font-semibold text-black">Contact Us</h1>
            <p className="font-semibold text-black">dipanshu@gmail.com</p>
          </div>

          <button
            className="sm:hidden w-full rounded-md py-3 items-center bg-blue-700 hover:bg-blue-900 text-white"
            onClick={handleProceedToPay}
          >
            Proceed to Pay
          </button>
        </div>
        )}

        {/* MOBILE */}
        {proceedPayClicked && (
          <div className="flex sm:hidden p-6 bg-white/50 flex-col justify-between">

            <form onSubmit={(e)=>{
              e.preventDefault();
              handlePayClicked();
            }}>
                        <div>
              <div className="bg-white rounded-xl p-4 shadow">
                <h3 className="font-semibold text-gray-800">
                  Payment Details
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  (18% GST already included which is paid to the Government)
                </p>
                <p className="text-xl font-bold mt-2 text-black">
                  ₹ {course?.price}
                </p>
              </div>

              <div className="mt-5 space-y-4">

                <div>
                  <label className="text-sm font-semibold text-black">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Eg. ashok.kumar@gmail.com"
                    className="w-full mt-1 p-3 border rounded-lg text-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-black">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex mt-1">
                    <span className="px-3 flex items-center border rounded-l-lg bg-gray-100 text-black">
                      +91
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Eg. 98XXXXXXX8"
                      className="w-full p-3 border rounded-r-lg text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-black">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eg. Ashok Kumar"
                    className="w-full mt-1 p-3 border rounded-lg text-black"
                  />
                </div>

              </div>
            </div>

              {!isPayClicked ? (
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-700 text-white rounded-md mt-4"
                >
                  Pay ₹ {course?.price}
                </button>
              ) : (
                <Paypal
                  amount={course.price}
                  onSuccess={handleSuccess}
                  onError={handleError}
                />
              )}

            </form>
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="hidden sm:flex p-6 bg-white/50 flex-col justify-between">

          <form onSubmit={(e)=>{
            e.preventDefault();
            handlePayClicked();
          }}>

            <div>
              <div className="bg-white rounded-xl p-4 shadow">
                <h3 className="font-semibold text-gray-800">
                  Payment Details
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  (18% GST already included which is paid to the Government)
                </p>
                <p className="text-xl font-bold mt-2 text-black">
                  ₹ {course?.price}
                </p>
              </div>

              <div className="mt-5 space-y-4">

                <div>
                  <label className="text-sm font-semibold text-black">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Eg. ashok.kumar@gmail.com"
                    className="w-full mt-1 p-3 border rounded-lg text-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-black">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex mt-1">
                    <span className="px-3 flex items-center border rounded-l-lg bg-gray-100 text-black">
                      +91
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Eg. 98XXXXXXX8"
                      className="w-full p-3 border rounded-r-lg text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-black">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eg. Ashok Kumar"
                    className="w-full mt-1 p-3 border rounded-lg text-black"
                  />
                </div>

              </div>
            </div>

            {!isPayClicked ? (
              <button
                type="submit"
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg"
              >
                Pay ₹ {course?.price} →
              </button>
            ) : (
              <Paypal
                amount={course.price}
                onSuccess={handleSuccess}
                onError={handleError}
              />
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

export default EnrollCourse;