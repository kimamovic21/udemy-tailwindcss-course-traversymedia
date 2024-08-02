import { useState, useEffect } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl">
        <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem expedita eius, nesciunt omnis
          ab est dolor voluptas doloremque ut, dolorum sint ipsam veniam perferendis?
        </p>
        <div className="mt-2 relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input 
            type="checkbox" 
            name="toggle" 
            id="toggle" 
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            />
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <label htmlFor="toggle" className="text-xs text-gray-700 dark:text-slate-100">Switch Theme</label>
      </div>
    </div>
  );
};

export default DarkMode;
