import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Content = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8), // Отступ сверху для текста
  '@media (max-width: 600px)': { // Для мобильных устройств
    marginTop: theme.spacing(0.4), // Уменьшенный отступ сверху
    fontSize: '4vw', // Увеличенный размер текста
  },
}));

const CustomTabs = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 'one':
        return (
          <div className="page__custom-text">
            {'Вы всегда получите полную информацию об функции: подробное описание, бренд,'}
            <br />
            {'магазины и торговые центры где проходит акция.'}
            <br /><br />
            {'Также доступна возможность сразу перейти на сайт товара и купить в рамках'}
            <br />
            {'действующей акции'}
          </div>
        );
      case 'two':
        return <div className="page__custom-text">{'Содержимое для ПОДПИСКИ'}</div>
      case 'three':
        return <div className="page__custom-text">{'Содержимое для КАРТЫ'}</div>
      case 'four':
        return <div className="page__custom-text">{'Содержимое для МОЕЙ ЛЕНТЫ'}</div>
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '68vw' }}>
     <Tabs
      value={value}
      onChange={handleChange}
      textColor="inherit"
      aria-label="secondary tabs example"
      sx={{
        '& .MuiTabs-indicator': { 
          backgroundColor: 'white',  // Белая линия подчеркивания
          transform: 'translateY(-1px)',
          height: '0.1vw',
        },
        width: '100vw', // Таб адаптируется по ширине контейнера
        '@media (max-width: 0.1)': {
          flexDirection: 'column', // Меняем направление на вертикальное для узких экранов
        },
      }}
    >
      <Tab 
        value="one" 
        label="ПРОФИЛЬ АКЦИИ" 
        sx={{
          fontSize: '1.8vw', 
          minWidth: '17vw',  // Увеличение минимальной ширины
          padding: 0,
          fontFamily: 'FuturaDemic',
          marginRight: '2vw', 
          opacity: value === 'one' ? 1 : 0.5, // Полупрозрачность для невыбранных вкладок
          '@media (max-width: 0.1)': { fontSize: '2.5vw' } // Изменение размера текста на мобильных устройствах
        }}
      />
      <Tab 
        value="two" 
        label="ПОДПИСКИ" 
        sx={{
          fontSize: '1.8vw', 
          minWidth: '10vw', 
          marginRight: '2vw', 
          fontFamily: 'FuturaDemic',
          opacity: value === 'two' ? 1 : 0.5, // Полупрозрачность для невыбранных вкладок
          '@media (max-width: 0.1)': { fontSize: '2.5vw' } // Адаптация для мобильных
        }}
      />
      <Tab 
        value="three" 
        label="КАРТА" 
        sx={{
          fontSize: '1.8vw', 
          minWidth: '6vw', 
          fontFamily: 'FuturaDemic',
          opacity: value === 'three' ? 1 : 0.5, // Полупрозрачность для невыбранных вкладок
          '@media (max-width: 0.1)': { fontSize: '2.5vw' } // Адаптация для мобильных
        }}
      />
      <Tab 
        value="four" 
        label="МОЯ ЛЕНТА" 
        sx={{
          fontSize: '1.8vw', 
          minWidth: '11vw', 
          fontFamily: 'FuturaDemic',
          marginLeft: '2vw', 
          opacity: value === 'four' ? 1 : 0.5, // Полупрозрачность для невыбранных вкладок
          '@media (max-width: 0.1)': { fontSize: '2.5vw' } // Адаптация для мобильных
        }}
      />
    </Tabs>

      {/* Отображение текста в зависимости от выбранного таба */}
      <Content>
        {renderContent()}
      </Content>
    </Box>
  );
};

export default CustomTabs;