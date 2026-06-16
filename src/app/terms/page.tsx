import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שימוש",
  description: "תנאי השימוש באתר שלומי ארביב עיצוב שיער",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.shlomiarviv.co.il/terms" },
};

export default function TermsPage() {
  return (
    <main dir="rtl" lang="he" className="min-h-screen bg-[#F8F6F3] pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-8 md:px-16">

        <h1 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
          תנאי שימוש
        </h1>
        <p className="text-[#C8A97E] text-[10px] tracking-[0.5em] uppercase mb-2">
          Terms of Use
        </p>
        <p className="text-[#111111]/40 text-sm mb-14">עודכן לאחרונה: יוני 2026</p>

        <div className="space-y-10 text-[#111111]/85 text-base leading-[1.9] font-light">

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">1. כללי</h2>
            <p>
              ברוכים הבאים לאתר של Shlomi Arviv Hair Design (להלן: "האתר"). השימוש באתר מהווה הסכמה
              לתנאי השימוש המפורטים להלן. אנא קראו אותם בעיון לפני השימוש באתר. אם אינכם מסכימים
              לתנאים אלה, אנא הימנעו מהשימוש באתר.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">2. השימוש באתר</h2>
            <p>האתר מיועד למטרות מידע בלבד ולתיאום פגישות עם הסטודיו. המשתמש מתחייב:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-3">
              <li>לא לעשות שימוש לרעה באתר או בתכניו</li>
              <li>לא להעתיק, להפיץ או לשכפל תכנים מהאתר ללא אישור מפורש בכתב</li>
              <li>לא לנסות לפרוץ, לפגוע או לשבש את תפקוד האתר</li>
              <li>לא להציג מידע כוזב בעת יצירת קשר</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">3. קניין רוחני</h2>
            <p>
              כל התכנים באתר, לרבות טקסטים, תמונות, סרטונים, לוגואים, עיצוב ומראה האתר, הינם
              רכושו הבלעדי של Shlomi Arviv Hair Design ומוגנים בזכויות יוצרים. אין לעשות בהם
              כל שימוש ללא אישור מפורש בכתב מבעל האתר.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">4. תיאום פגישות וביטולים</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>פגישות מתואמות דרך WhatsApp או טלפון בלבד</li>
              <li>ביטול פגישה יש לבצע לפחות 24 שעות מראש</li>
              <li>ביטול באיחור או אי-הגעה ללא הודעה עלולים לגרור חיוב חלקי</li>
              <li>המחירים הסופיים נקבעים בייעוץ אישי ועשויים להשתנות בהתאם לאורך השיער ומצבו</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">5. הגנת פרטיות</h2>
            <p>
              Shlomi Arviv Hair Design מכבדת את פרטיות המשתמשים. פרטים אישיים שיימסרו דרך האתר
              (כגון שם וטלפון לצורך תיאום פגישה) ישמשו אך ורק לצורך מתן השירות ולא יועברו לצד שלישי
              ללא הסכמת המשתמש, למעט כנדרש על פי דין.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">6. הגבלת אחריות</h2>
            <p>
              האתר מסופק "כפי שהוא" (As Is). Shlomi Arviv Hair Design אינה אחראית לנזקים ישירים
              או עקיפים הנובעים מהשימוש באתר או מהסתמכות על המידע המופיע בו. אנו שומרים לעצמנו
              את הזכות לשנות, לעדכן או להסיר תכנים בכל עת ללא הודעה מוקדמת.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">7. קישורים חיצוניים</h2>
            <p>
              האתר עשוי לכלול קישורים לאתרים חיצוניים (כגון Instagram, WhatsApp, Google Maps).
              Shlomi Arviv Hair Design אינה אחראית לתכנים, למדיניות הפרטיות או לפעולת אתרים אלה.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">8. שינויים בתנאי השימוש</h2>
            <p>
              Shlomi Arviv Hair Design שומרת לעצמה את הזכות לשנות תנאי שימוש אלה בכל עת.
              המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">9. דין וסמכות שיפוט</h2>
            <p>
              תנאי שימוש אלה כפופים לדיני מדינת ישראל. כל מחלוקת הנובעת מהם תידון בבתי המשפט
              המוסמכים במחוז תל אביב בלבד.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">10. יצירת קשר</h2>
            <div className="mt-2 p-5 bg-white border border-[#111111]/[0.08] space-y-2">
              <p><strong>Shlomi Arviv Hair Design</strong></p>
              <p>בוגרשוב 37, תל אביב</p>
              <p>
                טלפון:{" "}
                <a href="tel:0535220611" dir="ltr" className="text-[#C8A97E] hover:underline">
                  053 522 0611
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href="https://wa.me/972535220611" target="_blank" rel="noopener noreferrer" className="text-[#C8A97E] hover:underline">
                  שלחו הודעה
                </a>
              </p>
            </div>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-[#111111]/[0.08] flex flex-wrap gap-6">
          <a href="/" className="text-[#C8A97E] text-[10px] tracking-[0.45em] uppercase hover:text-[#111111] transition-colors duration-300">
            ← חזרה לדף הבית
          </a>
          <a href="/accessibility" className="text-[#111111]/35 text-[10px] tracking-[0.45em] uppercase hover:text-[#111111] transition-colors duration-300">
            הצהרת נגישות
          </a>
        </div>
      </div>
    </main>
  );
}
