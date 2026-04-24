import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const orderDetails = location.state?.orderDetails;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h2>
          <p className="text-gray-600 mb-6">No order details available.</p>
          <button
            onClick={() => navigate('/courses')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">

        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-green-100">Your course enrollment has been confirmed</p>
        </div>

        <div className="p-8">

          {/* Order Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

            {/* Course Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course Name:</span>
                  <span className="font-medium text-gray-800">{course.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium text-gray-800">{course.type || 'General'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium text-gray-800">${course.price || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-800">{course.duration || 'Lifetime'}</span>
                </div>
              </div>
            </div>

            {/* Order Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium text-gray-800 font-mono">
                    {orderDetails?.id || `ORD-${Date.now()}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium text-gray-800">PayPal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-800">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">Confirmed</span>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p className="font-medium text-gray-800">Access Your Course</p>
                  <p className="text-gray-600 text-sm">Go to "My Courses" to start learning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p className="font-medium text-gray-800">Watch Videos</p>
                  <p className="text-gray-600 text-sm">Access all course videos and materials</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p className="font-medium text-gray-800">Track Progress</p>
                  <p className="text-gray-600 text-sm">Monitor your learning progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/my-courses')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Learning
            </button>
            <button
              onClick={() => navigate('/courses')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Browse More Courses
            </button>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>A confirmation email has been sent to your registered email address.</p>
            <p className="mt-1">For support, contact us at support@apnacollege.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;