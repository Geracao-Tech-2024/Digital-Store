import  { useState } from 'react';
import styled from 'styled-components';

const colors = {
    primary: '#C92071',
    secondary: '#B5B6F2',
    tertiary: '#991956',
    error: '#EE4266',
    success: '#52CA76',
    warning: '#F6AA1C',
    darkGray: '#1F1F1F',
    darkGray2: '#474747',
    darkGray3: '#666666',
    lightGray: '#8F8F8F',
    lightGray2: '#CCCCCC',
    lightGray3: '#F5F5F5',
    white: '#FFFFFF'
};

const Container = styled.div`
    width: 50%;
    padding: 2rem 1rem;
`;

const ByText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        font-size: 2rem;
    }

    p {
        font-size: 0.6rem;
    }
`;

const Avaliacao = styled.div`
    display: flex;
    gap: 1rem;

    .img {
        /* Estilos para .img dentro de .avaliacao */
    }

    .notas {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;

        span {
            background: ${colors.warning};
            padding: 0.1rem 0.3rem;
            border-radius: 4px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
        }

        p {
            color: ${colors.lightGray};
            font-size: 0.6rem;
        }
    }
`;

const Preco = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    p:nth-last-child(2) {
        font-size: 2rem;
        display: flex;
        align-items: center;
    }

    p span {
        font-size: 1rem;
    }

    p:nth-child(2n) {
        font-size: 0.8rem;
        text-decoration: line-through;
        color: ${colors.lightGray};
    }
`;

const Descr = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
        color: ${colors.darkGray3};
    }

    p {
        width: 90%;
        font-size: 0.7rem;
        line-height: 1rem;
    }
`;

const Tamanho = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`;

const Tamanhos = styled.div`
    display: flex;
    gap: 0.4rem;

    button {
        border: 1px solid ${colors.darkGray};
        padding: 0.3rem;
        font-weight: bold;
        cursor: pointer;
        border-radius: 4px;
        transition: 0.4s ease-in-out;
    }

    button:hover {
        background-color: ${colors.primary};
        color: ${colors.lightGray3};
    }

    .active {
      background-color: ${colors.primary};
      color: ${colors.lightGray3
    };
}
`;



const Cor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`;

const Cores = styled.div`
    display: flex;
    gap: 0.9rem;
`;

const ColorButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    outline: none;
    transition: 0.4s ease-in-out;
    /* color: transparent; */
    background: ${props => {
        switch (props.id) {
            case 'azul':
                return 'lightskyblue';
            case 'rosa':
                return colors.error;
            case 'black':
                return colors.darkGray;
            case 'roxa':
                return colors.secondary;
            default:
                return 'transparent';
        }
    }};

    
    border: ${props => props.isSelected ? `2px solid ${colors.primary}` : '2px solid transparent'};
    transform: ${props => props.isSelected ? 'scale(1.3)' : 'scale(1)'};

    &:hover {
        transform: scale(1.3);
        border: 2px solid ${colors.primary};
    }
`;

const Button = styled.button`
    width: 220px;
    height: 3rem;
    border-radius: 9px;
    border: none;
    outline: none;
    background: ${colors.warning};
    color: ${colors.lightGray3};
    cursor: pointer;
    font-size: 1rem;
`;

const BuyBox = (props) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };


    return (
        <Container>
            <ByText>
                <div className="by-text">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <Avaliacao>
                    <div className="img">
                        {/* Renderizar as estrelas */}
                    </div>
                    <div className="notas">
                        <span>{props.rating} <img src="Star-white.svg" alt="" /></span>
                        <p>({props.reviewsCount} avaliações)</p>
                    </div>
                </Avaliacao>
                <Preco>
                    <p><span>R$</span> {props.discountPrice}</p>
                    <p>R${props.price}</p>
                </Preco>
                <Descr>
                    <span>Descrição do produto</span>
                    <p>{props.productDescription}</p>
                </Descr>
                <Tamanho>
                  <span>Tamanho</span>
                  <Tamanhos>
                    {props.sizes.map((size, index) => (
                      <Tamanho key={index}>
                        <button
                          style={{
                            cursor: 'pointer',
                          }}
                          onClick={() => handleSizeClick(size)}
                          className={selectedSize === size ? 'active' : ''}
                        >
                          {size}
                        </button>
                      </Tamanho>
                    ))}
                  </Tamanhos>
                </Tamanho>
                <Cor>
                    <span>Cores</span>
                    <Cores>
                        {props.colors.map((color, index) => (
                            <ColorButton
                                key={index}
                                id={color}
                                isSelected={selectedColor === color}
                                onClick={() => handleColorClick(color)}
                            >
                                {/* Aqui você pode adicionar conteúdo ou ícone para a cor */}
                              
                            </ColorButton>
                        ))}
                    </Cores>
                </Cor>
                <div className="by-btn">
                    <Button>COMPRAR</Button>
                </div>
            </ByText>
        </Container>
    );
};

export default BuyBox;
