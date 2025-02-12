import Card from "./card";

export default interface AvailableBet {
    name: string;
    description: string;
    payout: [ number, number ];
    validator: (bankerHand: Card[], playerHand: Card[]) => boolean;
}