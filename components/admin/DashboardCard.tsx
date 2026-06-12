interface Props {
  title: string;
  value: string | number;
}

export default function DashboardCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        {value}
      </h2>

    </div>
  );
}
