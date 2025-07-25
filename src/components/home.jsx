import { useState,useEffect } from "react";
import { FaRegCopy } from "react-icons/fa6";
export default function Home() {
  const [getValue, setGetValue] = useState(12);
  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState("Weak");

  let characters = "";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijkmlmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (symbol) characters += "!@#$%^&*()_+-=[]{};:'\"<>,.?/|\\~`";

  function handleSubmit(){
    if(!uppercase && !lowercase && !numbers && !symbol) {
      alert("click on any of the checkbox") 
      return
    }
  let newPassword = ""
  for (let i = 0; i < getValue; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }
   setPassword(newPassword);
 
  }

function calculateStrength() {
  let score = 0;
  const length = password.length;

  score += Math.min(length * 2, 40);
  if (uppercase) score += 15;
  if (lowercase) score += 15;
  if (numbers) score += 15;
  if (symbol) score += 15;

  if (score < 50) {
    setStrength("Weak");
  } else if (score < 80) {
    setStrength("Medium");
  } else {
    setStrength("Strong");
  }
}

// Run strength calculation whenever password or checkbox options change
useEffect(() => {
  calculateStrength();
}, [password, uppercase, lowercase, numbers, symbol]);



  return (
    <div className="container">
      <div className="content">
        <div className="section1">
          <p className="param1">Password Generator</p>
          <div className="inputfield">
            <input readOnly value={password} />
            <i>
              <FaRegCopy />
            </i>
          </div>
        </div>
        <div className="section2">
          <div className="password-range">
            <label className="label1">Password Length</label>
            <div className="range">
              <input
                type="range"
                min={"6"}
                max={"20"}
                value={getValue}
                onChange={(e) => setGetValue(Number(e.target.value))}
                readOnly
              />
              <span>{getValue}</span>
            </div>
          </div>

          <div>
            <div className="checkbox">
              <label>Include UpperCase</label>
              <input
                type="checkbox"
                onChange={(e) => setUpperCase(e.target.checked)}
              />
            </div>
            <div className="checkbox">
              <label>Include LowerCase</label>
              <input
                type="checkbox"
                onChange={(e) => setLowerCase(e.target.checked)}
              />
            </div>
            <div className="checkbox">
              <label>Include Numbers</label>
              <input
                type="checkbox"
                onChange={(e) => setNumbers(e.target.checked)}
              />
            </div>
            <div className="checkbox">
              <label>Include Symbols</label>
              <input
                type="checkbox"
                onChange={(e) => setSymbol(e.target.checked)}
              />
            </div>
          </div>

          <div>
            <button className="butt" onClick={handleSubmit}>
              Generate Password
            </button>
          </div>
        </div>
        <div className="password-strength">
          <div className="password">
            <p>Password Strength</p>
            <span>{strength}</span>
          </div>

          <div className="color">
            <div className={`color-password ${strength.toLowerCase()}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
