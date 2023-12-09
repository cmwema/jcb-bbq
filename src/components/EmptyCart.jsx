import {LinkButton} from '../ui';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 text-sm">
        Your cart is still empty. Start adding some Items :)
      </p>
    </div>
  );
}

export default EmptyCart;
