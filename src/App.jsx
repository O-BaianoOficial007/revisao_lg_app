
import s from './App.module.css'

function App() {

  return (
    <>
      <nav>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Produtos</a>
      </nav>
      <main>
        <section id='s1'>
          <h1>Título de Empresa</h1>
        </section>

        <section id='s2'>
          <div className={s.left}>
            <img src="" alt="" />
          </div>
          <div className={s.right}>
            <h2>Subtítulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum sunt vel quis molestias natus tenetur necessitatibus adipisci maxime id, sequi quia harum voluptatibus quo incidunt. Reprehenderit necessitatibus ad est.</p>
          </div>
        </section>

        <section id='s3'>
          <div className={s.card}>
            <img src="" alt="" />
            <div className={s.cardText}>
              <h3>Título Do Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim ipsa esse iste!</p>
            </div>
          </div>
          <div className={s.card}>
            <img src="" alt="" />
            <div className={s.cardText}>
              <h3>Título Do Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim ipsa esse iste!</p>
            </div>
          </div>
          <div className={s.card}>
            <img src="" alt="" />
            <div className={s.cardText}>
              <h3>Título Do Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim ipsa esse iste!</p>
            </div>
          </div>

        </section>
      </main>
      <footer>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </footer>

    </>
  )
}

export default App
