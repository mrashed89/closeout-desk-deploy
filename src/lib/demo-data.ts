export type FlagStatus = "open" | "dispute" | "ok";

export type FlagItem = {
  id: string;
  title: string;
  detail: string;
  amountLabel?: string;
  status: FlagStatus;
};

export type NightDemoState = {
  restaurant: string;
  location: string;
  closedAt: string;
  staffOutAt: string;
  owner: string;
  sales: {
    posDineIn: number;
    posTakeout: number;
    doorDash: number;
    uberEats: number;
    cardTips: number;
  };
  tipSplit: {
    fohPercent: number;
    kitchenPercent: number;
  };
  flags: FlagItem[];
  cash: {
    startingBank: number;
    expectedCashSales: number;
    /** null until owner counts — never invent a total */
    counted: number | null;
  };
  note: string;
  nightClosed: boolean;
  closedAtStamp: string | null;
};

/** Sample Shogun Sushi night — amounts in cents */
export const SHOGUN_NIGHT: NightDemoState = {
  restaurant: "Shogun Sushi",
  location: "Citrus Heights",
  closedAt: "9:02 PM",
  staffOutAt: "10:00 PM",
  owner: "Alex",
  sales: {
    posDineIn: 184250,
    posTakeout: 61200,
    doorDash: 94350,
    uberEats: 51800,
    cardTips: 28640,
  },
  tipSplit: {
    fohPercent: 60,
    kitchenPercent: 40,
  },
  flags: [
    {
      id: "fee-spike",
      title: "Card fee spike",
      detail:
        "Processor fees ran 3.41% tonight vs your 2.9% 14-day average. Worth a look before you close the books.",
      amountLabel: "+$18.40 vs avg",
      status: "open",
    },
    {
      id: "dd-clawback",
      title: "DoorDash clawback",
      detail:
        "DoorDash posted a -$24.50 adjustment on order #DD-4418 (missing item claim from yesterday).",
      amountLabel: "-$24.50",
      status: "open",
    },
    {
      id: "timing-gap",
      title: "Expected timing gap",
      detail:
        "Last kitchen ticket was 9:18 PM — 16 minutes after house close. No cash impact; logged for your pattern review.",
      status: "open",
    },
  ],
  cash: {
    startingBank: 20000,
    expectedCashSales: 41250,
    counted: null,
  },
  note: "",
  nightClosed: false,
  closedAtStamp: null,
};

export function computeGross(sales: NightDemoState["sales"]): number {
  return (
    sales.posDineIn +
    sales.posTakeout +
    sales.doorDash +
    sales.uberEats
  );
}

export function computeTipSplit(
  cardTips: number,
  fohPercent: number,
  kitchenPercent: number,
) {
  const foh = Math.round((cardTips * fohPercent) / 100);
  const kitchen = cardTips - foh;
  return { foh, kitchen, fohPercent, kitchenPercent };
}

export function expectedDrawer(startingBank: number, expectedCashSales: number) {
  return startingBank + expectedCashSales;
}

export type VarianceKind = "blank" | "match" | "short" | "over";

export function cashVariance(
  counted: number | null,
  expected: number,
): { kind: VarianceKind; amount: number } {
  if (counted === null) return { kind: "blank", amount: 0 };
  const amount = counted - expected;
  if (amount === 0) return { kind: "match", amount: 0 };
  if (amount < 0) return { kind: "short", amount };
  return { kind: "over", amount };
}
