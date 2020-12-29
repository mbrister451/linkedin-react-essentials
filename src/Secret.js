function SecretComponent() {
  return <h1>Top Secret stuff</h1>;
}

function RegularComponent() {
  return <h1>Regular stuff</h1>;
}

function Secret(props) {
  return (
    <>
      { props.authorized ? <SecretComponent /> : <RegularComponent /> }
    </>
  );
}
 export default Secret;