
import s from './App.module.css'

import card01 from '/01.jpg'
import card02 from '/02.jpg'
import card03 from '/05.jpg'
import icon01 from '/face.png'
import icon02 from '/instagram.png'
import icon03 from '/github.png'
import banner from '/senai.jpg'

function App() {

  return (
    <>
      <nav>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Produtos</a>
      </nav>
      <main>
        <section id='s1' className={s.s1}>
          <h1>Título de Empresa</h1>
        </section>

        <section id='s2' className={s.s2}>
          <div className={s.left}>
            <img width={400} src={banner} alt="" />
          </div>
          <div className={s.right}>
            <h2>Subtítulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum sunt vel quis molestias natus tenetur necessitatibus adipisci maxime id, sequi quia harum voluptatibus quo incidunt. Reprehenderit necessitatibus ad est.</p>
          </div>
        </section>

        <section id='s3'className={s.s3}>
          <div className={s.card}>
            <img width={400} src={card01} alt="" />
            <div className={s.cardText}>
              <h3>Título Do Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim ipsa esse iste!</p>
            </div>
          </div>
          <div className={s.card}>
            <img width={400} src={card02} alt="" />
            <div className={s.cardText}>
              <h3>Título Do Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim ipsa esse iste!</p>
            </div>
          </div>
          <div className={s.card}>
            <img width={400} src={card03} alt="" />
            <div className={s.cardText}>
              <h3>Título Do Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim ipsa esse iste!</p>
            </div>
          </div>

        </section>
      </main>
      <footer>
        <a href=""><img src={icon01} width={40} alt="" /></a>
        <a href=""><img src={icon02} width={40} alt="" /></a>
        <a href=""><img src={icon03} width={40} alt="" /></a>
      </footer>

    </>
  )
}

export default App
