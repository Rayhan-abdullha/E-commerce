// components/product/AddToCartModal.tsx
type PropsType = {
  isOpen: boolean;
    onClose: () => void;
    product: {
        name: string;
        image: string;
    }
}
export default function AddToCartModal({ isOpen, onClose, product }: PropsType) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl animate-in slide-in-from-bottom">
        <div className="flex items-center gap-4 mb-6">
          <img src={product.image} className="w-16 h-16 rounded-lg object-cover" />
          <div>
            <h3 className="font-bold">Added to Bag</h3>
            <p className="text-gray-500 text-sm">{product.name}</p>
          </div>
        </div>
        <div className="space-y-3">
          <button onClick={() => location.href = '/checkout'} className="w-full bg-black text-white py-4 rounded-xl font-semibold">
            Go to Checkout
          </button>
          <button onClick={() => location.href = '/'} className="w-full bg-gray-100 text-black py-4 rounded-xl font-semibold">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}