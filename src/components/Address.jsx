const Address = ({name, phone, address}) => {
    return(
      <div>
        <h2>{name}</h2>
        <p>
          T: {phone}<br/>
          A: {address}
        </p>
      </div>
    )
  }

  export default Address