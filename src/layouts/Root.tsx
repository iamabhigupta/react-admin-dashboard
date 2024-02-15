import { Outlet } from 'react-router-dom';
import { self } from '../http/api';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store';
import { useEffect } from 'react';

const getUser = async () => {
  const { data } = await self();
  return data;
};

const Root = () => {
  const { setUser } = useAuthStore();
  const { data, isLoading } = useQuery({
    queryKey: ['self'],
    queryFn: getUser,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  //   setUser()

  if (isLoading) return 'Loading...';

  return <Outlet />;
};

export default Root;
