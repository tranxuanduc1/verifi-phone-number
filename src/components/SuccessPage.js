import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card text-center shadow p-5" style={{ maxWidth: "450px", width: "100%" }}>
        <h1 className="display-4 mb-3">🎉</h1>
        <h3 className="mb-3">Chúc mừng! Bạn đã nhập đúng</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Quay lại trang chính
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
