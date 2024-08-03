import PricingBasicCard from './PricingBasicCard';
import PricingStandardCard from './PricingStandardCard';
import PricingPremiumCard from './PricingPremiumCard';

const PricingGrids = () => {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-slate-800">

        {/* Inner Container */}
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
            <PricingBasicCard />
            <PricingStandardCard />
            <PricingPremiumCard />
        </div>
    </div>
  )
}

export default PricingGrids