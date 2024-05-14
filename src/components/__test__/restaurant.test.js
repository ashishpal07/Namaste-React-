import RestaurantCard from "../RestaurantCard";
import MockData from "../moks/restaurantCardMock.json"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render restaurant card component with prop data", () => {
    render(<RestaurantCard restaurantData={MockData.info} />);
    const name = screen.findByText("Thambbi");
    console.log(name);
    expect(name).toBeInTheDocument();
});
