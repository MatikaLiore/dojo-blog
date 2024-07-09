import { useParams } from "react-router-dom";

const Blog = () => {

    const {id} = useParams();

    return ( 
        <div className="content">
            <h2>Blog Number - {id}</h2>
        </div>
     );
}
 
export default Blog;