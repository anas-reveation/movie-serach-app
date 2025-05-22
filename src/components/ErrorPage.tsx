type Props = {
  message: string;
};

export default function ErrorPage({ message }: Props) {
  return (
    <div className="text-red-600 text-center my-6 font-semibold">
      Error: {message}
    </div>
  );
}
