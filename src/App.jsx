import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './App.css'
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
    <div className={`min-h-screen ${darkMode ? 
      
    "bg-gray-900 text-white" : "bg-white text-gray-900"} 
    flex flex-col justify-center items-center p-6`}>

      {/* 內容區塊 */}
      <div className="max-w-lg text-center mt-10">
        <img
          src="/vite.svg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
        />
        <h1 className="text-3xl font-bold mt-4">你的名字</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">軟體開發者 | 技術愛好者</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          你好！這是我的個人網頁。我熱衷於開發 Web 應用程式，並樂於學習新技術。
        </p>
      </div>

      {/* 社交媒體連結 */}
      <div className="flex space-x-6 mt-6">
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
        <a href="mailto:your.email@example.com" className="text-2xl text-red-500 hover:text-red-700">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
