type Props = {
  count: number;
};

export default function LoadingPage({ count }: Props) {
  const boxes = new Array(count).fill(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
      {boxes.map((_, idx) => (
        <div
          key={idx}
          className="bg-gray-300 rounded h-96"
          aria-label="loading placeholder"
        ></div>
      ))}
    </div>
  );
}
