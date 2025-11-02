import '/src/styles/Pricing.css';
import '/src/styles/Buttons.css';

function Pricing() {
    const plans = [
        { name: "Students", price: "$29", length: "per month", description: "Personal License" },
        { name: "professional", price: "$59", length: "per month", description: "Professional License Email Support" },
        { name: "agency", price: "$99", length: "per month", description: "1-12 Team Members Phone Support" },
        { name: "enterprise", price: "$159", length: "per month", description: "Unlimited Team Members 24/ 7 Phone Support" },
    ];

    return(
        <div className="pricing-section">
            <h1 className="pricing-title">Fork Subscription Pricing</h1>
            <div className="plan-cards">
                {plans.map((plan, index) => (
                    <div key={index} className="plan-card">
                        <div className="plan-header"></div>
                        <p className="plan-name">{plan.name}</p>
                        <p className="plan-price">{plan.price}</p>
                        <p className="plan-length">{plan.length}</p>
                        <div className="plan-divider"></div>
                        <p className="plan-description">{plan.description}</p>
                        <div className="purchase-button-background"></div>
                        <button className="button-opacity">Purchase</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;