import React, { useRef, useState } from "react";

function OTPInputs({ length = 6, onChange }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (idx, val) => {
    const v = val.replace(/\D/g, "").slice(-1);
    const next = [...values];
    next[idx] = v;
    setValues(next);
    onChange?.(next.join(""));
    if (v && idx < length - 1) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="d-flex justify-content-center gap-2">
      {values.map((v, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          value={v}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          inputMode="numeric"
          className="form-control text-center fw-bold"
          style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}
        />
      ))}
    </div>
  );
}

export default OTPInputs;
