import { useTheme } from "../contexts/ThemeContext";
export default function Footer() {
const { dark } = useTheme();
  return (
    <footer
      className={`w-full py-6 mt-10 text-center ${
        dark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-900"
      }`}
    >
      <p className="text-sm">© 2025 Abbaa Biyyo. All Rights Reserved.</p>
    </footer>
  );
}