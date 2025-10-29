import Link from "next/link";
import type { ArticleItem } from "@/types";
import HomePage from "@/app/page";

interface props{
    category: string
    articles:ArticleItem[]
}

export default function ArticleItemList({category, articles}: props) {
        return (
            <div className="flex flex-col gap-5">
                <h2 className="font-cormorantGaramond text-4xl">{category}</h2>
                <div className="flex flex-col gap-2.5 font-poppins text-lg">
                    {articles.map((article, id) => (
                        <Link href={`/${article.id}`} key={id} className="text-neutral-900 hover:text-amber-700 transition duration-150">
                            {article.title}
                        </Link>
                    ))}
                </div>
            </div>
        );
}