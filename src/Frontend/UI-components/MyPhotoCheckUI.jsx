import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 4,
});

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    padding: 0,
    border: '1px solid var(--bg-light)',
    borderRadius: 4,
    backgroundColor: 'transparent',
    fontStyle: 'normal',
    width: '120px',
    height: '150px',
    maxWidth: '200px',
    maxHeight: '200px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`& .MuiTooltip-arrow`]: {
    color: 'var(--bg-light)',
  },
});

const IconContainer = styled('div')({
  position: 'relative',
  width: 19,
  height: 19,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

const LoadingContainer = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 2,
  backgroundColor: 'var(--bg-dark)',
  opacity: '70%',
});

const SmallPreview = styled('img')({
  borderRadius: 3,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  imageRendering: 'auto',
});

const MyPhotoCheckUI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setIsLoading(true);
      setUploadedFileUrl(fileUrl);

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleIconClick = () => {
    if (isMobile) {
      setTooltipOpen(!tooltipOpen);
    }
  };

  return (
    <Container>
      <CustomTooltip
        title={
          uploadedFileUrl && (
            <SmallPreview 
              src={uploadedFileUrl} 
              alt="Uploaded Check Thumbnail"
              srcSet={`${uploadedFileUrl} 1x, ${uploadedFileUrl} 2x`}
            />
          )
        }
        placement="top"
        arrow
        open={isMobile ? tooltipOpen : undefined}
        disableHoverListener={isMobile}
      >
        <label>
          <IconContainer onClick={handleIconClick}>
            {isLoading && (
              <LoadingContainer>
                <CircularProgress sx={{color:'var(--bg-blue)'}} size={12} />
              </LoadingContainer>
            )}
            <img
              className='object-contain'
              src="/assets/svg/PhotoCheck.svg"
              alt="Upload Photo Check"
            />
          </IconContainer>
          <input className='hidden' type="file" onChange={handleFileChange} />
        </label>
      </CustomTooltip>
      <span className='text-[10px] mt-1 text-[#A7A5A5] cursor-pointer'>
        {uploadedFileUrl ? <font color='white'>Просмотреть чек об оплате</font> : 'Вы можете прикрепить чек'}
      </span>
    </Container>
  );
};

export default MyPhotoCheckUI;
