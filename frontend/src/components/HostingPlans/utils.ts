import { HostingPlan } from "../../constants/hosting-plans";

export function computeSavePercentYearPlan(plan: HostingPlan<string>) {
    const withoutDiscount = plan.monthlyPricing * 12;

    return (((withoutDiscount - plan.yearlyPricing) * 100 / withoutDiscount)).toFixed()
}

export function computeSavePercentTwoYearPlan(plan: HostingPlan<string>) {
    const withoutDiscount = plan.monthlyPricing * 24;

    return (((withoutDiscount - plan.twoYearsPricing) * 100 / withoutDiscount)).toFixed()
}

export function convertYearlyToMonthly(plan: HostingPlan<string>) {
    return (plan.yearlyPricing / 12).toFixed(1)
}

export function convertTwoYearlyToMonthly(plan: HostingPlan<string>) {
    return (plan.twoYearsPricing / 24).toFixed(1)
}