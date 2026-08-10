type Props = {
  courses: number;
  lessons: number;
  users: number;
  sales: number;
};

export default function AdminStats({
  courses,
  lessons,
  users,
  sales,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
        <p className="text-gray-400">Kursevi</p>
        <h2 className="text-4xl font-bold text-yellow-300 mt-2">
          {courses}
        </h2>
      </div>

      <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
        <p className="text-gray-400">Lekcije</p>
        <h2 className="text-4xl font-bold text-yellow-300 mt-2">
          {lessons}
        </h2>
      </div>

      <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
        <p className="text-gray-400">Korisnici</p>
        <h2 className="text-4xl font-bold text-yellow-300 mt-2">
          {users}
        </h2>
      </div>

      <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
        <p className="text-gray-400">Prodaje</p>
        <h2 className="text-4xl font-bold text-yellow-300 mt-2">
          {sales}
        </h2>
      </div>
    </div>
  );
}