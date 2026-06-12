export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold">

        Dashboard

      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white p-8 shadow">

          <h2 className="text-gray-500">

            Products

          </h2>

          <p className="mt-4 text-5xl font-bold">

            0

          </p>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <h2 className="text-gray-500">

            Orders

          </h2>

          <p className="mt-4 text-5xl font-bold">

            0

          </p>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <h2 className="text-gray-500">

            Customers

          </h2>

          <p className="mt-4 text-5xl font-bold">

            0

          </p>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <h2 className="text-gray-500">

            Revenue

          </h2>

          <p className="mt-4 text-5xl font-bold">

            Rs.0

          </p>

        </div>

      </div>

    </div>
  );
}
