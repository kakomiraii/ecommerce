// Import necessary dependencies and components
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cart from "../Cart";
import { Provider } from "react-redux";
import store from "../../redux/store";

const mockCartItems = [
  {
    product: { id: 1, title: "Product 1", price: 10, image: "image1.jpg" },
    quantity: 2,
  },
  {
    product: { id: 2, title: "Product 2", price: 20, image: "image2.jpg" },
    quantity: 1,
  },
];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockReturnValue(mockCartItems),
}));

// Test Case 1: Rendering Test
test("renders cart header and continue shopping link", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  await waitFor(() => {
    expect(getByText("Your Cart")).toBeInTheDocument();
    expect(getByText("Continue Shopping")).toBeInTheDocument();
  });
});

// Test Case 2: Cart Items Test
test("renders cart items with correct details", async () => {
  const sampleCartItems = [
    {
      product: { id: 1, title: "Product 1", price: 10, image: "image1.jpg" },
      quantity: 2,
    },
    {
      product: { id: 2, title: "Product 2", price: 20, image: "image2.jpg" },
      quantity: 1,
    },
  ];

  const { getByAltText, getByText } = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  await waitFor(() => {
    sampleCartItems.forEach((item) => {
      expect(getByText(item.product.title)).toBeInTheDocument();
      expect(
        getByText(`$${item.product.price} x ${item.quantity}`)
      ).toBeInTheDocument();
      expect(getByAltText(item.product.title)).toHaveAttribute(
        "src",
        item.product.image
      );
    });
  });
});

// Test Case 3: Total Amount Test
test("displays correct total amount", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  
});

// Test Case 4: Quantity Change Test
test("updates quantity correctly", async () => {
  const { getByText, getByRole } = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  
});

// Test Case 5: No Items in Cart Test
test("displays message when cart is empty", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  
});

// Test Case 6: Redux Action Dispatch Test
test("dispatches remove from cart action when remove button is clicked", async () => {
  
});

// Test Case 7: Redux State Test
test("reads cart items and total amount from Redux store", async () => {
  
});

// Test Case 8: Styling Test
test("applies correct styling classes", async () => {
  
});
