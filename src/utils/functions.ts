export const  fetchUrlImgSlider = () =>{
 
    return [
        "/public/assets/slide1.webp",
        "/public/assets/slide2.webp",
        "/public/assets/slide3.webp",
        "/public/assets/slide4.webp"
    ];
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
};
