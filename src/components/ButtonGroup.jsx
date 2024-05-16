import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mak all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => {
        return (
          <Button key={button.text} onClick={button.onClick}>
            {button.text}
          </Button>
        );
      })}
    </section>
  );
}

// <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
// Mark all as complete
// </Button>
// <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
// Mark all as incomplete
// </Button>
// <Button onClick={handleResetToInitial} buttonType="secondary">
// Reset to initial
// </Button>
// <Button onClick={handleRemoveAllItems} buttonType="secondary">
// Remove all items
// </Button>
