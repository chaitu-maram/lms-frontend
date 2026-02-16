"use client";

export default function AdminSignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
            🎓
          </div>
          <h1 className="text-2xl font-semibold text-blue-700">
            Admin Signup Form
          </h1>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 border-b pb-2 mb-4">
              Personal Information
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input className="input" placeholder="First Name *" />
              <input className="input" placeholder="Last Name *" />
            </div>

            <input
              className="input mt-4"
              placeholder="admin@yourinstitute.com *"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="password"
                className="input"
                placeholder="Create password *"
              />
              <input
                type="password"
                className="input"
                placeholder="Confirm password *"
              />
            </div>

            <input
              className="input mt-4"
              placeholder="+91 Contact Number *"
            />
          </div>

          {/* Institute Information */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 border-b pb-2 mb-4">
              Institute Information
            </h2>

            <input
              className="input mb-4"
              placeholder="Institute Name *"
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <label className="upload-box">
                ⬆ Upload logo
                <span>PNG, JPG</span>
                <input type="file" hidden />
              </label>

              <label className="upload-box">
                ⬆ Upload cover
                <span>PNG, JPG</span>
                <input type="file" hidden />
              </label>
            </div>

            <textarea
              className="input h-24"
              placeholder="Complete Institute Address *"
            />
          </div>
        </form>

        {/* Terms */}
        <div className="flex items-center gap-2 mt-6">
          <input type="checkbox" />
          <p className="text-sm">
            I agree to the{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>

        {/* Submit */}
        <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
          Create Institute Account
        </button>

        {/* Footer */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">
            Sign in here
          </span>
        </p>
      </div>

      {/* GLOBAL STYLES (SAFE) */}
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 14px;
          font-size: 14px;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        .upload-box {
          border: 2px dashed #93c5fd;
          border-radius: 16px;
          padding: 28px;
          text-align: center;
          font-size: 14px;
          color: #2563eb;
          cursor: pointer;
        }
        .upload-box span {
          display: block;
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
}
