import Blog from '../../components/blogs/blog';
import data from '../../data.json';
import { useRouter } from 'next/router';
function Blogs() {
    const router = useRouter();
    const blogId = +router.query.blogId;
    if(blogId === 1)
        return <Blog data = {data[0]} />
    else if(blogId === 2)
        return <Blog data = {data[1]} />
    else if(blogId === 3)
        return <Blog data = {data[2]} />
    return (
        <div></div>
    )
}

export default Blogs;