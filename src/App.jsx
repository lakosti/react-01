import "./App.css";
import iconReact from "./assets/react.svg";

//компонент певний шаблон з даними який може бути перевикористаний
// синтаксис XML
function App() {
  return (
    //повертаєм лише один елемент (один загальний контейнер) якщо не потрібен дів то просто ставимо пустий тег (реакт фрагмент)
    <div>
      <img src={iconReact} alt="" />
      <p className="text">Hello</p>
      <button>Learn JS</button>
    </div>
  );
}

export default App;
