
import PropTypes from 'prop-types';

function Bookmark({bookmark}) {
    const {title , author} = bookmark ;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-3xl'>
            <p>{author}</p>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
}

Bookmark.propTypes = {
    bookmark :PropTypes.object
};

export default Bookmark;