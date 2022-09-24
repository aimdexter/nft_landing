import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const earning = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(52,209,120)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export const spending = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const ChartCrypto = () => {
  return (
    <>
      <div className="flex justify-around">
        <div className="w-[110px]">
          <Line options={options} data={earning} />
        </div>
        <div className="w-[110px]">
          <Line options={options} data={spending} />
        </div>
      </div>
    </>
  );
};

export default ChartCrypto;
