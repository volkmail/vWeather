import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${styles.button} ${props.clicked && styles.clicked}`}>
      {props.children}
    </button>
  );
};

export { Button };
