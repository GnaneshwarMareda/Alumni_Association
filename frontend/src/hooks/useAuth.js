import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = Cookies.get("jwtToken");
  if (!token) return { userId: null, role: null };

  try {
    const decoded = jwtDecode(token);
    const { userId, role, name } = decoded;
    return { userId, role, name };
  } catch (error) {
    console.error("Invalid token", error);
    return { userId: null, role: null };
  }
};

export default useAuth;
