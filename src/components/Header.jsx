import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ totalNumberOfItems, numberOfItemsPacked}) {
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
