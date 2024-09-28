import { Info } from '@mui/icons-material';
import { styled, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

const MuiTooltip = ({
  title = "ОПЛАТА В КРЕДИТ",
  subtitle1 = "Быстро и просто",
  text1 = "Заполните анкету на сайте магазина и получите решение по вашей заявке за 2 минуты.",
  subtitle2 = "Выбор лучших условий",
  text2 = "Заявка уходит на рассмотрение в большое число финансовых организаций: Альфа-Банк, Pay P.S, Банк Восточный, Тинькофф Банк, Кредит Европа Банк, Second Bank и др.",
  tooltipPlacement = 'top',
  arrow = true
}) => {
  return (
    <TooltipStyled
      title={
        <>
          <h1 className="text-[#49DCFF] font-bold mb-2 border-b border-[#8490A4] pb-1">{title}</h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-[var(--bg-light)]">{subtitle1}</h2>
            <p className="text-[#8490A4] text-[10px]">{text1}</p>
            <h2 className="text-[var(--bg-light)] pt-2">{subtitle2}</h2>
            <p className="text-[var(--bg-gray)] text-[10px]">{text2}</p>
          </div>
        </>
      }
        arrow={arrow}
        placement={tooltipPlacement}
      >
      <Info
        sx={{ fontSize:'19px' }}
        className='cursor-pointer text-gray-500'
      />
    </TooltipStyled>
  );
};

MuiTooltip.propTypes = {
  title: PropTypes.string,
  subtitle1: PropTypes.string,
  text1: PropTypes.string,
  subtitle2: PropTypes.string,
  text2: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['top']),
  arrow: PropTypes.bool,
};

export default MuiTooltip;


const TooltipStyled = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  ['& .MuiTooltip-tooltip']: {
    padding: 17,
    backgroundColor: "#28303a",
  },
  ['& .MuiTooltip-arrow']: {
    color: "#28303a",
  },
});
