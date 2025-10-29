import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { getArticleData } from "@/lib/articles";

export default async function Article(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;//will be this 
  const articleData = await getArticleData(slug);//plug slug(pagename)into getArticleData
    return(
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font poppins">
                <Link href={"/"} className="flex flex-col gap-1 place-items-center">
                    <ArrowLeftIcon width={20}/>
                    <p> Back to home</p>
                </Link>{/**Back to home */}
                <p>{articleData.date}</p>
            </div>
            <article className="article"
            dangerouslySetInnerHTML={{__html:articleData.contentHtml}}/>
        </section>
    )
}