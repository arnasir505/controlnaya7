const EmptyOrder = () => {
  return (
    <div className='text-danger fw-bold fs-5'>
      <span>Order is empty!</span>
      <br />
      <span>Please add items.</span>
    </div>
  );
};

export default EmptyOrder;
