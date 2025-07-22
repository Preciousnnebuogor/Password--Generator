import { FaRegCopy } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="section1">
          <p className="param1">Password Generator</p>
          <div className="inputfield">
            <input readOnly />
            <i>
              <FaRegCopy />
            </i>
          </div>
        </div>
        <div className="section2">
          <div className="password-range">
            <label className="label1">Password Length</label>
            <div className="range">
              <input type="range" min={"6"} max={"20"} value={"12"} readOnly />
              <span>12</span>
            </div>
          </div>

          <div>
            <div className="checkbox">
              <label>Include UpperCase</label>
              <input type="checkbox" />
            </div>
            <div className="checkbox">
              <label>Include LowerCase</label>
              <input type="checkbox" />
            </div>
            <div className="checkbox">
              <label>Include Numbers</label>
              <input type="checkbox" />
            </div>
            <div className="checkbox">
              <label>Include Symbols</label>
              <input type="checkbox" />
            </div>
          </div>

          <div>
            <button className="butt">Generate Password</button>
          </div>
        </div>
        <div className="password-strength">
          <div className="password">
            <p>Password Strength</p>
            <span>Low</span>
          </div>

          <div className="color">
            <div className="color-password"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
