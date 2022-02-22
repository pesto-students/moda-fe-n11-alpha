import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCartForUser } from '../../redux/slices/CartSlice';
import { LogUserInStore } from '../../redux/slices/UserSlice';

function useSignInHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({
    email: '',
    password: '',
  });

  const [Error, setError] = useState({});

  const ValidateForm = () => {
    if (formData['email'] === '' || formData['password'] === '') {
      console.log(formData);
      setError((state) => {
        return {
          ...state,
          incompleteForm:
            'All Fields are mandatory.It seems you have some fields not filled',
        };
      });
    }
  };
  const HandleFormData = async (e) => {
    setError({});
    if (e.nativeEvent.submitter.name === 'guest_Login') {
      try {
        await dispatch(
          LogUserInStore({ email: 'guest@gmail.com', password: 'Welcome101@' })
        );
        toast.success('You are logged in successfully');
        navigate('/');
        dispatch(getCartForUser(formData['email']));
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      ValidateForm();
      if (Object.keys(Error).length === 0) {
        try {
          await dispatch(LogUserInStore(formData));
          toast.success('You are logged in successfully');
          navigate('/');
          dispatch(getCartForUser(formData['email']));
        } catch (e) {
          toast.error(e.message);
        }
      }
    }
  };

  return {
    formData,
    SetFormData,
    HandleFormData,
    Error,
  };
}

export default useSignInHook;
