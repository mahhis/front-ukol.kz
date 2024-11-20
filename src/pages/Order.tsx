import {
  Box,
  Button,
  Divider,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import MapComponent from '../components/Map';
import LoginModal from '../components/LoginModal';
import { serviceOptionsMap } from '../components/order-options/allOptionsMap';
import ArrivalTime from '../components/ArrivalTime';
import SuccesOrderModal from '../components/SuccesOrderModal';
import MapFooter from '../components/MapFooter';
import { useLocation } from 'wouter-preact';
import ServiceCardsList from 'components/ServiceCardsList';

export default function Order() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [, navigate] = useLocation();

  const getOptions = () => {
    const options = currentOrder.title ? serviceOptionsMap[currentOrder.title as keyof typeof serviceOptionsMap] : [];
    
    return (
      <Box>
        {options.map(({ component: Component, /* props*/ }, index:number) => (
          <Component key={index} />
        ))}
      </Box>
    );
  };
  
  return (
    <Box sx={{ mt: '5%', backgroundColor: 'transparent' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography
          sx={{
            ml: 2,
            fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem' },
            fontWeight: '1500',
            textAlign: 'center',
          }}
        >
          Обратите внимание! Препараты, материалы и другие расходники не входят в стоимость услуг
        </Typography>
        <Button
        variant="contained"
        onClick={() => navigate('/')} 
         sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          margin: 2,

        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },  padding:1, }}>
          назад
        </Typography>
      </Button>
      </Box>  
          <MapComponent />
          <ServiceCardsList/>
          <Divider /> 
          {getOptions()}   
          <Divider /> 
          <ArrivalTime/> 
          <MapFooter/>
       
       <LoginModal />
       <SuccesOrderModal />

    </Box>
  );
}
