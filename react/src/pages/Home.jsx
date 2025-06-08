export default function Home() {
  return (
    <div className="home container">
      <section className="hero">
        <h1>Bem-vindo à Minha Aplicação</h1>
        <p>
          Aqui você pode cadastrar usuários, visualizar uma lista dinâmica e
          manter seus dados organizados com facilidade.
        </p>
        <img
          //src="https://source.unsplash.com/600x300/?technology,web"
         // alt="Banner"
        />
      </section>

      <section className="features">
        <h2>Funcionalidades</h2>
        <ul>
          <li>📋 Cadastro de dados com validação</li>
          <li>🗂️ Listagem de itens atualizada dinamicamente</li>
          <li>🔗 Navegação simples e intuitiva</li>
          <li>📱 Totalmente responsivo</li>
        </ul>
      </section>
    </div>
  );
}
