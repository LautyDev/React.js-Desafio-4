import React from "react"

const Item = (props) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              className="img-thumbnail"
              alt="item-img"
            />
          </div>
          <div className="">
            <h4>{props.name}</h4>
            <h5>{props.price}</h5>
            <p className="text-muted">{props.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item