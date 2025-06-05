import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { Button } from "../components/button";
const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha é obrigatória!"),
});

type FormData = z.infer<typeof schema>;

export const CreateAccount = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const cart =  useCart()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    if (cart) {
      console.log("ola1")
      login(data);
      navigate("/cart");
      return
    }else{
      login(data);
      navigate("/");
      console.log("ola2")
    }

  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input type="password" placeholder="Digite sua senha" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <Button onClick={()=>{handleSubmit}} title="Entrar"/>
      </form>
    </div>
  );
};
