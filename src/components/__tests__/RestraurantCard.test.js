import { render, screen } from "@testing-library/react";
import RestraurantCard from "../RestraurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("Should render RestraurantCard Component with prop data", () => {
  render(<RestraurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

it("should render restraurantcard component with Promoted Label", () => {
  //test -HOC with Promoted Label
});
