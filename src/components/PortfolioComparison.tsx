'use client';

interface AssetClass {
  name: string;
  isHighlighted: boolean;
  highCashYield: boolean | null;
  lowVolatility: boolean | null;
  equityBuildUp: boolean | null;
  leverage: boolean | null;
  hardAsset: boolean | null;
  inflationHedge: boolean | null;
  taxAdvantage: boolean | null;
  averageReturn: number;
}

const assetClasses: AssetClass[] = [
  {
    name: 'Luxos Capital',
    isHighlighted: true,
    highCashYield: true,
    lowVolatility: true,
    equityBuildUp: true,
    leverage: true,
    hardAsset: true,
    inflationHedge: true,
    taxAdvantage: true,
    averageReturn: 22.0,
  },
  {
    name: 'Stocks',
    isHighlighted: false,
    highCashYield: null,
    lowVolatility: false,
    equityBuildUp: false,
    leverage: false,
    hardAsset: false,
    inflationHedge: false,
    taxAdvantage: false,
    averageReturn: 12.0,
  },
  {
    name: 'Commercial',
    isHighlighted: false,
    highCashYield: true,
    lowVolatility: true,
    equityBuildUp: true,
    leverage: true,
    hardAsset: true,
    inflationHedge: true,
    taxAdvantage: true,
    averageReturn: 8.0,
  },
  {
    name: 'Bonds',
    isHighlighted: false,
    highCashYield: false,
    lowVolatility: false,
    equityBuildUp: false,
    leverage: false,
    hardAsset: true,
    inflationHedge: false,
    taxAdvantage: false,
    averageReturn: 6.4,
  },
  {
    name: 'Gold',
    isHighlighted: false,
    highCashYield: false,
    lowVolatility: false,
    equityBuildUp: false,
    leverage: false,
    hardAsset: true,
    inflationHedge: true,
    taxAdvantage: false,
    averageReturn: 6.5,
  },
  {
    name: 'CDs',
    isHighlighted: false,
    highCashYield: false,
    lowVolatility: false,
    equityBuildUp: false,
    leverage: false,
    hardAsset: false,
    inflationHedge: false,
    taxAdvantage: false,
    averageReturn: 2.6,
  },
];

const attributes = [
  { key: 'highCashYield', label: 'High Cash Yield' },
  { key: 'lowVolatility', label: 'Low Volatility' },
  { key: 'equityBuildUp', label: 'Equity Build Up' },
  { key: 'leverage', label: 'Leverage' },
  { key: 'hardAsset', label: 'Hard Asset' },
  { key: 'inflationHedge', label: 'Inflation Hedge' },
  { key: 'taxAdvantage', label: 'Tax Advantage' },
];

interface DonutChartProps {
  segments: { percentage: number; color: string; label: string }[];
  title: string;
  returnRate: string;
  isEnhanced?: boolean;
}

function DonutChart({ segments, title, returnRate, isEnhanced }: DonutChartProps) {
  const size = 160;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  const createArcPath = (startAngle: number, endAngle: number) => {
    const start = {
      x: center + radius * Math.cos((startAngle * Math.PI) / 180),
      y: center + radius * Math.sin((startAngle * Math.PI) / 180),
    };
    const end = {
      x: center + radius * Math.cos((endAngle * Math.PI) / 180),
      y: center + radius * Math.sin((endAngle * Math.PI) / 180),
    };
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
  };

  let currentAngle = -90;

  return (
    <div className={`p-8 ${isEnhanced ? 'bg-[#c9a961]' : 'bg-white/5 border border-white/10'}`}>
      <div className="flex items-center gap-8">
        <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
          <svg width={size} height={size}>
            {segments.map((segment, index) => {
              const angle = (segment.percentage / 100) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              currentAngle = endAngle;
              
              return (
                <path
                  key={index}
                  d={createArcPath(startAngle, endAngle)}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={strokeWidth}
                />
              );
            })}
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-light ${isEnhanced ? 'text-white' : 'text-white'}`}>
              {returnRate}
            </span>
          </div>
        </div>
        
        <div className="flex-1">
          <h4 className={`text-lg font-semibold mb-1 ${isEnhanced ? 'text-white' : 'text-white'}`}>
            {title}
          </h4>
          <p className={`text-sm mb-4 ${isEnhanced ? 'text-white/70' : 'text-white/50'}`}>
            Average annual returns
          </p>
          <div className="space-y-2">
            {segments.map((segment, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 flex-shrink-0" 
                  style={{ backgroundColor: segment.color }}
                />
                <span className={`text-sm ${isEnhanced ? 'text-white/90' : 'text-white/70'}`}>
                  {segment.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioComparison() {
  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="w-12 h-px bg-[#c9a961] mb-8" />
          <h2 className="text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6">
            Portfolio <span className="font-semibold italic">Diversification</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Real estate is one of the few asset classes that combines cash flow, appreciation, 
            tax advantages, and protection against inflation. Adding real estate to a traditional 
            portfolio can improve long-term performance while reducing overall risk.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-6 text-left">
                    <span className="text-white/40 text-xs uppercase tracking-[0.2em]">Asset Class</span>
                  </th>
                  {assetClasses.map((asset, index) => (
                    <th key={index} className="py-6 text-center px-4">
                      <span className={`text-sm font-medium ${asset.isHighlighted ? 'text-[#c9a961]' : 'text-white/70'}`}>
                        {asset.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attributes.map((attr) => (
                  <tr key={attr.key} className="border-b border-white/10">
                    <td className="py-5 text-white/70 text-sm">{attr.label}</td>
                    {assetClasses.map((asset, assetIndex) => {
                      const value = asset[attr.key as keyof AssetClass];
                      return (
                        <td key={assetIndex} className="py-5 text-center px-4">
                          {value === true ? (
                            <span className={`text-lg ${asset.isHighlighted ? 'text-[#c9a961]' : 'text-white/60'}`}>●</span>
                          ) : value === false ? (
                            <span className="text-white/20">—</span>
                          ) : (
                            <span className="text-white/20">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                {/* Returns Row */}
                <tr className="border-t-2 border-white/20">
                  <td className="py-6 text-white font-medium text-sm">Average Annual Return*</td>
                  {assetClasses.map((asset, index) => (
                    <td key={index} className="py-6 text-center px-4">
                      <span className={`text-xl font-light ${asset.isHighlighted ? 'text-[#c9a961]' : 'text-white'}`}>
                        {asset.averageReturn.toFixed(1)}%
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Portfolio Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <DonutChart
            title="Traditional Portfolio"
            returnRate="9.8%"
            segments={[
              { percentage: 60, color: '#3b82f6', label: '60% Stocks' },
              { percentage: 40, color: '#94a3b8', label: '40% Bonds' },
            ]}
          />
          <DonutChart
            title="With Real Estate"
            returnRate="16.7%"
            isEnhanced
            segments={[
              { percentage: 40, color: '#1e3a5f', label: '40% Stocks' },
              { percentage: 20, color: '#64748b', label: '20% Bonds' },
              { percentage: 40, color: '#ffffff', label: '40% Real Estate' },
            ]}
          />
        </div>

        {/* Disclaimer */}
        <p className="text-white/30 text-xs mt-12 max-w-4xl leading-relaxed">
          *Data according to NCREIF, Bloomberg, Bankrate, NYU Stern School of Business, Federal Reserve Bank of St. Louis, 
          and Luxos Capital calculations. All calculations assume reinvestment of dividends. Past performance is not indicative of future results.
        </p>
      </div>
    </section>
  );
}
