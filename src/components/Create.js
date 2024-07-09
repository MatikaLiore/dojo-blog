import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Title</label>
                <input required value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label></label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <select required value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='ndalama'>Ndalama</option>
                    <option value='mpho'>Mpho</option>
                    <option value='ishsheh'>Ishsheh</option>
                </select>
                <label>{title}</label>
                <label>{body}</label>
                <label>{author}</label>
            </form>
        </div>
     );
}
 
export default Create;