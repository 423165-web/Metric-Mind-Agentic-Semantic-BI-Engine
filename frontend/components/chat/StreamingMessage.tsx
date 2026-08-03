interface Props {
  text: string;
}

export default function StreamingMessage({
  text,
}: Props) {
  return (
    <p className="whitespace-pre-wrap leading-7">
      {text}
    </p>
  );
}