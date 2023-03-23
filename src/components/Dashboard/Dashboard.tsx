import { Button } from '@chakra-ui/react';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  return (
    <>
      <p>This is the Dashboard</p>
      <Button onClick={() => console.log('Clicked')}>Click Here</Button>
    </>
  );
};

export default Dashboard;
