import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import MySelectUI from "../../../UI-components/MySelectUI";
import MyInputUI from "../../../UI-components/MyInputUI";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PermMedia } from "@mui/icons-material";
import { MdDeleteForever } from "react-icons/md";

const option = [
  { value: '', label: 'ПК' },
  { value: '', label: 'Ноутбук' },
  { value: '', label: 'Всё остальное' }
];

const AddProduct = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [count, setCount] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    setImageUrl(null);
    fileInputRef.current.value = null;
  };

  const handleIconClick = () => fileInputRef.current.click();
  
  const updateCount = (value) => {
    setCount(prevCount => Math.max(0, prevCount + value));
  };

  return <>
    <IoArrowBackStyled onClick={() => navigate(-1)} />
    <div className="h-2/3 flex justify-between mb-16 ml-10">
      <div className="w-2/4 flex flex-col gap-2">
        <h1 className="text-2xl text-[#49DCFF]">Добавить товар</h1>
        <MySelectUI   
          label="Раздел"
          options={option}
          background="var(--bg-dark)"
        />
        <MyInputUI
          label="Название товара"
          labelColor="white"
          backgroundColor="var(--bg-dark)"
        />
        
        {/* Используем Flexbox для одной строки */}
        <div className="flex items-end">
          <MyInputUI
            label="Укажите цену"
            labelColor="white"
            width="240px"
            backgroundColor="var(--bg-dark)"
          />
          <Counter>
            <CountBtn onClick={() => updateCount(-1)}>
              <FiMinus />
            </CountBtn>
              <span>{count}</span>
            <CountBtn onClick={() => updateCount(1)}>
              <FiPlus />
            </CountBtn>
          </Counter>
        </div>
      </div>

      <label>Загрузить фотографию
        <PhotoProduct onClick={handleIconClick}>
          <input
            className="hidden"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            />
          {imageUrl ? (
            <>
              <img src={imageUrl} alt="preview" />
              <MdDeleteForever className="delete-icon" onClick={handleDeleteClick} />
            </>
          ) : (
            <PermMedia />
          )}
        </PhotoProduct>
      </label>
    </div>
  </>
}

export default AddProduct


const IoArrowBackStyled = styled(IoArrowBack)({
  width: '2.5em',
  height: '2.5em',
  padding: '4px',
  cursor: 'pointer',
  borderRadius: '50%',
  transition: '0.3s ease-in-out',
  '&:hover': {
    background: 'rgb(255, 255, 255, 0.1)',
  },
})

const Counter = styled('div')({
  display: 'flex',
  alignItems: 'center',
  background: 'var(--bg-dark)',
  border: '1px solid var(--bg-dark-gray)',
  padding: '1px',
  span: {
    margin: '0 6px',
  }
})

const CountBtn = styled('button')({
  color: 'var(--bg-blue)',
  padding: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s ease-in-out',
  '&:hover': {
    background: 'var(--bg-dark-hover)',
  },
  '&:active': {
    background: 'var(--bg-dark-gray)',
  },
})

const PhotoProduct = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  background: 'var(--bg-dark)',
  width: '250px',
  height: '210px',
  border: '1px solid var(--bg-dark-gray)',
  cursor: 'pointer',
  transition: '0.3s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    background: 'var(--bg-dark-hover)',
  },
  '&:hover .delete-icon': {
    opacity: 1,
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: '0.3s ease-in-out',
  },

  '.delete-icon': {
    position: 'absolute',
    bottom: 0,
    right: 0,
    background: 'var(--bg-dark-hover)',
    borderRadius: '2px 0 0 0',
    fontSize: '3rem',
    padding: '8px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      color: 'red',
      transition: '0.3s ease-in-out'
    }
  },
});
