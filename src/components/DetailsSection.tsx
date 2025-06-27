import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Clock,
  FileText,
  Calendar,
  Target,
  CheckCircle,
} from "lucide-react";

export const DetailsSection = () => {
  const details = [
    {
      icon: <Users className="w-6 h-6 text-sky-blue-600 " />,
      text: "المشاركة من خلال اسكتش قصير يقدمه فريق مكوّن من افراد المجموعة كاملة",
    },
    {
      icon: <Target className="w-6 h-6 text-sky-blue-600 " />,
      text: "موضوع الاسكتش: احترام بيت الله (مثال: قدسية المكان – الالتزام – السلوك اللائق – الانضباط أثناء القداسات – عدم استخدام الهاتف...)",
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-blue-600 " />,
      text: "مدة الاسكتش لا تقل عن 5 دقائق",
    },
    {
      icon: <FileText className="w-6 h-6 text-sky-blue-600 " />,
      text: "المطلوب: تقديم الفكرة مكتوبة من خلال اسكريبت تمثيلي",
    },
    {
      icon: <Calendar className="w-6 h-6 text-sky-blue-600 " />,
      text: "من شروط المسابقة: لازم تبدأ مناقشة المشروع بجملة 'Hi Sharks!'",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-blue-800 mb-4">
            تفاصيل المشاركة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-blue-400 to-sky-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Details Grid */}
        <div className="grid gap-6 md:gap-8">
          {details.map((detail, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-sky-blue-100 bg-white hover:border-sky-blue-200 animate-slide-in-right"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-blue-100 rounded-full flex items-center justify-center group-hover:bg-sky-blue-200 transition-colors duration-300">
                    {detail.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      {detail.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <Card className="mt-12 bg-gradient-to-r from-sky-blue-50 to-blue-50 border-sky-blue-200 animate-fade-in animation-delay-800">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl md:text-3xl text-sky-blue-800 flex items-center justify-center gap-3">
              <CheckCircle className="w-8 h-8" />
              جاهزين يا ابطال؟
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center pb-8">
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              متفوتش الفرصة وورينا كل ابدعاتكم
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-sky-blue-600 text-white rounded-lg text-lg font-semibold">
                معاد المناقشة يوم 28/6/2025
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
