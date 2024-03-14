import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog , handleBookmark , handleMarkAsRead}) => {
   const {title, cover ,id , author, author_img, post_date, reading_time, hashtags } = blog ;
    return (
        <div className='mb-14 mt-8'>
            <img className='w-full rounded-3xl' src={cover} alt="" />
            <div className='flex justify-between mt-8 space-y-10'>
                <div className='flex gap-3'>
                       <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-medium'>{author}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span className='mr-5'>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(blog)}> <FaBookmark className='text-2xl text-orange-600'></FaBookmark> </button>
                </div>
            </div>
            <h2 className='text-3xl font-extrabold'>{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span key={hash.id} className='text-xl font-medium text-black'><a href="#">        {hash}</a></span>)
                }
            </p>
            <p className='font-bold'> Present : {id} </p>
            <br />
            <button onClick={()=> handleMarkAsRead(reading_time)} className='text-red-600'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkAsRead : PropTypes.func, 
}

export default Blog;