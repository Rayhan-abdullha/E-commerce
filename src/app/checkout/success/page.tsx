export default function SuccessPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-4xl mb-8 animate-bounce">
        ✓
      </div>
      <h1 className="text-4xl font-black italic tracking-tighter mb-4">Object Secured.</h1>
      <p className="text-gray-400 max-w-xs mx-auto mb-10 text-sm">Your order is being prepared. A confirmation email has been sent to your inbox.</p>
      
      <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] w-full max-w-sm mb-10">
        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
          <span>Transaction ID</span>
          <span className="text-black italic">BK220225_A82</span>
        </div>
        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
          <span>Amount Paid</span>
          <span className="text-black font-bold">$450.00</span>
        </div>
      </div>

      <a href="/" className="bg-black text-white px-12 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em]">
        Back to Gallery
      </a>
    </div>
  );
}