import React, { useState, useEffect } from 'react';
import "../assets/global.css";
import "../Pages/Blog.css";
import blogData from "../data/blog.json";

const itemsPerPage = 8;

const BlogContent = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setBlogs(blogData);
    }, []);

    const totalItems = blogs.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const paginatedBlogs = blogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className='blogs'>
            <div className='blogs-cont container'>
                {paginatedBlogs.map((blog) => (
                    <div key={blog.id} className="blogs-item">
                        <img className='blogs-img' src={blog.image} alt="image" />
                        <div>
                            <span className='blogs-subtitle'>{blog.date}</span>
                            <span className='blogs-admin'>{blog.admin}</span>
                        </div>
                        <p className='blogs-text'>{blog.text}</p>
                        <div className='blogs-icon'>
                            <p className='blogs-more'>{blog.more}</p>
                            <img src={blog.icon} className='blogs-icon1' alt="icon" />
                            <p className='blogs-number'>{blog.number}</p>
                        </div>
                    </div>
                ))}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogContent;








// import React, { useState, useEffect } from 'react';
// import "../assets/global.css";
// import "../Pages/Blog.css";
// import blogData from "../data/blog.json";
  

// const BlogContent = () => {
//     const [blogs, setBlogs] = useState([]);


//     useEffect(() => {
//         setBlogs(blogData);
//       }, []); 


//     return(
//         <section className='blogs'>
//             <div className='blogs-cont container'>
//         {blogs.map((blogs) => (
//           <div key={blogs.id} className="blogs-item">
//                 <img className='blogs-img' src={blogs.image} alt="image" />
//             <div>
//                 <span className='blogs-subtitle'>{blogs.date}</span>
//                 <span className='blogs-admin'>{blogs.admin}</span>
//             </div>  
//                 <p className='blogs-text'>{blogs.text}</p>
//             <div className='blogs-icon'>  
//                 <p className='blogs-more'>{blogs.more}</p>
//                 <img src={blogs.icon} className='blogs-icon1'></img>
//                 <p className='blogs-number'>{blogs.number}</p>
//             </div>
//           </div>
//         ))}
//         </div>
//         </section>
//     )
// }

// export default BlogContent;