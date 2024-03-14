import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks , reading}) => {
    return (
        <div className="md:w-1/3 bg-gray-500 m-4 rounded-2xl">
            <div>
                <h4 className="text-2xl font-semibold m-4">Reading Time : {reading}</h4>
            </div>
            <h2 className="text-2xl font-semibold m-4 p-4">Bookmarks {bookmarks.length} </h2>
            {
              bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
 
Bookmarks.propTypes ={
    bookmarks : PropTypes.array,
    reading : PropTypes.number,
}

export default Bookmarks;