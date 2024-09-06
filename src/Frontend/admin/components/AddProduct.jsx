import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DeleteIcon from '@mui/icons-material/Delete';

import MySelectUI from '../../UI-components/MySelectUI';
import MyInputUI from '../../UI-components/MyInputUI';
import MyCountUI from '../../UI-components/MyCountUI';

const option = [
  { value: '', label: 'ПК' },
  { value: '', label: 'Ноутбук' },
  { value: '', label: 'Всё остальное' }
];

const AddProduct = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteClick = () => {
    setImageUrl(null);
    fileInputRef.current.value = null;
  };

  const handleBackClick = () => {
    navigate('Goods');
  };

  return (
    <div className='relative'>
      <ArrowBackIcon onClick={handleBackClick} style={iconStyle} />

      <Containers>
        <Title>Добавить товар</Title>

        <ProductForm>
          <div>
            <MySelectUI label="Раздел" width="520px" height="48px" options={option} />
            <MyInputUI label="Название товара" width="520px" height="48px" />

            <PriceAndQuantity>
              <MyInputUI label="Укажите цену" width="200px" height="48px" />
              <MyCountUI backgroundColor="#1C232E" />
            </PriceAndQuantity>
          </div>

          <ImageUploadSection>
            <Label>Загрузить фотографию</Label>
            <FileInputWrapper>
              <HiddenInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
              />

              {imageUrl ? (
                <ImageWrapper>
                  <img src={imageUrl} alt="preview" style={imageStyle} />
                  <DeleteButton onClick={handleDeleteClick}>
                    <DeleteIcon style={deleteIconStyle} />
                  </DeleteButton>
                </ImageWrapper>
              ) : (
                <IconWrapper onClick={handleIconClick}>
                  <CreateNewFolderIcon style={folderIconStyle} />
                </IconWrapper>
              )}
            </FileInputWrapper>
          </ImageUploadSection>
        </ProductForm>
      </Containers>
    </div>
  );
};


const iconStyle = {
  fontSize: '40px',
  cursor: 'pointer',
  margin: '20px'
};

const imageStyle = {
  width: '300px',
  height: '250px'
};

const deleteIconStyle = {
  fontSize: '50px'
};

const folderIconStyle = {
  fontSize: '48px'
};

const Containers = styled.div`
position: absolute;
left:50px;


`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: rgba(73, 220, 255, 1);
  margin-bottom: 20px;
`;

const ProductForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceAndQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageUploadSection = styled.div`
margin-top: -50px;
  margin-left: 100px;
`;

const Label = styled.p`
  font-size: 18px;
  color: rgba(254, 255, 255, 1);
  margin-bottom: 15px;
`;

const FileInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    background-color: rgba(51, 53, 56, 0.7);
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 250px;
  &:hover button {
    display: flex;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 280px;
  background-color: rgba(42, 50, 61, 1);
  border-radius: 2px;
`;

const DeleteButton = styled.button`
  display: none;
  position: absolute;
  top: 90px;
  left: 120px;
  background-color: black;
  border: none;
  border-radius: 50%;
  color: white;
  padding: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(255, 0, 0, 1);
  }
`;

export default AddProduct;
