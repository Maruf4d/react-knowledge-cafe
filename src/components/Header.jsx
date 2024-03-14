import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center container mx-auto p-5 border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={profile}/>
        </div>
    );
};

export default Header;