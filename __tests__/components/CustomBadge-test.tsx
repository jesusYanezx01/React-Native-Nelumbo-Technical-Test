import { render } from "@testing-library/react-native";
import CustomBadge from "@/components/CustomBadge";

describe("CustomBadge Component", () => {
  it("renders correctly with given label", () => {
    const { getByText } = render(<CustomBadge label="Test Label" />);
    expect(getByText("Test Label")).toBeTruthy();
  });

  it("applies custom styles to View and Text", () => {
    const customViewStyle = { backgroundColor: "blue" };
    const customTextStyle = { fontSize: 20 };

    const { getByText } = render(
      <CustomBadge
        label="Styled Badge"
        styleView={customViewStyle}
        styleText={customTextStyle}
      />
    );

    const badgeText = getByText("Styled Badge");

    expect(badgeText.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ fontSize: 20 })])
    );
  });
});
