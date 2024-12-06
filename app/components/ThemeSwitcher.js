const ThemeSwitcher = ({ toggleTheme }) => (
  <button
    className="px-4 py-2 bg-orange-600 text-white rounded"
    onClick={toggleTheme}
  >
    Toggle Theme
  </button>
);

export default ThemeSwitcher;

