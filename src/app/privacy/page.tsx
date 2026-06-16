import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של שלומי ארביב עיצוב שיער",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.shlomiarviv.co.il/privacy" },
};

export default function PrivacyPage() {
  return (
    <main dir="rtl" lang="he" className="min-h-screen bg-[#F8F6F3] pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-8 md:px-16">

        <h1 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
          מדיניות פרטיות
        </h1>
        <p className="text-[#C8A97E] text-[10px] tracking-[0.5em] uppercase mb-2">
          Privacy Policy
        </p>
        <p className="text-[#111111]/40 text-sm mb-14">עודכן לאחרונה: יוני 2026</p>

        <div className="space-y-10 text-[#111111]/85 text-base leading-[1.9] font-light">

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">1. כללי</h2>
            <p>
              Shlomi Arviv Hair Design (להלן: "אנחנו" או "הסטודיו") מחויבת להגנה על פרטיות המשתמשים
              באתר ובשירותים שלנו. מדיניות פרטיות זו מסבירה אילו מידע אנו אוספים, כיצד אנו משתמשים
              בו ואת זכויותיכם בנוגע למידע זה.
            </p>
            <p className="mt-3">
              השימוש באתר מהווה הסכמה למדיניות פרטיות זו. המדיניות כפופה לחוק הגנת הפרטיות,
              התשמ"א-1981 ולתקנות שהותקנו מכוחו.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">2. איזה מידע אנו אוספים</h2>

            <h3 className="text-[#111111] text-lg font-medium mb-2 mt-4">מידע שמוסרים לנו ישירות</h3>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>שם מלא</li>
              <li>מספר טלפון</li>
              <li>פרטי הפגישה המבוקשת (שירות, תאריך מועדף)</li>
              <li>כל מידע נוסף שתבחרו לשתף איתנו בשיחה או בהודעה</li>
            </ul>

            <h3 className="text-[#111111] text-lg font-medium mb-2 mt-6">מידע הנאסף אוטומטית</h3>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>כתובת IP</li>
              <li>סוג דפדפן ומערכת הפעלה</li>
              <li>עמודים שנצפו ומשך הביקור</li>
              <li>מקור ההפניה לאתר</li>
              <li>הגדרות נגישות שנשמרו מקומית (localStorage בדפדפן שלכם בלבד)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">3. כיצד אנו משתמשים במידע</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>תיאום ואישור פגישות</li>
              <li>יצירת קשר חוזר בנוגע לשירותים שביקשתם</li>
              <li>שיפור חוויית השימוש באתר</li>
              <li>ניתוח סטטיסטי אנונימי של השימוש באתר</li>
              <li>עמידה בדרישות חוקיות</li>
            </ul>
            <p className="mt-4">
              אנו לא נשלח דיוור שיווקי ללא הסכמתכם המפורשת.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">4. שיתוף מידע עם צדדים שלישיים</h2>
            <p>אנו לא מוכרים, מסחרים או מעבירים את המידע האישי שלכם לצדדים שלישיים, למעט:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-3">
              <li><strong>WhatsApp / Meta:</strong> בעת שימוש בכפתור WhatsApp לתיאום פגישה</li>
              <li><strong>Google:</strong> המפה המוטמעת באתר כפופה למדיניות הפרטיות של Google Maps</li>
              <li><strong>Instagram / Meta:</strong> לינקים לפרופיל האינסטגרם שלנו</li>
              <li><strong>רשויות חוק:</strong> כאשר נדרש על פי חוק או צו שיפוטי</li>
            </ul>
            <p className="mt-4">
              שירותים אלה כפופים למדיניות הפרטיות שלהם. אנו ממליצים לעיין בהן.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">5. עוגיות (Cookies)</h2>
            <p>
              האתר עשוי לעשות שימוש בעוגיות לצורך שיפור חוויית הגלישה וניתוח שימוש אנונימי.
              ניתן לבטל עוגיות דרך הגדרות הדפדפן, אך הדבר עלול להשפיע על חוויית השימוש.
            </p>
            <p className="mt-3">
              הגדרות הנגישות נשמרות ב-localStorage בדפדפן שלכם בלבד ואינן מועברות לשרתינו.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">6. אבטחת מידע</h2>
            <p>
              אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי שלכם מפני גישה בלתי מורשית,
              שינוי, חשיפה או מחיקה. האתר מאובטח בפרוטוקול HTTPS.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">7. שמירת מידע</h2>
            <p>
              אנו שומרים מידע אישי לתקופה הנדרשת לצורך מתן השירות ולעמידה בדרישות חוקיות,
              ולא יותר מ-3 שנים ממועד הביקור האחרון, אלא אם נדרש אחרת על פי דין.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">8. זכויותיכם</h2>
            <p>בהתאם לחוק הגנת הפרטיות, יש לכם זכות:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-3">
              <li>לדעת אילו מידע אנו מחזיקים עליכם</li>
              <li>לעיין במידע האישי שלכם</li>
              <li>לבקש תיקון מידע שגוי</li>
              <li>לבקש מחיקת המידע שלכם</li>
              <li>להתנגד לעיבוד המידע שלכם לצרכים שיווקיים</li>
            </ul>
            <p className="mt-4">
              לממש את זכויותיכם, פנו אלינו בפרטי הקשר שלהלן.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">9. קטינים</h2>
            <p>
              האתר אינו מיועד לילדים מתחת לגיל 18. אנו לא אוספים ביודעין מידע אישי מקטינים.
              אם אתם הורה ואתם סבורים שילדכם מסר לנו מידע אישי, אנא צרו איתנו קשר.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">10. שינויים במדיניות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו בכל עת. שינויים מהותיים יפורסמו
              באתר עם תאריך עדכון. המשך השימוש באתר לאחר הפרסום מהווה הסכמה לשינויים.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">11. יצירת קשר</h2>
            <p>לכל שאלה בנוגע למדיניות פרטיות זו, פנו אלינו:</p>
            <div className="mt-4 p-5 bg-white border border-[#111111]/[0.08] space-y-2">
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
          <a href="/terms" className="text-[#111111]/35 text-[10px] tracking-[0.45em] uppercase hover:text-[#111111] transition-colors duration-300">
            תנאי שימוש
          </a>
          <a href="/accessibility" className="text-[#111111]/35 text-[10px] tracking-[0.45em] uppercase hover:text-[#111111] transition-colors duration-300">
            נגישות
          </a>
        </div>
      </div>
    </main>
  );
}
