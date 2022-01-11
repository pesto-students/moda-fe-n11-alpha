import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
function useHomeDataHook() {
  const [show, setShow] = useState(true);
  const SaleAndOffer = useSelector((state) => state?.home?.SaleAndOffer);
  console.log('the Sale and offer are as follows', SaleAndOffer);
  useEffect(() => {
    if (!SaleAndOffer || SaleAndOffer?.length === 0) {
      setShow(false);
    }
    return () => {
      setShow(true);
    };
  }, [SaleAndOffer]);

  return [show];
}

export default useHomeDataHook;
