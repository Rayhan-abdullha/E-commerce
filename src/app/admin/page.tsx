"use client";
const STATS = {
  dailyOrders: 12,
  monthlyOrders: 342,
  totalRevenue: 12450.00,
  activeUsers: 84,
};

const DAILY_TREND = [
  { date: 'Feb 20', count: 8 },
  { date: 'Feb 21', count: 15 },
  { date: 'Feb 22', count: 12 },
  { date: 'Feb 23', count: 10 },
  { date: 'Feb 24', count: 18 },
];

export default function AdminPortal() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6 md:p-12 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Daily Orders', val: STATS.dailyOrders, trend: '+20%' },
            { label: 'Monthly Orders', val: STATS.monthlyOrders, trend: '+5%' },
            { label: 'Monthly Revenue', val: `$${STATS.totalRevenue.toLocaleString()}`, trend: '+12%' },
            { label: 'Active Sessions', val: STATS.activeUsers, trend: 'Live' },
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:shadow-xl hover:shadow-black/5 transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">{s.label}</p>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-bold tracking-tighter">{s.val}</h3>
                <span className={`text-[9px] font-black px-2 py-1 rounded-md ${s.trend.includes('+') ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                  {s.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Daily Trend Chart (Visual Representation) */}
          <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h4 className="text-[10px] font-black uppercase tracking-widest">Order Frequency (Last 5 Days)</h4>
              <span className="text-gray-300 text-[10px]">February 2026</span>
            </div>
            
            <div className="flex items-end justify-between h-48 gap-4">
              {DAILY_TREND.map((day, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <div 
                    className="w-full bg-gray-50 group-hover:bg-black transition-all rounded-t-xl relative"
                    style={{ height: `${(day.count / 20) * 100}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {day.count}
                    </span>
                  </div>
                  <p className="text-[9px] font-black text-gray-400 uppercase mt-4 tracking-tighter">{day.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-8">Revenue Breakdown</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs mb-2 font-bold">
                  <span>Product Sales</span>
                  <span>82%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-white w-[82%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2 font-bold">
                  <span>Shipping Fees</span>
                  <span>12%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-white w-[12%]" />
                </div>
              </div>
              <p className="text-[10px] text-gray-500 italic mt-12 leading-relaxed">
                Total Gross Revenue is calculated based on completed bKash transactions and verified card payments.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}