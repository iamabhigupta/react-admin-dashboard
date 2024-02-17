import { Typography } from 'antd';
import { useAuthStore } from '../store';

const HomePage = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <Typography.Title level={5}>
        Welcome, {user?.firstName} 😀
      </Typography.Title>
    </div>
  );
};

export default HomePage;
