import PopupBase from "@/components/PopupBase";

export default function Cart() {
  return (
    <PopupBase className=" w-80 bg-white shadow-xl rounded-lg p-4 z-50">
      <h3 className="font-semibold mb-2">Cart</h3>
      <p>Your cart is empty</p>
    </PopupBase>
  );
}