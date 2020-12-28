function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <h2>We serve {props.adjective} food</h2>
      <img src="https:github.com/mbrister451.png" height={200} alt="restaurant table"/>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  )
}

function Footer() {
  return (
    <section>
      <h3>Copyright { new Date().getFullYear() }</h3>
    </section>
  )
}

const dishes = [
  "Margarita Pizza",
  "Tofu with veg",
  "Halloumi Wraps"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
console.log(dishObjects);

export function Restaurant() {
  return (
    <div>
      <Header name="Martin"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer />
    </div>
  );
}

