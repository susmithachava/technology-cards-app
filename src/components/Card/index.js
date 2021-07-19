// Write your code here.
import './index.css'

const Card = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard
  return (
    <div className={`${className} card-container`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="thumbnail" alt="4.0 technologies" />
      </div>
    </div>
  )
}

export default Card
