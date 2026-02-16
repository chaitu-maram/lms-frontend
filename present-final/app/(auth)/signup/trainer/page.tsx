// "use client";

// export default function TrainerSignupPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-6">
//       <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10">

//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
//             👤
//           </div>
//           <h1 className="text-2xl font-semibold text-blue-700">
//             Trainer Signup Form
//           </h1>
//         </div>

//         {/* Form */}
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-10">

//           {/* Personal Information */}
//           <div>
//             <h2 className="section-title">Personal Information</h2>

//             <div className="grid grid-cols-2 gap-4">
//               <input className="input" placeholder="First name *" />
//               <input className="input" placeholder="Last name *" />
//             </div>

//             <input
//               className="input mt-4"
//               placeholder="trainer@email.com *"
//             />

//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <input
//                 type="password"
//                 className="input"
//                 placeholder="Create password *"
//               />
//               <input
//                 type="password"
//                 className="input"
//                 placeholder="Confirm password *"
//               />
//             </div>

//             <input
//               className="input mt-4"
//               placeholder="+91 Contact number *"
//             />

//             <input
//               className="input mt-4"
//               placeholder="Admin provided code *"
//             />
//           </div>

//           {/* Professional Information */}
//           <div>
//             <h2 className="section-title">Professional Information</h2>

//             <input
//               className="input mb-1"
//               placeholder="Type expertise area and press Enter"
//             />
//             <p className="text-xs text-blue-600 mb-4">
//               Type custom expertise and press Enter, or select from dropdown
//             </p>

//             <select className="input mb-4">
//               <option>Select or type your qualifications</option>
//               <option>B.Tech</option>
//               <option>M.Tech</option>
//               <option>PhD</option>
//             </select>

//             <textarea
//               className="input h-28 mb-4"
//               placeholder="Brief description about yourself and teaching experience"
//             />

//             {/* FIXED UPLOAD BOX */}
//             <label className="upload-box w-full flex flex-col items-center justify-center gap-2">
//               <svg
//                 className="w-6 h-6 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 16V8m0 0l-4 4m4-4l4 4m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>

//               <span className="font-medium text-blue-600">
//                 Upload profile picture
//               </span>

//               <span className="text-xs text-gray-500">
//                 PNG, JPG (Max 5MB)
//               </span>

//               <input type="file" hidden />
//             </label>
//           </div>
//         </form>

//         {/* Terms */}
//         <div className="flex items-center gap-2 mt-6">
//           <input type="checkbox" />
//           <p className="text-sm">
//             I agree to the{" "}
//             <span className="link">Terms of Service</span> and{" "}
//             <span className="link">Privacy Policy</span>
//           </p>
//         </div>

//         {/* Submit */}
//         <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
//           Create Trainer Account
//         </button>

//         {/* Footer */}
//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <span className="link font-semibold">Sign in here</span>
//         </p>
//       </div>

//       {/* GLOBAL SAFE STYLES */}
//       <style jsx global>{`
//         .input {
//           width: 100%;
//           padding: 12px 14px;
//           border: 1px solid #cbd5e1;
//           border-radius: 14px;
//           font-size: 14px;
//           outline: none;
//         }
//         .input:focus {
//           border-color: #2563eb;
//           box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
//         }
//         .section-title {
//           font-size: 18px;
//           font-weight: 600;
//           color: #1d4ed8;
//           border-bottom: 1px solid #bfdbfe;
//           padding-bottom: 8px;
//           margin-bottom: 16px;
//         }
//         .upload-box {
//           border: 2px dashed #93c5fd;
//           border-radius: 16px;
//           padding: 36px;
//           background: #f8fbff;
//           cursor: pointer;
//           text-align: center;
//         }
//         .link {
//           color: #2563eb;
//           text-decoration: underline;
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";
import { useState } from "react";

export default function TrainerSignupPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    contact_number: "",
    expertise_area: "",
    qualifications: "",
    bio: "",
    admin: "",
    profile_image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0]

    // store file for backend upload
    setFormData({
      ...formData,
      profile_image: file,
    })

    // store file separately to show name/preview
    setSelectedFile(file)
  }
}


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("contact_number", formData.contact_number);
    data.append("expertise_area", formData.expertise_area);
    data.append("qualifications", formData.qualifications);
    data.append("bio", formData.bio);
    data.append("admin", formData.admin);

    if (formData.profile_image) {
      data.append("profile_image", formData.profile_image);
    }

    const res = await fetch("http://127.0.0.1:8000/api/auth/register/trainer/", {

      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (res.ok) {
      alert("Trainer Registered Successfully! OTP sent to email.");
    } else {
      alert(JSON.stringify(result));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
            👤
          </div>
          <h1 className="text-2xl font-semibold text-blue-700">
            Trainer Signup Form
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Personal Information */}
          <div>
            <h2 className="section-title">Personal Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <input name="first_name" onChange={handleChange} className="input" placeholder="First name *" />
              <input name="last_name" onChange={handleChange} className="input" placeholder="Last name *" />
            </div>

            <input name="email" onChange={handleChange} className="input mt-4" placeholder="trainer@email.com *" />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <input type="password" name="password" onChange={handleChange} className="input" placeholder="Create password *" />
              <input type="password" name="confirm_password" onChange={handleChange} className="input" placeholder="Confirm password *" />
            </div>

            <input name="contact_number" onChange={handleChange} maxLength={10}
    inputMode="numeric"
    pattern="[0-9]*" className="input mt-4" placeholder="+91 Contact number *" />

            <input
              name="admin"
              onChange={handleChange}
              className="input mt-4"
              placeholder="Admin ID (Example: AD0001)"
            />
          </div>

          {/* Professional Information */}
          <div>
            <h2 className="section-title">Professional Information</h2>

            <input
              name="expertise_area"
              onChange={handleChange}
              className="input mb-1"
              placeholder="Type expertise area and press Enter"
            />
            <p className="text-xs text-blue-600 mb-4">
              Type custom expertise and press Enter, or select from dropdown
            </p>

            <select name="qualifications" onChange={handleChange} className="input mb-4">
              
              <option value="" >Select or type your qualifications</option>
              <option>Graduation</option>
              <option>Post Graduation</option>
              <option>PhD</option>
            </select>

            <textarea
              name="bio"
              onChange={handleChange}
              className="input h-28 mb-4"
              placeholder="Brief description about yourself and teaching experience"
            />

            {/* SAME UPLOAD DESIGN — only logic added */}
            {/* <label className="upload-box w-full flex flex-col items-center justify-center gap-2">
              
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V8m0 0l-4 4m4-4l4 4m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="font-medium text-blue-600">
                Upload profile picture
              </span>

              <span className="text-xs text-gray-500">
                PNG, JPG (Max 5MB)
              </span>

              <input type="file" hidden onChange={handleFileChange} />
            </label> */}



            <label className="upload-box w-full flex flex-col items-center justify-center gap-2 cursor-pointer">
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16V8m0 0l-4 4m4-4l4 4m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>

  <span className="font-medium text-blue-600">
    {selectedFile ? "Change profile picture" : "Upload profile picture"}
  </span>

  <span className="text-xs text-gray-500">
    PNG, JPG (Max 5MB)
  </span>

  {/* ✅ Show file name */}
  {selectedFile && (
    <span className="text-sm text-green-600 font-medium">
      {selectedFile.name}
    </span>
  )}

  <input type="file" hidden accept="image/*" onChange={handleFileChange} />
</label>

          </div>

          {/* Submit */}
          <button type="submit" className="col-span-2 w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
            Create Trainer Account
          </button>
        </form>
      </div>

      {/* ORIGINAL STYLES — unchanged */}
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
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1d4ed8;
          border-bottom: 1px solid #bfdbfe;
          padding-bottom: 8px;
          margin-bottom: 16px;
        }
        .upload-box {
          border: 2px dashed #93c5fd;
          border-radius: 16px;
          padding: 36px;
          background: #f8fbff;
          cursor: pointer;
          text-align: center;
        }
        .link {
          color: #2563eb;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
