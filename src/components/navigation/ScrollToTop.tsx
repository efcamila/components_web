import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, [pathname]); // Se ejecuta cada vez que la ruta cambia

  return null; // No renderiza nada
};

export default ScrollToTop;