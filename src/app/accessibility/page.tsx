import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת נגישות אתר שלומי ארביב עיצוב שיער בהתאם לתקן ישראלי 5568 ו-WCAG 2.1 AA",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.shlomiarviv.co.il/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <main
      dir="rtl"
      lang="he"
      className="min-h-screen bg-[#F8F6F3] pt-40 pb-32"
    >
      <div className="max-w-3xl mx-auto px-8 md:px-16">

        <h1 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
          הצהרת נגישות
        </h1>
        <p className="text-[#C8A97E] text-[10px] tracking-[0.5em] uppercase mb-12">
          Accessibility Statement
        </p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[#111111]/85 text-base leading-[1.9] font-light">

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">כללי</h2>
            <p>
              Shlomi Arviv Hair Design מחויבת לנגישות דיגיטלית ולהבטחת שוויון הזדמנויות לכלל המשתמשים,
              לרבות אנשים עם מוגבלויות. אנו פועלים לעמידה בדרישות תקן ישראלי 5568 (WCAG 2.1 ברמה AA)
              בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ותקנות הנגישות לשירות.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">רמת הנגישות</h2>
            <p>
              האתר עומד ברמת נגישות <strong>AA</strong> בהתאם לתקן WCAG 2.1.
              האתר נבנה עם תמיכה בניווט מקלדת, תוויות ARIA, ניגודיות צבעים עמידה, וטקסט חלופי לתמונות.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">תכונות נגישות באתר</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>ניווט מלא במקלדת בכל חלקי האתר</li>
              <li>תמיכה בקוראי מסך (Screen Readers)</li>
              <li>תוויות ARIA מלאות לכפתורים ואלמנטים אינטראקטיביים</li>
              <li>ניגודיות צבעים עמידה בין טקסט לרקע</li>
              <li>טקסט חלופי (alt) לכל התמונות</li>
              <li>כותרות היררכיות (H1, H2, H3) מסודרות</li>
              <li>תמיכה ב-RTL (ימין לשמאל) מלאה</li>
              <li>גורם נגישות צף עם אפשרויות התאמה אישית</li>
              <li>אפשרות להגדלת גופן, ניגודיות גבוהה, גווני אפור והפסקת אנימציות</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">דפדפנים ועזרי טכנולוגיה נתמכים</h2>
            <p>האתר נבדק ונתמך על ידי:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-3">
              <li>Chrome, Firefox, Safari, Edge — בגרסאות עדכניות</li>
              <li>NVDA, JAWS — קוראי מסך ל-Windows</li>
              <li>VoiceOver — קורא מסך ל-macOS ו-iOS</li>
              <li>TalkBack — קורא מסך ל-Android</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">יצירת קשר בנושא נגישות</h2>
            <p>
              נתקלתם בבעיית נגישות באתר? אנו מזמינים אתכם ליצור קשר עם רכז הנגישות שלנו:
            </p>
            <div className="mt-4 p-5 bg-white border border-[#111111]/[0.08] space-y-2">
              <p><strong>שם:</strong> Shlomi Arviv</p>
              <p><strong>טלפון:</strong>{" "}
                <a href="tel:0535220611" dir="ltr" className="text-[#C8A97E] hover:underline">053 522 0611</a>
              </p>
              <p><strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/972535220611" target="_blank" rel="noopener noreferrer" className="text-[#C8A97E] hover:underline">
                  לחצו כאן לשליחת הודעה
                </a>
              </p>
              <p><strong>כתובת:</strong> בוגרשוב 37, תל אביב</p>
            </div>
            <p className="mt-4 text-sm text-[#111111]/55">
              נשתדל לחזור אליכם תוך 2 ימי עסקים.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[#111111] text-2xl font-semibold mb-4">תאריך עדכון אחרון</h2>
            <p>הצהרת נגישות זו עודכנה לאחרונה ביוני 2026.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-[#111111]/[0.08]">
          <a
            href="/"
            className="text-[#C8A97E] text-[10px] tracking-[0.45em] uppercase hover:text-[#111111] transition-colors duration-300"
          >
            ← חזרה לדף הבית
          </a>
        </div>
      </div>
    </main>
  );
}
