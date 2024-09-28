import { styled, Tooltip } from '@mui/material';
import MuiTooltipUI from '../UI/MuiTooltip';
import { Link } from 'react-router-dom';
import { ContentForProductData } from '../../../../Backend/utils/constans';

export const ContentForProduct = () => {
  return (
    <div className="w-[96%] mx-auto">
      <div className="w-full mb-7 flex flex-row flex-wrap justify-start items-center gap-7">
        <h1 className="text-4xl whitespace-nowrap">Хит продаж</h1>
        <Link to='new'
          className="bg-[#2e3d52] rounded-md px-3 text-[#49DCFF] whitespace-nowrap"
        >
          смотреть все
        </Link>
      </div>

      <div className="w-full grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 gap-7 pt-7">
        {ContentForProductData.map((item, index) => (
          <div
            key={index}
            className="w-full h-fit flex flex-col items-start justify-start relative pb-5 bg-[#1C232E]"
          >
            <div className="w-[85%] mx-auto z-10">
              <img
                src={item.img}
                alt="img"
                className="mx-auto cursor-pointer w-full left-0 top-[-20px] px-12 pb-5 object-fill mt-[-20px]"
              />
              <div className="w-[100%] flex flex-col items-start justify-center gap-2">
                <h3 className="">{item.title}</h3>
                <p className="font-sans text-[#49DCFF] flex gap-2 items-center relative">
                  {item.price}
                  <img src="/assets/svg/som.svg" alt="Som" />
                  <MuiTooltipUI />
                </p>
              </div>
              <div className="w-full grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-5 gap-4 pt-5">
                <button className="w-auto px-6 py-2 flex items-center justify-center rounded bg-[#49DCFF] text-[#212936] text-sm font-mono font-medium mobile:col-span-3 tablet:col-span-3 laptop:col-span-4 desktop:col-span-2 hover:bg-[var(--bg-dark-blue)] hover:text-[var(--bg-blue)] transition-colors duration-300 ease-in-out">
                  КУПИТЬ
                </button>
                <TomTooltip title={"ПОДРОБНЕЕ"} placement='top'>
                  <button className="w-auto px-6 py-2 flex items-center justify-center rounded bg-[#2C3849] text-[#49DCFF] text-sm font-mono font-medium mobile:col-span-2 tablet:col-span-2 laptop:col-span-3 desktop:col-span-2 hover:bg-[var(--bg-blue)] hover:text-[var(--bg-dark-blue)] transition-colors duration-300 ease-in-out">
                    ПОДРОБНЕЕ
                  </button>
                </TomTooltip>
                  <TomTooltip title={'КОНФИГУРИРОВАТЬ'} placement='top'>
                    <button className="w-auto p-[11px] rounded bg-[#2C3849] flex items-center justify-center">
                      <img src="/assets/svg/setting.svg" alt="Settings" />
                    </button>
                  </TomTooltip>
              </div>
              <p className="pt-7 text-xs text-[#8490A4] z-10">{item.text}</p>
              <div className="pt-10 border-b border-b-[#56617c88]"></div>
              <div className="flex flex-col items-start">
                {item.spares.map((spare, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-start gap-4 pt-5 h-fit"
                  >
                    <img src={spare.icon} alt="Product" />
                    <p className="flex flex-col gap-2">
                      <span className="text-[#8490A4] text-xs font-sans">
                        {spare.title}
                      </span>
                      <span className="text-[#C3CEE1] text-xs">
                        {spare.name}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TomTooltip = styled(({ className, ...props}) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`] : {
    padding: 6,
    minWidth: 85,
    backgroundColor:"#3c4a60",
    color:"#49DCFF"
  },
})