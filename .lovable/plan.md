# תוכנית: עמוד הבית של הפורטפוליו

בהשראת glorialo.design — מינימליסטי, רקע בהיר, פונט Montserrat, אינטראקציות hover צבעוניות. כרגע עמוד הבית בלבד; שאר העמודים בהמשך.

## מבנה העמוד

```text
┌─────────────────────────────────────────────┐
│ NAV: Yasmin Greenholts   Home About Work Contact │
├─────────────────────────────────────────────┤
│ HERO                                         │
│ Hi, I'm Yasmin                               │
│ I [design learning experiences], [write      │
│ code], [read books], and [keep bees].        │
│  ↑ כל ביטוי מודגש = צבע ייחודי ב-hover      │
├─────────────────────────────────────────────┤
│ INTRO (טקסט משני קטן יותר)                   │
│ Hi, I'm Yasmin Greenholts. A Learning        │
│ Technologies student, programmer, and        │
│ instructional designer specializing in       │
│ gamified learning, digital training modules, │
│ and seamless UI/UX.                          │
├─────────────────────────────────────────────┤
│ WORK — רשת של מלבנים צבעוניים                │
│ [Project 1]  [Project 2]                     │
│ [Project 3]  [Project 4]  ...                │
│ (כל מלבן: כותרת + תת-כותרת + תמונה, לחיץ)   │
├─────────────────────────────────────────────┤
│ LET'S CONNECT                                │
│  ✉ mail   in LinkedIn                        │
└─────────────────────────────────────────────┘
```

## סקשן Hero — צבעי hover לביטויים

ארבעה ביטויים ניתנים ל-hover, כל אחד עם צבע רקע/הדגשה משלו (בהשראת הפלטה של glorialo — צבעים חמים ורוויים על רקע קרם):

- **design learning experiences** — כתום/אפריקוט
- **write code** — כחול-סגלגל
- **read books** — ירוק זית
- **keep bees** — צהוב חרדל

ב-hover: הרקע של הביטוי נצבע, שאר הטקסט נשאר שחור.

## סקשן Work — 10 פרויקטים

כל כרטיס = מלבן צבעוני עם תמונה בפנים, כותרת ותת-כותרת מתחת. לחיצה על כל המלבן פותחת את הקישור ב-tab חדש. פרויקטים ללא קישור מציגים תגית "Coming soon" ואינם לחיצים.

תמונות: יחולצו מהמסמך שהעלית (image1–image8) ויועלו כ-Lovable Assets.

| # | כותרת | תת-כותרת | קישור |
|---|---|---|---|
| 1 | Attack on Kraken | מחולל משחקי מיון (Unity & C#) | triangle.telem-hit.net/.../AttackOnKraken |
| 2 | קורס דיגיטלי: הכיתה ההפוכה | דף נחיתה + קורס במערכת Moodle | telemview.telem-hit.net/product/4458 |
| 3 | Flipped Classroom Lab | סביבה חווייתית להכשרת מורים (Lovable & HTML/CSS) | classroom-flip-lab.lovable.app |
| 4 | ShipEat | משחק ארקייד ב-Game Jam (Web & JS) | yasmoosh.github.io/ShipEat |
| 5 | לומדת בטיחות: גינה קהילתית | לומדה משחקית לילדים (Storyline) | Coming soon |
| 6 | Blip | אב-טיפוס UI/UX לשפת גוף (Figma) | figma.com/proto/.../Blip |
| 7 | דוקו-אקולוגיה: דבורי הבר | סרט תיעודי קצר | drive.google.com/... |
| 8 | ניתוח צרכים ומסמך אפיון | מטלת סוף שנה, ADDIE | Coming soon |
| 9 | אתר אימוץ חתולים וכלבים | פרונט-אנד למיזם חברתי (HTML/CSS/JS) | yasmoosh.github.io/Adoption-Site |
| 10 | 5 דרכים לשילוב AI בכיתה | מדריך חזותי למורים (Canva) | canva.link/rtzpruqz8jtp9ys |

לשני הפרויקטים ללא תמונה במסמך: placeholder צבעוני עם הכותרת בלבד.

## Nav

לוגו/שם בצד שמאל: **Yasmin Greenholts**. קישורים בצד ימין: Home, About, Work, Contact — כרגע ללא sub-items, כפי שביקשת.

## Let's connect

תחתית העמוד, גדול ומרכזי כמו אצל גלוריה:
- **Let's connect** ככותרת
- אייקון מייל → `mailto:yasmin295g@gmail.com`
- אייקון LinkedIn → `https://www.linkedin.com/in/yasmin-greenholts-60b0b0274`

## Technical

- Route: עדכון `src/routes/index.tsx` (מחיקת placeholder).
- Nav משותף ב-`src/routes/__root.tsx` (יישאר לעמודים הבאים).
- פונט **Montserrat** נטען כ-`<link>` מ-Google Fonts ב-`__root.tsx` head, ומוגדר כ-`--font-sans` ב-`@theme` ב-`src/styles.css`.
- פלטת צבעים חדשה ב-`src/styles.css` (רקע קרם + 4 צבעי hero + צבעי מלבני work).
- תמונות הפרויקטים יחולצו מהמסמך ויועלו דרך `lovable-assets create`.
- SEO: `head()` ל-index עם title/description/og ייעודיים.
- אייקונים: `Mail` ו-`Linkedin` מ-`lucide-react`.
