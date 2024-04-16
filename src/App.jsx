import "./App.css";

const config = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

export default function App() {
  function activateCells() {
    // implement this function
  }

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return (
            value && (
              <button
                key={index}
                type="button"
                aria-label={`Cell ${index}`}
                className="cell"
                onClick={() => activateCells(index)}
                disabled={null}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
