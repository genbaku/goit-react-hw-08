import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
    (state) => state.contacts.items,
    (state) => state.filters.filter,
    (contacts, filters) => {
      if (!filters) return contacts;
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
      );
    }
  );