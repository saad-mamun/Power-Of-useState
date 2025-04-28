import React, {useState} from 'react'

const PasswordToggle = () => {
 const [showPassword, setShowPassword] = useState(false);

 return (
   <div className="flex flex-col items-center gap-4 p-6">
     <input
       type={showPassword ? "text" : "password"}
       placeholder="Password"
       className="border p-2 rounded w-64"
     />
     <button
       className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
       onClick={() => setShowPassword(!showPassword)}
     >
       {showPassword ? "Hide" : "Show"} Password
     </button>
   </div>
 );
}

export default PasswordToggle
