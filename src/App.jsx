import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './App.css';

export default function PersonalWebsite() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`page-container ${darkMode ? "dark-mode" : ""}`}>
      
      {/* 主體內容區塊 */}
      <div className="main-content">
        
        {/* 左邊：個人資訊 */}
        <div className="left-section">
          <img
            src="vite.svg"
            alt="Profile"
            className="profile-image"
          />
          <h1 className="name">Tim Ding</h1>
          <p className="title">軟體開發者 | 技術愛好者</p>
          <p className="intro">
            Hi there! Welcome to my personal webpage.<br />
            I'm passionate about web application development and always eager to learn new technologies.
          </p>

          <div className="social-links">
            <a href="https://github.com/tim861125" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* 右邊：履歷與工作經歷 */}
        <div className="right-section">
          <h2>履歷</h2>
          <a href="/Tim_Ding_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            點我下載我的履歷（PDF）
          </a>

          <h2>工作經驗</h2>
          <ul className="experience-list">
            <li>
              <strong>軟體工程師 - ABC 科技公司</strong><br />
              2022/07 - 至今<br />
              負責企業內部系統的前端開發與維護，並協助推動 React 技術導入。
            </li>
            <li>
              <strong>前端實習生 - XYZ 新創公司</strong><br />
              2021/02 - 2022/06<br />
              使用 Vue.js 協助開發行動裝置電商網站，與設計師協作改善使用者體驗。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
