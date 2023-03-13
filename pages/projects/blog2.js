
const postsDirectory = process.cwd()
export async function getPostData(id) {
    const paths = () => getAllPostIds()
    console.log(paths)
	const fileName = `${id}.mdx`;
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id and contentHtml
    return {
		fileName,
        id,
        ...matterResult.data,
    };
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, ""),
            },
        };
    });
}
