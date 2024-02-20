import Address from './Address'

const AddressWrapper = ({ addresses }) => {
    return(
      <div>
        {addresses.map(item => <Address key={item.id} name={item.name} phone={item.phone} address={item.address}/>)}
      </div>
    )
  }

export default AddressWrapper