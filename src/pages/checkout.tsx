import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { useVerifyUserLogin } from "../hooks/useVerifyLogin";
import { Button } from "../components/button";

const schema = z.object({
  name: z.string().min(3, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  cardNumber: z.string().min(16, "Número do cartão inválido"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato MM/AA"),
  cvc: z.string().min(3, "CVC inválido"),
});

type FormData = z.infer<typeof schema>;

export const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const verifyUserLogin = useVerifyUserLogin()
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  console.log(cart)
  const onSubmit = (data: FormData) => {
    if (!user) {
      verifyUserLogin()
      return
    }

    setSubmittedData(data);
    clearCart();
  };

  return (
    <>
      {
        submittedData ? (<div className="container">
          <div className="form">
            <h2>✅ Pedido realizado com sucesso!</h2>
            <p><strong>Nome:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p>Seu pedido está em processamento.</p>
          </div>
        </div>) : (<div className="container">
          <h2>Finalizar Pagamento</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="div-form-input">
              <input type="text" placeholder="Nome completo" {...register("name")} value={user?.name} />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="div-form-input">

              <input type="email" placeholder="Email" {...register("email")} value={user?.email} />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="div-form-input">

              <input type="text" placeholder="Número do cartão" {...register("cardNumber")} />
              {errors.cardNumber && <p className="error">{errors.cardNumber.message}</p>}
            </div>
            <div className="div-form-input">

              <input type="text" placeholder="MM/AA" {...register("expiry")} />
              {errors.expiry && <p className="error">{errors.expiry.message}</p>}
            </div>
            <div className="div-form-input">

              <input type="text" placeholder="CVC" {...register("cvc")} />
              {errors.cvc && <p className="error">{errors.cvc.message}</p>}
            </div>
            <Button title={"Pagar"} onClick={() => { handleSubmit }} />
          </form>
        </div>)
      }
    </>
  )
};
