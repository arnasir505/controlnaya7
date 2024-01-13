const EmptyOrder = () => {
  return (
    <div className='text-danger fw-bold'>
      <span>Order is empty!</span>
      <br />
      <span>Please add items.</span>
    </div>
  );
};

export default EmptyOrder;
