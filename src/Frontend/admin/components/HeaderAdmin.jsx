import { RiSearch2Line } from 'react-icons/ri';
import { Avatar } from '@mui/material';

const HeaderAdmin = () => {
  return (
    <header className="w-full flex items-center justify-between border-b-2 border-[gray] py-5">
      {/* Поиск */}
      <div className="relative w-2/3">
        <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl" />
        <input
          type="text"
          className="w-full h-10 pl-10 pr-4 text-[#212936] bg-white focus:outline-none border-none rounded-sm"
        />
      </div>

      {/* Админ */}
      <div className="flex items-center gap-4 cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
        <h3>Администратор</h3>
        <Avatar
          className="border-[var(--bg-blue)] border"
          src=""
          alt="AdminImage"
        />
      </div>
    </header>
  );
};

export default HeaderAdmin;
