import ArticleItemList from "@/components/ArticleItemList";
import { ThemeToggle } from "@/components/ThemeToggler";
import { getCategorisedArticles } from "@/lib/articles";

export default function HomePage(){
  const articles = getCategorisedArticles()
  console.log(articles);
  return(
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img src="/john1.jpg" alt="John The Apostle" 
        className="w-full h-full object-cover opacity-60 dark:opacity-40 transition-opacity duration-500"/>
      </div>
<section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
    <div className="fixed bottom-7 right-7 z-50">
      <ThemeToggle />
    </div>
  <header className="font-cinzel font-light text-6xl text-neutral-900 text-center text-glow dark:text-[#e8e6e3]">
    <h1>Writings</h1>
  </header>
  <section className="md:grid md:grid-cols-2 flex flex-col gap-10 dark:text-[#e8e6e3]">
    {articles !==null && Object.keys(articles).map((article)=>(
      <ArticleItemList
      category={article}
      articles={articles[article]}
      key={article}/>
    ))}
  </section>
</section>
</main>

  );
}
