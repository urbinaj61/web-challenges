import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("✅");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleCheckApiStatus = async () => {
    setStatusIcon("⏳");
    try {
      const response = await fetch(apiStatusUrl);
      const data = await response.json();
      setData(data);
      data.status === "Ok" ? setStatusIcon("✅") : setStatusIcon("❌");
    } catch (error) {
      setError(error, "🚨");
      setStatusIcon("🚨");
    }
  };

  return (
    <article className='status-check'>
      <div className='status-check__wrapper'>
        <h2 className='status-check__heading'>Status:</h2>
        <span className='status-check__icon'>{statusIcon}</span>
      </div>
      <button
        type='button'
        className='status-check__button'
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>{" "}
      <span className='status-check__text'>{data.status}</span>
      <span className='status-check__text'>{error}</span>
    </article>
  );
}
