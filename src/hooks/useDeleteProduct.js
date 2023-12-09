import { useState, useEffect } from "react";
import { deleteProduct } from "../services/apiRestaurant";

const useDeleteProduct = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteProduct = async () => {
    try {
      setLoading(true);
      const res = await deleteProduct(id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    // Implement any logic you need when id changes
    // For example, you might want to refetch data or reset the error state
  }, [id]);

  return { handleDeleteProduct, loading, error };
};

export default useDeleteProduct;
