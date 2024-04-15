import { FC } from 'react';
import styles from './App.module.scss';
import { Button } from './components/Button';
import { api } from 'src/api';

const App: FC<{ id?: number }> = (props) => {
  const { data, error, isLoading } = api.useGetCurrentWeatherQuery({
    city: 'Khabarovsk',
  });

  return (
    <div className={styles.home}>
      vWeather home page {props.id}
      <Button>Кнопка</Button>
    </div>
  );
};

export { App };
