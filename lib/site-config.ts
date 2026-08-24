// Edit these values to personalize the whole site — every page reads from here.
export const siteConfig = {
  name: "MX Sushi Bar",
  fullName: "MX Sushi Bar",
  tagline: "Fresh rolls, hand-pressed nigiri, and sashimi — right in Parkdale Mall.",
  phone: "(409) 223-1303",
  phoneRaw: "4092231303",
  address: {
    line1: "6155 Eastex Fwy #660",
    line2: "Beaumont, TX 77706 · Parkdale Mall Food Court",
  },
  hours: [
    { day: "Monday – Saturday", time: "11:00 AM – 7:30 PM" },
    { day: "Sunday", time: "12:00 PM – 5:30 PM" },
  ],
  // Order flow: no accounts, no payments handled on this site.
  order: {
    deliveryUrl:
      "https://www.doordash.com/store/mx-sushi-bar-beaumont-1450486/1974705/",
    pickupTel: "tel:4092231303",
  },
};
