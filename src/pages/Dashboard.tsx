import React from "react";

// بيانات وهمية للمجموعات
const groups = [
  { name: "الشورية", score: 0 },
  { name: "حضن الأب", score: 0 },
  { name: "جرن المعمودية", score: 0 },
  { name: "الهيكل", score: 0 },
  { name: "حامل الأيقونات", score: 0 },
  { name: "المذبح", score: 0 },
  { name: "المنجلية", score: 0 },
  { name: "الأواني", score: 0 },
];

// ترتيب تنازلي حسب السكور
const sortedGroups = groups.sort((a, b) => b.score - a.score);

const medalColors = [
  "bg-yellow-400 text-yellow-900", // المركز الأول
  "bg-gray-300 text-gray-700", // المركز الثاني
  "bg-amber-700 text-amber-100", // المركز الثالث
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-sky-300 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* زر العودة للرئيسية */}
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sky-blue-700 hover:underline font-bold text-lg"
          >
            <span className="text-2xl">🏠</span>
            العودة للرئيسية
          </a>
        </div>
        <h2 className="text-3xl font-bold text-center text-sky-blue-700 mb-8">
          ترتيب المجموعات
        </h2>
        <div className="flex flex-col gap-6">
          {sortedGroups.map((group, idx) => (
            <div
              key={group.name}
              className={`flex items-center justify-between rounded-xl shadow-lg p-5 bg-white border-2 border-sky-blue-100 transition-transform hover:scale-105 ${
                idx < 3 ? "ring-2 ring-sky-blue-400" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                {/* ميدالية أو رقم */}
                {idx < 3 ? (
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold ${medalColors[idx]}`}
                  >
                    {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                  </span>
                ) : (
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-blue-200 text-sky-blue-700 text-xl font-bold">
                    {idx + 1}
                  </span>
                )}
                <span className="text-lg md:text-xl font-semibold text-gray-800">
                  {group.name}
                </span>
              </div>
              <div className="text-2xl font-bold text-sky-blue-700">
                {/* {group.score} نقطة */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
