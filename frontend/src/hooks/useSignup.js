import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  async function signupFetch({ fullName, username, password, confirmPassword, gender }) {
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return { loading, signupFetch };
};

export default useSignup;

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match ");
    return false;
  }
  if (password.length < 6) {
    toast.error("passwords must be of atleast 6 characters");
    return false;
  }

  return true;
}
