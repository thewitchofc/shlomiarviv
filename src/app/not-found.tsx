import Link from "next/link";

export const metadata = {
  title: "עמוד לא נמצא | Shlomi Arviv Hair Design",
};

export default function NotFound() {
  return (
    <main
      dir="rtl"
      lang="he"
      className="min-h-screen bg-[#F8F6F3] flex items-center justify-center px-8"
    >
      <div className="text-center max-w-lg">

        {/* 404 number */}
        <div
          className="font-display font-bold text-[#C8A97E]/15 select-none leading-none mb-8"
          style={{ fontSize: "clamp(8rem, 25vw, 18rem)" }}
          aria-hidden="true"
        >
          404
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-10 h-px bg-[#C8A97E]/35" />
          <span className="text-[#C8A97E] text-[9px] tracking-[0.6em] uppercase font-light">עמוד לא נמצא</span>
          <span className="w-10 h-px bg-[#C8A97E]/35" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-[#111111] text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-5">
          נראה שהעמוד שחיפשת
          <br />
          <span className="text-[#C8A97E] italic">לא קיים.</span>
        </h1>

        <p className="text-[#111111]/55 text-base font-light leading-[1.9] mb-12">
          אולי הקישור שגוי, או שהעמוד הוסר.
          <br />
          אפשר לחזור לדף הבית ולהתחיל מחדש.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-[#111111] hover:bg-[#222] text-[#F8F6F3] text-xs tracking-[0.35em] uppercase px-8 py-4 transition-colors duration-300"
          >
            חזרה לדף הבית
          </Link>
          <a
            href="https://wa.me/972535220611"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8A97E] text-xs tracking-[0.35em] uppercase hover:text-[#111111] transition-colors duration-300 border-b border-[#C8A97E]/40 hover:border-[#111111]/40 pb-0.5"
          >
            דברו איתנו בוואטסאפ
          </a>
        </div>

      </div>
    </main>
  );
}
