const DriverOrderDetails = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
  
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <p className="text-gray-600">Driver: {user.name}</p>
        <p className="mt-4">This page would show details of a delivery assigned to the driver.</p>
      </div>
    );
  };
  
  export default DriverOrderDetails;
  