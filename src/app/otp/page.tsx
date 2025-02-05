"use client";

import { useState, useRef } from "react";

export default function OTPInput() {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleInputChange = (e:any, index:any) => {
        const value = e.target.value;

        if (/^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        } else if (value === "") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    const handleKeyDown = (e:any, index:any) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e:any) => {
        const pastedData = e.clipboardData.getData("text").slice(0, 6);
        const newOtp = pastedData.split("").map((char:any) => (/^\d$/.test(char) ? char : ""));
        setOtp(newOtp);

        const lastIndex = newOtp.findIndex((char:any) => !char);
        if (lastIndex === -1) {
            inputRefs.current[5]?.focus();
        } else {
            inputRefs.current[lastIndex]?.focus();
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-base-content/80 mb-4">
                    Enter Email OTP
                </h2>
                <p className="text-center text-sm text-base-content/60 mb-6">
                    We've sent a one-time password to your registered email address.
                </p>
                <div className="form-control">
                    <div
                        className="flex items-center gap-2"
                        onPaste={handlePaste}
                    >
                        {Array.from({ length: 6 }, (_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={otp[index]}
                                ref={(el) => (inputRefs.current[index] = el)}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="ml-1 w-14 h-11 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-4 md:mt-6">
                    <button
                        className="w-full py-2 px-4 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        onClick={() => console.log("OTP Submitted:", otp.join(""))}
                    >
                        Verify OTP
                    </button>
                </div>
                <p className="mt-4 text-center text-md text-base-content/100 md:mt-6">
                    Didn't receive the OTP?{" "}
                    <button
                        onClick={() => console.log("Resend OTP")}
                        className="text-primary hover:underline focus:outline-none"
                    >
                        Resend
                    </button>
                </p>
            </div>
        </div>
    );
}
