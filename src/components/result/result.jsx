import thanks from "/images/Online payment_Two Color(1) 2.png";
import "./result.css";
export default function Result({ Rate }) {
  return (
    <div className="rate-container">
      <div className="first">
        <img src={thanks} className="simage" />
      </div>
      <div className="select">
        <h4 className="rates">You selected {Rate} out of 5</h4>
      </div>
      <div className="foot">
        <h2>Thank You!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
