import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      {/* <ExpandableText maxChars={100}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        officia ipsum! Ratione eveniet culpa earum possimus praesentium nisi
        ipsum. Delectus accusamus nihil nemo ullam odio ipsa quidem quisquam,
        nesciunt, suscipit esse consequuntur natus voluptate illo magnam
        voluptates, voluptatem accusantium eum quaerat quas pariatur aliquid
        saepe eveniet. Veritatis nam saepe obcaecati ea. Veritatis expedita
        repellat natus quos voluptatibus! Non itaque facere molestias sapiente a
        quibusdam illum saepe maiores amet fugit in expedita soluta dolor dolore
        harum debitis tenetur neque minima aspernatur optio iusto laborum, odit
        quo voluptate. Nisi voluptas, vel iste ducimus eos magni deserunt illum
        laboriosam nam ipsa perspiciatis laborum?
      </ExpandableText>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <BsFillCalendarFill color="red" size="40" />
      <br />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
      <Like onClick={() => console.log("clicked")} />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
      <Form />
    </div>
  );
}

export default App;
