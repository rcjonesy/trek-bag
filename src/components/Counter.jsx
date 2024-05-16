export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>{numberOfItemsPacked} </b>of {totalNumberOfItems} items packed
    </p>
  );
}
