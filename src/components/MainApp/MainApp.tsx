import React from "react";
import Sidebar from "../Sidebar/SidebarAlter";
import BusinessForm from "../Mozart/BusinessForm/BusinessForm";
import { businessSchema } from "../Mozart/BusinessForm/businessSchema";
import BankingForm from "../Mozart/BankingForm/BankingForm";
import { bankingSchema } from "../Mozart/BankingForm/bankingShema";
import ContactForm from "../Mozart/ContactForm/ContactForm";
import contactSchema from "../Mozart/ContactForm/contactSchema";
import OwnerDetailsForm from "../Mozart/OwnerDetailsForm/OwnerDetailForm";
import { ownerDetailsSchema } from "../Mozart/OwnerDetailsForm/ownerDetailsSchema";
import BusinessProfileForm from "../Mozart/BusinessProfileForm/BusinessProfileForm";
import { businessProfileSchema } from "../Mozart/BusinessProfileForm/businessProfileSchema";
import BusinessFinancialsForm from "../Mozart/BusinessFinancialsForm/BusinessFinancialsForm";
import { businessFinancialsSchema } from "../Mozart/BusinessFinancialsForm/businessFinancialsSchema";
import SendConfirm from "../Mozart/SendConfirm/SendConfirm";

const MainApp: React.FC = () => {
  return (
    <Sidebar>
      <BusinessForm
        title="Business Information"
        description="Enter the business information for your company."
        validationSchema={businessSchema}
      />
      <BankingForm
        title="Banking Information"
        description="Enter the Bank Information."
        validationSchema={bankingSchema}
      />
      <ContactForm
        title="Contact Information"
        description="Enter the Contact Information."
        validationSchema={contactSchema}
      />
      <OwnerDetailsForm
        title="Owner Details"
        description="Enter the Owner Details."
        validationSchema={ownerDetailsSchema}
      />
      <BusinessProfileForm
        title="Business Profile"
        description="Enter the Business Profile."
        validationSchema={businessProfileSchema}
      />
      <BusinessFinancialsForm
        title="Business Financials"
        description="Enter the Business Financials."
        validationSchema={businessFinancialsSchema}
      />
      <SendConfirm
        title="Confirmation and Validation"
        description="Confirm your information and validate your identity."
      />
    </Sidebar>
  );
};

export default MainApp;
