import CommentCard from "@/components/CommentCard";
import { render } from "@testing-library/react-native";

describe("CommentCard Component", () => {
  it("renders correctly with given user, comment, and date", () => {
    const { getByText } = render(
      <CommentCard user="Test User" comment="Test Comment" date="2021-01-01" />
    );
    expect(getByText("Test User")).toBeTruthy();
    expect(getByText("Test Comment")).toBeTruthy();
    expect(getByText("2021-01-01")).toBeTruthy();
  });
});
