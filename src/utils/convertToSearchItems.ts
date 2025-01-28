import { Bank } from "../components/FormComponents/Interfaces/Bank";
import { SearchItem } from "../components/FormComponents/Interfaces/SearchItem";




export const ConvertToSearchItemsForSearchInput = (bankData: Bank[]): SearchItem[] => {
    return bankData.map((bank) => ({
        name: bank.NAME + " - " + bank.CHARTER_NO,
    }));
};