import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../App.css";

const schema = z.object({
  fullName: z.string().min(3, "Nome completo obrigatório"),
  email: z.string().email("Email inválido"),
  cardNumber: z.string().min(16, "Número do cartão deve ter 16 dígitos"),
  expiry: z.string().min(5, "Data de expiração inválida"),
  cvv: z.string().min(3, "CVV inválido"),
});

type CheckoutForm = z.infer<typeof schema>;

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: CheckoutForm) => {
    console.log("Dados do pagamento:", data);
    alert("Pagamento realizado com sucesso!");
  };

  return (
    <div className="container">
      <h2>Finalizar Pagamento</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Nome completo
          <input type="text" {...register("fullName")} />
          {errors.fullName && <span className="error">{errors.fullName.message}</span>}
        </label>

        <label>
          Email
          <input type="email" {...register("email")} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>

        <label>
          Número do cartão
          <input type="text" maxLength={16} {...register("cardNumber")} />
          {errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}
        </label>

        <label>
          Validade (MM/AA)
          <input type="text" placeholder="MM/AA" {...register("expiry")} />
          {errors.expiry && <span className="error">{errors.expiry.message}</span>}
        </label>

        <label>
          CVV
          <input type="text" maxLength={3} {...register("cvv")} />
          {errors.cvv && <span className="error">{errors.cvv.message}</span>}
        </label>

        <button type="submit" className="button">Pagar</button>
      </form>
    </div>
  );
};
