import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA}></RestaurantCard>);

  const name = screen.getByText("Theobroma");

  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard component with Open Label",()=>{
//     // Will get back to this - test HOC : withOpenLabel()
// })
