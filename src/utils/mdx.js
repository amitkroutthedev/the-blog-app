import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'
import { compileMDX } from 'next-mdx-remote/rsc'

const articlesPath = path.join(process.cwd(), 'blogs')

export async function getSlug() {
    const paths = sync(`${articlesPath}/*.mdx`)

    return paths.map((path) => {
        // holds the paths to the directory of the article
        const pathContent = path.split('/')
        const fileName = pathContent[pathContent.length - 1]
        const [slug, _extension] = fileName.split('.')

        return slug
    })
}

/*export async function getArticleFromSlug(slug) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`,)
    const source = fs.readFileSync(articleDir, "utf-8")
    const { content, data } = matter(source)

    return {
        content,
        frontmatter: {
            slug,
            title: data.title,
            publisher: "Amit Kumar Rout",
            publishedOn: data.publishedOn,
            readingTime: readingTime(source).text,
            ...data,
        },
    }
}*/

export async function getAllArticles() {
    const articles = fs.readdirSync(path.join(process.cwd(), 'blogs'))

    return articles.reduce((allArticles, articleSlug) => {
        // get parsed data from mdx files in the "articles" dir
        const source = fs.readFileSync(
            path.join(process.cwd(), 'blogs', articleSlug),
            'utf-8'
        )
        const { data } = matter(source)

        return [
            {
                ...data,
                slug: articleSlug.replace('.mdx', ''),
                readingTime: readingTime(source).text,
            },
            ...allArticles,
        ]
    }, [])
}

export const getPostBySlug = async slug => {
    const realSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(articlesPath, `${realSlug}.mdx`)

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
    })

    return {
        meta: {
            ...frontmatter,
            slug: realSlug,
            publisher: "Amit Kumar Rout",
            readingTime: readingTime(fileContent).text,
        }, content
    }
  
}