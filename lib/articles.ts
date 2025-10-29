import fs from "fs"
import matter from 'gray-matter'
import path from "path"
import moment from 'moment'
import { remark } from "remark"
import html from 'remark-html'

import type { ArticleItem } from "@/types"
const articlesDirectory = path.join(process.cwd(),"articles");

//This function grabs the info from the Articles
const getSortedArticles = ():ArticleItem[]=>{//returns sorted array of all articles by date
    const fileNames= fs.readdirSync(articlesDirectory)//reads the content of the files, gets all names of files

    //This maps the article data
    const allArticlesData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/, "")//gets md out of name so we can open the page in browser

        const fullPath=path.join(articlesDirectory,fileName)//takes the name and adds it to the file path
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        const matterResult = matter(fileContents);
        return{
            id,
            title:matterResult.data.title,
            date:matterResult.data.date,
            category:matterResult.data.category,
        }
    })
    //This sorts the article data by date
    return allArticlesData.sort((a,b)=>{
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        if(dateOne.isBefore(dateTwo)){
            return -1;
        }else if(dateTwo.isAfter(dateOne)){
            return 1;
        }else{return 0}
    })
}
//This calls the sorting alg and creates an empty obj that we then fill with .push
export const getCategorisedArticles=():Record<string,ArticleItem[]>=>{
    const sortedArticles = getSortedArticles();
    const categorisedArticles:Record<string, ArticleItem[]>={}

    sortedArticles.forEach(article=>{//for each of the sorted articles(sorted by date) here article is treated like i in a traditional for loop
        if(!categorisedArticles[article.category]){//if doesnt have a category
            categorisedArticles[article.category]=[]//creates an array for that category
        }categorisedArticles[article.category].push(article)//
    })
    return categorisedArticles;
}//literally get article data
export const getArticleData=async(id:string)=>{
    const fullPath=path.join(articlesDirectory, `${id}.md` )//adds from articlesdir the new filepath
    const fileContents = fs.readFileSync(fullPath,"utf-8")//goes through that filepath and reads it expecting to read utf-8 style
    const matterResult =matter(fileContents)//parses to be usefull with .mk style
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
const contentHtml = processedContent.toString()

return{
    id,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    //takes date info as DD-MM-YYYY formats to Full month name, day as ordinal, and year as YYYY
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY")
}
}