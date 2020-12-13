import Icon from '../App/Icon';

export default function Technology({ name, description, iconType }) {
  return (
    <div className="technology">
      {
        iconType ? <div className="icon-container">
          <Icon type={iconType} className="icon" />
        </div> : null
      }
      <div className="info-container">
        <h4 className="heading">{name}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}