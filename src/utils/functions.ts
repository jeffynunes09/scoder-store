
export const  fetchUrlImgSlider = () =>{
 
    return [
        "/assets/slide1.webp",
        "/assets/slide2.webp",
        "/assets/slide3.webp",
        "/assets/slide4.webp"
    ];
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
};
