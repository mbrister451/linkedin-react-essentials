import {render} from "@testing-library/react";
import App from "./App";

test("renders", () => {
    const {getByText} = render(<App />);
    const h1 = getByText(/Hello There/);
    expect(h1).toHaveTextContent("Hello There");
})