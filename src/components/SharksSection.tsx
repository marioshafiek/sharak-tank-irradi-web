import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const sharks = [
  // {
  //   name: "أحمد علي",
  //   image: "https://randomuser.me/api/portraits/men/32.jpg",
  //   bio: "مستثمر وخبير في ريادة الأعمال، شارك في تأسيس عدة شركات ناشئة ناجحة في المنطقة العربية.",
  // },
  // {
  //   name: "سارة محمد",
  //   image: "https://randomuser.me/api/portraits/women/44.jpg",
  //   bio: "رائدة أعمال ومستشارة مالية، لها خبرة واسعة في دعم المشاريع الصغيرة والمتوسطة.",
  // },
  // {
  //   name: "خالد يوسف",
  //   image: "https://randomuser.me/api/portraits/men/65.jpg",
  //   bio: "مستثمر ملائكي وعضو في عدة مجالس إدارة لشركات تقنية.",
  // },
  // {
  //   name: "خالد يوسف",
  //   image: "https://randomuser.me/api/portraits/men/65.jpg",
  //   bio: "مستثمر ملائكي وعضو في عدة مجالس إدارة لشركات تقنية.",
  // },
];

export const SharksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-sky-blue-600  font-bold mb-8 text-center">
          الشاركس المشاركين معانا
        </h2>
        <div className="flex items-center justify-center text-black">
          قريباً هنعلن عنهم
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {sharks.map((shark, idx) => (
            <Card key={idx} className="flex flex-col items-center text-center">
              <CardHeader>
                <img
                  src={shark.image}
                  alt={shark.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow"
                />
                <CardTitle>{shark.name}</CardTitle>
                <CardDescription>{shark.bio}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
