import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './App.css';

export default function PersonalWebsite() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div>
        <div>
          <img src="vite.svg"/>
          <h1>Tim Ding</h1>
          <p>軟體開發者 | 技術愛好者</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Hi there! Welcome to my personal webpage.<br />
            I'm passionate about web application development and always eager to learn new technologies.
          </p>

          {/* 社交媒體連結 */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="text-2xl text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="text-2xl text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-2xl text-red-500 hover:text-red-700"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* 右邊：履歷與工作經驗區塊 */}
        <div>
          {/* 履歷下載 */}
          <h2 className="text-2xl font-bold mb-2">履歷</h2>
          <a
            href="/Tim_Ding_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
          >
            點我下載我的履歷（PDF）
          </a>

          {/* 工作經驗 */}
          <h2 className="text-2xl font-bold mt-6 mb-2">工作經驗</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
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
    </>
  );
}
