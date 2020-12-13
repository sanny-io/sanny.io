import Technologies from './Technologies';
import { technologies as technologiesData } from '../../data';

export default function (props) {
  return (
    <Technologies {...technologiesData} {...props} />
  );
}