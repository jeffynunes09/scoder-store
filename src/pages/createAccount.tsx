import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

const schema = z.object({
  name: z.string().min(3, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
});

type FormData = z.infer<typeof schema>;

export const CreateAccount = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    login(data); // salva no contexto
    navigate("/cart"); // redireciona para o carrinho
  };

  return (
    <div className="container">
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Nome
          <input type="text" {...register("name")} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>

        <label>
          Email
          <input type="email" {...register("email")} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>

        <button type="submit" className="button">Criar Conta</button>
      </form>
    </div>
  );
};
