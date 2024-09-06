import { useState } from "react";
import { Link } from "react-router-dom";
import logout from "/public/assets/svg/logout.svg"
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const SideBar = () => {

  const [activeSide, setActiveSide] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для управления модальным окном

  const titles = [
    {
      title: 'Отзывы',
      label: 'Reviews',
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all ${
            activeSide === 0 ? '#212E36' : 'text-[#FEFFFF]'
          }`}
        >
          <path
            d="M17.5 12.7222C17.5 13.1633 17.3244 13.5864 17.0118 13.8983C16.6993 14.2103 16.2754 14.3855 15.8333 14.3855H5.83333L2.5 17.7122V4.40552C2.5 3.96438 2.67559 3.5413 2.98816 3.22937C3.30072 2.91743 3.72464 2.74219 4.16667 2.74219H15.8333C16.2754 2.74219 16.6993 2.91743 17.0118 3.22937C17.3244 3.5413 17.5 3.96438 17.5 4.40552V12.7222Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Заказы',
      label: 'Orders',
      icon: (
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all ${
            activeSide === 1 ? '#212E36' : 'text-[#FEFFFF]'
          }`}
        >
          <path
            d="M14.2552 17.75H1.75521C1.53419 17.75 1.32223 17.6622 1.16595 17.5059C1.00967 17.3496 0.921875 17.1377 0.921875 16.9167V1.08334C0.921875 0.862322 1.00967 0.65036 1.16595 0.49408C1.32223 0.337799 1.53419 0.250002 1.75521 0.250002H10.9635C11.1761 0.249536 11.3806 0.330847 11.5348 0.477085L14.8265 3.57334C14.9091 3.65135 14.9749 3.74538 15.02 3.84968C15.065 3.95399 15.0884 4.06638 15.0885 4.18V16.9167C15.0885 17.1377 15.0007 17.3496 14.8445 17.5059C14.6882 17.6622 14.4762 17.75 14.2552 17.75ZM1.75521 1.08334V16.9167H14.2552V4.18L10.9635 1.08334H1.75521Z"
            fill="currentColor"
          />
          <path
            d="M14.6302 4.41667H11.3385C11.1175 4.41667 10.9056 4.32887 10.7493 4.17259C10.593 4.01631 10.5052 3.80435 10.5052 3.58333V0.666667C10.5052 0.55616 10.5491 0.450179 10.6272 0.372039C10.7054 0.293899 10.8114 0.25 10.9219 0.25C11.0324 0.25 11.1384 0.293899 11.2165 0.372039C11.2946 0.450179 11.3385 0.55616 11.3385 0.666667V3.58333H14.6302C14.7407 3.58333 14.8467 3.62723 14.9248 3.70537C15.003 3.78351 15.0469 3.88949 15.0469 4C15.0469 4.11051 15.003 4.21649 14.9248 4.29463C14.8467 4.37277 14.7407 4.41667 14.6302 4.41667ZM7.58854 4.83333H3.83854C3.72803 4.83333 3.62205 4.78943 3.54391 4.71129C3.46577 4.63315 3.42188 4.52717 3.42188 4.41667C3.42188 4.30616 3.46577 4.20018 3.54391 4.12204C3.62205 4.0439 3.72803 4 3.83854 4H7.58854C7.69905 4 7.80503 4.0439 7.88317 4.12204C7.96131 4.20018 8.00521 4.30616 8.00521 4.41667C8.00521 4.52717 7.96131 4.63315 7.88317 4.71129C7.80503 4.78943 7.69905 4.83333 7.58854 4.83333ZM12.1719 7.33333H3.83854C3.72803 7.33333 3.62205 7.28943 3.54391 7.21129C3.46577 7.13315 3.42188 7.02717 3.42188 6.91667C3.42188 6.80616 3.46577 6.70018 3.54391 6.62204C3.62205 6.5439 3.72803 6.5 3.83854 6.5H12.1719C12.2824 6.5 12.3884 6.5439 12.4665 6.62204C12.5446 6.70018 12.5885 6.80616 12.5885 6.91667C12.5885 7.02717 12.5446 7.13315 12.4665 7.21129C12.3884 7.28943 12.2824 7.33333 12.1719 7.33333ZM12.1719 9.83333H3.83854C3.72803 9.83333 3.62205 9.78943 3.54391 9.71129C3.46577 9.63315 3.42188 9.52717 3.42188 9.41667C3.42188 9.30616 3.46577 9.20018 3.54391 9.12204C3.62205 9.0439 3.72803 9 3.83854 9H12.1719C12.2824 9 12.3884 9.0439 12.4665 9.12204C12.5446 9.20018 12.5885 9.30616 12.5885 9.41667C12.5885 9.52717 12.5446 9.63315 12.4665 9.71129C12.3884 9.78943 12.2824 9.83333 12.1719 9.83333ZM12.1719 12.3333H3.83854C3.72803 12.3333 3.62205 12.2894 3.54391 12.2113C3.46577 12.1332 3.42188 12.0272 3.42188 11.9167C3.42188 11.8062 3.46577 11.7002 3.54391 11.622C3.62205 11.5439 3.72803 11.5 3.83854 11.5H12.1719C12.2824 11.5 12.3884 11.5439 12.4665 11.622C12.5446 11.7002 12.5885 11.8062 12.5885 11.9167C12.5885 12.0272 12.5446 12.1332 12.4665 12.2113C12.3884 12.2894 12.2824 12.3333 12.1719 12.3333ZM12.1719 14.8333H3.83854C3.72803 14.8333 3.62205 14.7894 3.54391 14.7113C3.46577 14.6332 3.42188 14.5272 3.42188 14.4167C3.42188 14.3062 3.46577 14.2002 3.54391 14.122C3.62205 14.0439 3.72803 14 3.83854 14H12.1719C12.2824 14 12.3884 14.0439 12.4665 14.122C12.5446 14.2002 12.5885 14.3062 12.5885 14.4167C12.5885 14.5272 12.5446 14.6332 12.4665 14.7113C12.3884 14.7894 12.2824 14.8333 12.1719 14.8333Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: 'Доставка',
      label: 'Delivery',
      icon: (
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all ${
            activeSide === 2 ? '#212E36' : 'text-[#FEFFFF]'
          }`}
        >
          <path
            d="M2.34842 6.26027L5.01932 4.31977C5.31248 4.10612 5.67473 3.98786 6.05498 4.00067C6.98115 4.02344 7.79448 4.63057 8.0774 5.51697C8.23265 6.00359 8.37423 6.33197 8.50223 6.50208C9.26248 7.51292 10.4721 8.16667 11.8343 8.16667V9.83333C10.0221 9.83333 8.4029 9.00692 7.33298 7.7105L6.75165 11.0071L8.46923 12.4483L10.3219 17.5383L8.75573 18.1083L7.05582 13.438L4.23062 11.0673C3.77433 10.6985 3.52697 10.0993 3.63607 9.48058L4.05991 7.07692L3.49588 7.48675L1.72337 9.92633L0.375 8.94675L2.33428 6.25L2.34842 6.26027ZM7.25098 3.58333C6.33048 3.58333 5.58432 2.83714 5.58432 1.91667C5.58432 0.996192 6.33048 0.25 7.25098 0.25C8.1714 0.25 8.91765 0.996192 8.91765 1.91667C8.91765 2.83714 8.1714 3.58333 7.25098 3.58333ZM4.77465 14.5677L2.09636 17.7597L0.819625 16.6883L3.29893 13.7336L3.92103 11.9167L5.41365 13.1667L4.77465 14.5677Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: 'Товар',
      label: 'Goods',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all ${
            activeSide === 3 ? '#212E36' : 'text-[#FEFFFF]'
          }`}
        >
          <path
            d="M16.6693 17.5V15.8333C16.6693 14.9493 16.3181 14.1014 15.693 13.4763C15.0678 12.8512 14.22 12.5 13.3359 12.5H6.66927C5.78522 12.5 4.93737 12.8512 4.31225 13.4763C3.68713 14.1014 3.33594 14.9493 3.33594 15.8333V17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.9974 9.16667C11.8383 9.16667 13.3307 7.67428 13.3307 5.83333C13.3307 3.99238 11.8383 2.5 9.9974 2.5C8.15645 2.5 6.66406 3.99238 6.66406 5.83333C6.66406 7.67428 8.15645 9.16667 9.9974 9.16667Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    }
  ];

  const handleSideBarClick = (index) => {
    setActiveSide(index);
  };

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-[#21252bbc] h-screen flex flex-col items-start justify-start px-5 gap-[150px] border-r border-l border-[#49DCFF]">
      <img
        src="/public/assets/svg/adminLogo.svg"
        alt="logo"
        className="object-cover pt-7"
      />
      <nav className="w-full">
        <ul className="w-full">
          {titles.map((title, index) => (
            <li
              key={index}
              className="w-full py-2 flex justify-start hover:scale-105 hover:transition hover:duration-300 hover:ease-out"
            >
              <Link
                to={`/admin/${title.label.toLowerCase()}`}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                  activeSide === index ? "bg-white text-black" : "text-[#FEFFFF]"
                }`}
                onClick={() => handleSideBarClick(index)}
              >
                {title.icon}
                <span className="font-bold w-[140px]">{title.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="flex items-center gap-3 hover:scale-105 hover:transition hover:duration-300 hover:ease-out cursor-pointer"
        onClick={handleLogoutClick}
      >
        <img src={logout} alt="logout" />
        <p className="text-[#49DCFF]">Выйти</p>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[300px] text-black">
            <h2 className="text-lg font-bold mb-4">Подтвердите выход</h2>
            <p className="mb-4">Вы уверены, что хотите выйти?</p>
            <div className="flex justify-between gap-2">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded"
              >
                Отмена
              </button>
              <button
                onClick={handleConfirmLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SideBar