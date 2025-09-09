
import React, { useEffect, useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../FirebaseConfig";

export default function Homepage() {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState();
  const btnRef = useRef(null);

  const sentOTP = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {})
      const recaptcha=window.recaptchaVerifier
      const confirm = await signInWithPhoneNumber(auth, phone, recaptcha)
      setUser(confirm)
      console.log(confirm)
    } catch (error) {
      console.log(error)
    }

  }
  const verifyOtp= async()=>{
    try{
      const data= await user.confirm(otp)
      console.log(data)

    }catch(err){
      console.log(err)

    }
  }
  return (<div>
    <input placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
    <div id="recaptcha"></div>
    <button onClick={sentOTP}>Send otp</button>
    <input placeholder="otp" onChange={(e) => setOtp(e.target.value)} />
    <button onClick={verifyOtp}>verify</button>

  </div>)
}
