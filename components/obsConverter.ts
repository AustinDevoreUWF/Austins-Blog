// takes [# New Fun Idea!] -> [new-fun-idea]
export const headerSimplify = (text: string)=>{
    let result= text.trim();
    result = text.toLowerCase();
    result = result.replace(/\s+/g, '-');//here /is string literal/ s\ is newline and g is everytime seen, then 'replace'
    result = result.replace(/[^\w-]/g,'') //get rid of all non alph/0-9/_ chars(\w-), replace w/'' [for set of char]
    return result;
}

//take the new phrase and set it in a proper web link format so it works
//1. Access page name
//2. Set page name as a var, set new val as var with # in front
// <a href="html_demo.html#C4">Jump to Chapter 4</a>
export const htmlTweak = (markdown: string) => {
    const newRegex = /\[\[(.*?)\]\]/g;

    return markdown.replace(newRegex, (match, raw) => {
        if (!raw) return match; // skip if empty, use match as fallback

        const parts = raw.split("|");
        const target = parts[0].trim();
        const label = (parts[1] || target).trim();
        const id = headerSimplify(target);

        return `[${label}](#${id})`;
    });
}
export const addHeadingIds = (markdown: string) => {
  return markdown.replace(/^(#{1,6})\s+(.*)$/gm, (_, hashes, title) => {
    const level = hashes.length;
    const id = headerSimplify(title);
    return `<h${level} id="${id}">${title}</h${level}>`;
  });
};
