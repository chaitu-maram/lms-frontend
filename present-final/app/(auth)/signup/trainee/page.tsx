// "use client";

// import { useState } from "react";
// import { Eye, EyeOff, BookOpen, Upload } from "lucide-react";

// export default function TraineeSignupPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[url('/paper-bg.png')] bg-cover px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
//         <div className="flex flex-col items-center mb-6">
//           <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white mb-2">
//             <BookOpen size={20} />
//           </div>
//           <h2 className="text-xl font-semibold text-blue-600">Trainee Signup Form</h2>
//         </div>

//         <form className="space-y-4">
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <label className="text-sm font-medium">First Name *</label>
//               <input className="input" placeholder="First name" />
//             </div>
//             <div>
//               <label className="text-sm font-medium">Last Name *</label>
//               <input className="input" placeholder="Last name" />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium">Email Address *</label>
//             <input className="input" placeholder="trainee@email.com" />
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <div className="relative">
//               <label className="text-sm font-medium">Password *</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="input pr-10"
//                 placeholder="Create password"
//               />
//               <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
//                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//               </button>
//             </div>
//             <div className="relative">
//               <label className="text-sm font-medium">Verify Password *</label>
//               <input
//                 type={showConfirm ? "text" : "password"}
//                 className="input pr-10"
//                 placeholder="Confirm password"
//               />
//               <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="eye-btn">
//                 {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <label className="text-sm font-medium">Date of Birth *</label>
//               <input type="date" className="input" />
//             </div>
//             <div>
//               <label className="text-sm font-medium">Admin Code *</label>
//               <input className="input" placeholder="Enter admin code" />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium">Contact Number *</label>
//             <div className="flex items-center gap-2 input">
//               <span className="text-sm">🇮🇳 +91</span>
//               <input className="flex-1 outline-none" placeholder="Phone number" />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium">Profile Image</label>
//             <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-4 cursor-pointer text-blue-600">
//               <Upload size={18} />
//               <span className="text-sm font-medium">Upload profile</span>
//               <span className="text-xs">PNG, JPG</span>
//               <input type="file" className="hidden" />
//             </label>
//           </div>

//           <div className="flex items-center gap-2 text-sm">
//             <input type="checkbox" />
//             <span>
//               I agree to the <a className="text-blue-600">Terms of Service</a> and <a className="text-blue-600">Privacy Policy</a>.
//             </span>
//           </div>

//           <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium">
//             Create Trainee Account
//           </button>

//           <p className="text-center text-sm">
//             Already have an account? <a className="text-blue-600 font-medium">Sign in here</a>
//           </p>
//         </form>
//       </div>

//       <style jsx>{`
//         .input {
//           width: 100%;
//           border: 1px solid #dbeafe;
//           border-radius: 0.5rem;
//           padding: 0.5rem 0.75rem;
//           outline: none;
//         }
//         .input:focus {
//           border-color: #2563eb;
//         }
//         .eye-btn {
//           position: absolute;
//           right: 0.75rem;
//           top: 2.2rem;
//           color: #6b7280;
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { Eye, EyeOff, BookOpen, Upload } from "lucide-react";

export default function TraineeSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  /* ------------------ FORM STATE ------------------ */
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    contact_number: "",
    admin: "",
    profile_image: null,
  });

  /* ------------------ HANDLE INPUT CHANGE ------------------ */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ------------------ HANDLE FILE UPLOAD ------------------ */
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Optional validation
    if (file.size > 5 * 1024 * 1024) {
      alert("File must be less than 5MB");
      return;
    }

    setFormData({ ...formData, profile_image: file });
  };

  /* ------------------ SUBMIT ------------------ */
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
    data.append("date_of_birth", formData.date_of_birth);
    data.append("contact_number", formData.contact_number);
    data.append("admin", formData.admin);

    if (formData.profile_image) {
      data.append("profile_image", formData.profile_image);
    }

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/auth/register/trainee/",
        {
          method: "POST",
          body: data,
        }
      );

      // const result = await res.json();

      // if (res.ok) {
      //   alert("✅ Trainee Registered Successfully");
      //   console.log(result);
      // } else {
      //   console.error(result);
      //   alert("❌ Registration failed");
      // }



      const result = await res.json();
console.log("SERVER RESPONSE:", result);

if (res.ok) {
  alert("✅ Trainee Registered Successfully");
} else {
  alert(JSON.stringify(result));
}

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white mb-2">
            <BookOpen size={20} />
          </div>
          <h2 className="text-xl font-semibold text-blue-600">
            Trainee Signup Form
          </h2>
        </div>

        {/* ----------- FORM ----------- */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">First Name *</label>
              <input name="first_name" onChange={handleChange} className="input" />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name *</label>
              <input name="last_name" onChange={handleChange} className="input" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Email *</label>
            <input name="email" onChange={handleChange} className="input" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <label className="text-sm font-medium">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                className="input pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-btn"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="relative">
              <label className="text-sm font-medium">Confirm *</label>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirm_password"
                onChange={handleChange}
                className="input pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="eye-btn"
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">DOB *</label>
              <input type="date" name="date_of_birth" onChange={handleChange} className="input" />
            </div>
            <div>
              <label className="text-sm font-medium">Admin Code *</label>
              <input name="admin" onChange={handleChange} className="input" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Contact *</label>
            <input name="contact_number" onChange={handleChange} maxLength={10}
    inputMode="numeric"
    pattern="[0-9]*" className="input" />
          </div>

          {/* -------- IMAGE UPLOAD -------- */}
          <div>
            <label className="text-sm font-medium">Profile Image</label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-4 cursor-pointer text-blue-600 hover:bg-blue-50">
              <Upload size={18} />
              <span className="text-sm font-medium">
                {formData.profile_image
                  ? formData.profile_image.name
                  : "Upload profile"}
              </span>
              <span className="text-xs">PNG, JPG (Max 5MB)</span>

              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">
            Create Trainee Account
          </button>
        </form>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #dbeafe;
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
        }
        .eye-btn {
          position: absolute;
          right: 0.75rem;
          top: 2.2rem;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
