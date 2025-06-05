import "./index.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Políticas de privacidade</a></li>
            <li><a href="#">Termos e condições</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Como comprar</a></li>
            <li><a href="#">Meus pedidos</a></li>
            <li><a href="#">Frete e entrega</a></li>
            <li><a href="#">Devoluções</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <ul>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">SAC: 0800-123-456</a></li>
            <li><a href="#">E-mail: suporte@site.com</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Jefferson Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer