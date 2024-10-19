import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MyAreaUI from '../../../../UI-components/MyAreaUI';
import MyButtonUI from '../../../../UI-components/MyButtonUI';
import { Rating, Stack } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ReviewModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className='flex justify-center items-center'>
        <MyButtonUI
          onClick={() => setOpen(true)}
          name="Оставить отзыв"
          fontSize="16px"
          height="40px"
          width="180px"
          backgroundColor="#2C3449"
          color="#49dcff"
        />

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle className='bg-[var(--bg-dark)] text-[#ffff]'>Что вы думаете?</DialogTitle>
          <DialogContent className='bg-[var(--bg-dark)]'>
            <DialogContentText color='#868889'>
              Пожалуйста, оставьте свой отзыв о нашем продукте или услуге.
            </DialogContentText>
            <Stack spacing={1}>
              <Rating
                sx={{
                  color: "var(--bg-blue)", 
                  '& .MuiRating-iconEmpty': {
                    color: '#49dcff', 
                  }
                }}
                name="size-large"
                defaultValue={0}
                size="large"
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Stack>
            <MyAreaUI
              height="200px"
              placeholder="Расскажите нам о своем опыте"
              backgroundColor="white"
              color="var(--bg-black)"
              fontSize='14px'
            />
          </DialogContent>
          <DialogActions className='bg-[var(--bg-dark)]'>
            <MyButtonUI
              onClick={() => setOpen(false)}
              name="Отправить"
              width='173px'
              height='45px'
              backgroundColor='#49dcff'
              Radius='2px'
            />
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

