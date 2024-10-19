import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../../../../slices/addProdutSlice";

const GoodsContent = ({ objkey, data, title, img }) => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.addProduct.selectedOption);
    const [selectedData, setSelectedData] = useState([])


    const handleSelect = (e) => {
        const value = e.target.value;
        setSelectedData(data[value].data)
    };

    const handleRadioChange = (e) => {
        dispatch(setSelectedOption({ ...selectedOption, [objkey]: e }))
    };


    return (
        <Container>
            <ContentHeader>
                <h6>{title}</h6>
                <div>
                    <CustomSelect>
                        <select name="" id="" defaultValue={"notChecked"} onChange={handleSelect}>
                            <option value="notChecked">Не выбрано</option>
                            {
                                Object.keys(data).map(key => (
                                    <option key={key} value={key}>
                                        {data[key].name}
                                    </option>
                                ))
                            }
                        </select>
                    </CustomSelect>

                    <img src={img} alt="image" />
                </div>
            </ContentHeader>

            <Content>
                {selectedOption[objkey]?.image ? (
                    <img src={selectedOption[objkey].image} alt="Image" />
                ) : (
                    <p>Фото</p>
                )}
                <div>
                    {selectedData ? (
                        selectedData.map((el) => {
                            return (
                                <RadiosWrap key={el.id}>


                                    <input
                                        type="radio"
                                        name="data"
                                        id={el.id}
                                        value={el.name}
                                        onChange={() => handleRadioChange(el)}
                                    />
                                    <label htmlFor={el.id}>
                                        {`${el.model ? el.model : ''} ${el.clockSpeed ? `${el.clockSpeed} МГц` : ''}`}
                                        <br />
                                        <span>
                                            {el.price ? `+${el.price} c` : null}
                                        </span>

                                    </label>
                                </RadiosWrap>
                            );
                        })
                    ) : (
                        <p>{`НЕ ВЫБРАНО`}</p>
                    )}</div>
            </Content>
        </Container>
    );
};

const Container = styled('div')({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
});

const ContentHeader = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: '30px',

    div: {
        display: "flex",
        gap: '30px'
    },

    h6: {
        fontFamily: 'Calibri,sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '32px',
        lineHeight: '40px',
        color: '#FFFFFF'
    },

    img: {
        width: '40px',
        height: '40px'
    }
});

const CustomSelect = styled('div')({
    position: 'relative',
    width: '256px',
    height: '40px',

    select: {
        width: '100%',
        height: '40px',
        outline: 'none',
        backgroundColor: '#151A22',
        padding: '10px 30px 10px 10px',
        appearance: 'none',
        border: '1px solid #3F4C5F',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '10.7188px',
        letterSpacing: '0.42px',
        textTransform: 'uppercase',
        color: '#49DCFF'
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        right: '10px',
        top: '50%',
        width: '11px',
        height: '7.97px',
        backgroundImage: 'url("/assets/image/Polygon8.png")',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        transform: 'translateY(-50%)',
    }
});

const RadiosWrap = styled('div')({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px dashed #56617C',
    padding: '11px 0px 12px',
    fontWeight: '400',
    fontSize: '14.5312px',
    lineHeight: '28px',
    color: '#C3CEE1',

    input: {
        width: '20px',
        height: '20px',
        outline: 'none',
        backgroundColor: '#151A22',
        borderRadius: '50%',
        appearance: 'none',
        border: '2px solid #3F4C5F',
        cursor: 'pointer',
        position: 'relative',

        '&:checked': {
            borderColor: "#49DCFF",
        },
        '&:checked::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '8px',
            height: '8px',
            backgroundColor: '#49DCFF',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
        }
    },

    span: {
        fontSize: '9.95312px',
        lineHeight: '19px',
        color: '#8490A4'
    }
});

const Content = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    gap: '10px',

    img: {
        width: '80px',
        objectFit: 'contain',
        flexShrink: 0,
    },
    p:{
        width: '80px',
        flexShrink: 0,
    },

    div: {
        flexGrow: 1,
        width: '100%',
    },
})

export default GoodsContent;
