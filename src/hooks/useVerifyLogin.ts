import { useNavigate } from "react-router-dom";

export function useVerifyUserLogin() {
  const navigate = useNavigate();

  return () => {
    alert("Você precisa fazer login para adicionar ao carrinho!");
    navigate("/login");
  };
}