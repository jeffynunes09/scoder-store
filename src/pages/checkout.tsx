import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { useVerifyUserLogin } from "../hooks/useVerifyLogin";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  cardNumber: z.string().min(16, "Número do cartão inválido").optional(),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato MM/AA").optional(),
  cvc: z.string().min(3, "CVC inválido").optional(),
});

type FormData = z.infer<typeof schema>;

export const Checkout = () => {
  const { clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const verifyUserLogin = useVerifyUserLogin();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix">("card");
  const [paymentModePix, setpaymentModePix] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
const [tempo, setTempo] = useState(60);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (paymentMethod === "pix") {
      setSubmittedData({
        name:"",
        email:"",
      })
      navigate("/")
      return;
    }
    if (!user) {
      verifyUserLogin();
      return;
    }

    setSubmittedData(data);
    clearCart();
  };

const generatePix = () =>{
  setpaymentModePix(true)
}

// novo useEffect:
useEffect(() => {
  if (paymentMethod === "pix") {
    setTempo(60);
    const interval = setInterval(() => {
      setTempo((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }
}, [paymentMethod]);
useEffect(()=>{
if(tempo > 0)return
navigate("/")
},[tempo])
  return (
    <>
      {submittedData ? (
        <div className="container">
          <div className="form">
            <h2>✅ Pedido realizado com sucesso!</h2>
            <p><strong>Nome:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p>Forma de pagamento: <strong>{paymentMethod === "card" ? "Cartão de Crédito" : "Pix"}</strong></p>
            <p>Seu pedido está em processamento.</p>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2>Finalizar Pagamento</h2>

          {/* MÉTODO DE PAGAMENTO */}
          <div className="div-form-radio">
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Cartão de Crédito
            </label>
            <label style={{ marginLeft: "1rem" }}>
              <input
                type="radio"
                value="pix"
                checked={paymentMethod === "pix"}
                onChange={() =>{ setPaymentMethod("pix")}}
              />
              Pix
            </label>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="form">

            {/* Campos específicos para cartão */}
            {paymentMethod === "card" && (
              <>
                <div className="div-form-input">
                  <input type="text" placeholder="Nome completo" {...register("name")} />
                  {errors.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div className="div-form-input">
                  <input type="email" placeholder="Email" {...register("email")} />
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
              </>
            )}

            {/* QR Code Pix */}
            {paymentMethod === "pix" && (
              <div style={{ marginTop: "10px", textAlign: "center" }}>
               {
                paymentModePix ? (<></>):(
                  <div className="form">
                     <Button title="Gerar QR CODE" onClick={() => { generatePix() }} />
                  </div>
                )
               }
              </div>
            )}

             {paymentMethod === "card" && (
              <Button title="Pagar" onClick={() => { handleSubmit(onSubmit) }} />
             )}

             {
              paymentModePix && (
                <>
                   <div style={{ marginTop: "10px", textAlign: "center" }}>
                <p style={{ fontStyle: "italic" }}>
                  Escaneie o QR Code abaixo para efetuar o pagamento via Pix.
                </p>
                <img
                  src="/assets/QR_Code.png"
                  alt="QR Code Pix"
                  style={{ marginTop: "10px", width: "200px", height: "200px" }}
                />
               <h2>Tempo restante: {tempo}s</h2>
              </div>
                </>
              )
             }
          </form>
        </div>
      )}
    </>
  );
};
