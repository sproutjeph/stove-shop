import { IKits, IProduct } from "./types";
import counterTopKit from "@/assets/images/counter-top-kit.jpg";
import handheldKit from "@/assets/images/gest-service-kit-2.jpg";
import guestServiceKit from "@/assets/images/guest-service-kit.jpg";
import {
  TrophyIcon,
  GiftIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const kits: IKits[] = [
  {
    id: "starterKit-1",
    kitName: "Counter Top Kit",
    kitIcon: "ComputerDesktopIcon",
    active: true,
    kitImg: counterTopKit,
    kitMessage:
      "With STOVE your restaurant is always right at your fingertips,offering 24/7 access to our fully interactive management system no matter whereyou are",
  },
  {
    id: "starterKit-2",
    kitName: "Guest + Customer Kit",
    kitIcon: "DevicePhoneMobileIcon",
    active: false,
    kitImg: handheldKit,
    kitMessage:
      "Ensuring your guests a seamless and timely dining experience each and every time can be a challenge, but with STOVE you get endless options to tackle even the toughest of guests.",
  },
  {
    id: "starterKit-3",
    kitName: "Guest Self-Service Kit",
    kitIcon: "GiftIcon",
    active: false,
    kitImg: guestServiceKit,
    kitMessage:
      "STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. ",
  },
  {
    id: "starterKit-4",
    kitName: "Counter Only Kit",
    kitIcon: "TrophyIcon",
    active: false,
    kitImg: guestServiceKit,
    kitMessage:
      "STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. ",
  },
  {
    id: "starterKit-5",
    kitName: "Table Kit",
    kitIcon: "UserGroupIcon",
    active: false,
    kitImg: guestServiceKit,
    kitMessage:
      "STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. ",
  },
];

export const products: IProduct[] = [
  {
    id: "153bd7ae-f099-737a-8963-623df0109300",
    name: "T2s Single Display",
    description: "",
    part_number: "T2sL1D",
    type: "Good",
    cost: "35",
    cost_usdollar: "35",
    currency_id: "-99",
    price: "70",
    price_usdollar: "70",
    product_image:
      "https://crm.stovepos.com/upload/939A59EC-A123-5B68-41E8-C2B556B775F3_ts2-single.jpg",
    amount: 0,
    category: "product",
    includedInPlane: true,
  },
  {
    id: "ba562ff2-4ac6-8b95-4ff9-6282df23c9eb",
    name: "Cash Drawer",
    description: "",
    part_number: "cdm3",
    category: "product",
    type: "Good",
    cost: "89",
    cost_usdollar: "89",
    currency_id: "-99",
    price: "129",
    price_usdollar: "129",
    product_image: "",
    amount: 0,
    includedInPlane: true,
  },
  {
    id: "b826201a-794b-1a9f-dd49-623c6af22132",
    name: "S300 Payment Terminal/Reader",
    description: "",
    part_number: "PAXS300",
    category: "product",
    type: "Good",
    cost: "149",
    cost_usdollar: "149",
    currency_id: "-99",
    price: "199",
    price_usdollar: "199",
    product_image: "",
    amount: 0,
    includedInPlane: true,
  },
  {
    id: "c447f001-b70a-58b7-eab4-6352b046c984",
    name: "UI 5 Port Switch",
    description: "",
    part_number: "UNI5GMINI",
    category: "product",
    type: "Good",
    cost: "40",
    cost_usdollar: "40",
    currency_id: "-99",
    price: "60",
    price_usdollar: "60",
    product_image: "",
    amount: 0,
    includedInPlane: false,
  },

  {
    id: "42961038-cd02-2874-dfdc-623c6b7bdecd",
    name: "STOVE Handheld Mini",
    description: "P07070008",
    part_number: "p2Mini",
    type: "Good",
    cost: "149",
    cost_usdollar: "149",
    currency_id: "-99",
    price: "249",
    price_usdollar: "249",
    product_image:
      "https://crm.stovepos.com/upload/79C7480E-E59C-6E82-AF8A-5BF99D0F2D13_p9-1.png",
    amount: 0,
    category: "product",
    includedInPlane: false,
  },
  {
    id: "5ea1841b-2658-5f88-bffc-623c6a8e28c2",
    name: "Epson Thermal Printer TM88VII GREY",
    description:
      "OmniLink TM-T88VII Connect-it Interface Thermal Printer, USB + Ethernet + Wireless, Black 4 year limited warranty; extended warranty available Included in box = Epson TM-T88VII Printer, Thermal Roll Paper (starter roll for testing), Power Switch Cover, Connector Cover, Bottom Cover for Connector Cover, Roll Paper Guide, Screws, Setup Guide, AC Adapter w/ AC Cord, CD (drivers, utilities and documentations)",
    part_number: "TM88VII",
    type: "Good",
    cost: "399",
    cost_usdollar: "399",
    currency_id: "-99",
    price: "499",
    price_usdollar: "499",
    product_image:
      "https://crm.stovepos.com/upload/9E014B99-3238-EF30-F9E4-E430D3AA9E35_epson-tmt88viiblack.jpg",
    amount: 0,
    category: "product",
    includedInPlane: false,
  },

  {
    id: "6f2e97e7-e487-03a7-2f28-62bde1e82090",
    name: "Epson Thermal Printer TM-M30II-h",
    description:
      'M30II - sleek 3" thermal receipt printer; compact footprint; Wireless (NES), includes USB and ethernet; Black. Includes power supply, power switch cover, roll paper, set up guide, 58 mm roll paper guide. 2 year limited warranty.',
    part_number: "TM-M30II-h",
    type: "Good",
    cost: "213.21",
    cost_usdollar: "213.21",
    currency_id: "-99",
    price: "399",
    price_usdollar: "399",
    product_image:
      "https://crm.stovepos.com/upload/ABAE0977-22C9-4CCA-25A6-18B230EA23AD_epson-tmm30iiblack.jpg",
    amount: 0,
    category: "product",
    includedInPlane: false,
  },
  {
    id: "85128fe4-25a1-8c64-4f67-623c6915201b",
    name: "T2 Single Display",
    description: "",
    part_number: "T21D",
    type: "Hardware",
    cost: "499",
    cost_usdollar: "499",
    currency_id: "-99",
    price: "899",
    price_usdollar: "899",
    product_image:
      "https://crm.stovepos.com/upload/1CDE5F3B-06FA-85BC-4B28-D0A80A6E269C_ts2-single.jpg",
    amount: 0,
    category: "product",
    includedInPlane: false,
  },

  {
    id: "e95b7036-d925-25ff-c7d7-623c69639b1b",
    name: "T2s Dual Display",
    description:
      "15.6\" User Display\n15.6\" Customer Touch Display\nBuilt-in Epson Printer\n\t\nT2S - 15'' POS, 4GB + 64GB, 15'' Cust disp, 80mm Receipt Printer, WiFi, Android 9",
    part_number: "T22D",
    type: "Hardware",
    cost: "920",
    cost_usdollar: "920",
    currency_id: "-99",
    price: "1276",
    price_usdollar: "1276",
    product_image:
      "https://crm.stovepos.com/upload/8FC8DA12-A960-C974-FA20-12C66B70947D_ts2-dual.jpg",
    amount: 0,
    category: "product",
    includedInPlane: false,
  },
  {
    id: "61b166c6-4491-9c5e-5f03-6352bb3b8dec",
    name: "Gift Cards - Monthly License",
    description: "",
    part_number: "GCLIC",
    category: "product",
    type: "Service",
    cost: "20",
    cost_usdollar: "20",
    currency_id: "-99",
    price: "20",
    price_usdollar: "20",
    product_image: "",
    amount: 0,
    includedInPlane: true,
  },

  // softwares
  {
    id: "a7c60866-c504-5c7a-b32f-631b836d74ac",
    name: "mySTOVE Web Management",
    description: "",
    part_number: "mySTOVEWEB",
    type: "Service",
    cost: "0",
    cost_usdollar: "0",
    currency_id: "-99",
    price: "0",
    price_usdollar: "0",
    product_image: "",
    amount: 0,
    category: "software",
    includedInPlane: true,
  },
  {
    id: "b82c885e-197f-1691-cb7a-623c6fee2937",
    name: "Loyalty - Monthly License",
    description: "",
    part_number: "LOYLIC",
    type: "Service",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "25",
    price_usdollar: "25",
    product_image: "",
    amount: 0,
    category: "software",
    includedInPlane: false,
  },

  {
    id: "c8c718c1-3661-5916-8d68-631a39c56e97",
    name: "4 Hour Onsiite Platinum",
    description: "",
    part_number: "4hrPLAT",
    type: "Service",
    cost: "79",
    cost_usdollar: "79",
    currency_id: "-99",
    price: "189",
    price_usdollar: "189",
    product_image: "",
    amount: 0,
    category: "software",
    includedInPlane: false,
  },
  {
    id: "d7ac7e0d-8aae-eb8a-97f4-6352b87daef4",
    name: "STD Processing IC",
    description: "CC 0.25%+0.15 per trans",
    part_number: "CCSTDIC",
    type: "Service",
    cost: "0.25",
    cost_usdollar: "0.25",
    currency_id: "-99",
    price: "0",
    price_usdollar: "0",
    product_image: "",
    category: "software",
    amount: 0,
    includedInPlane: true,
  },
  {
    id: "eb811bda-f2fb-e8b7-9c63-631b837ce589",
    name: "mySTOVE Employee Mobile App",
    description: "",
    part_number: "mySTOVEEMPAPP",
    type: "Service",
    cost: "0",
    cost_usdollar: "0",
    currency_id: "-99",
    price: "0",
    price_usdollar: "0",
    product_image: "",
    category: "software",
    amount: 0,
    includedInPlane: true,
  },

  {
    id: "e2575bac-4d87-f970-67c8-6352bb8fe8ff",
    name: "E-Mail - Monthly License",
    description: "",
    part_number: "EMAILLIC",
    category: "software",
    type: "Service",
    cost: "20",
    cost_usdollar: "20",
    currency_id: "-99",
    price: "20",
    price_usdollar: "20",
    product_image: "",
    amount: 0,
    includedInPlane: false,
  },
  {
    id: "ec09d953-d16c-06a1-0de1-6352bbed0308",
    name: "KDS - Monthly License",
    description: "",
    part_number: "KDSLIC",
    type: "Service",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "15",
    price_usdollar: "15",
    product_image: "",
    category: "software",
    amount: 0,
    includedInPlane: true,
  },

  // support

  {
    id: "a2636d50-5f86-f32d-3eee-623df4e80b83",
    name: "Setup and Training",
    description: "",
    part_number: "SetupHSaaS",
    type: "Good",
    cost: "400",
    cost_usdollar: "400",
    currency_id: "-99",
    price: "499",
    price_usdollar: "499",
    product_image: "TBD BASED ON NEEDS/LEVEL",
    category: "support",
    amount: 0,
    includedInPlane: false,
  },
  {
    id: "8363c4dc-051c-d3d9-3270-62472aeddf4a",
    name: "24/7 Enterprise Support",
    description: "TBD BASED ON NEEDS/LEVEL \n ---",
    part_number: "ENTSP",
    type: "Service",
    cost: "0",
    cost_usdollar: "0",
    currency_id: "-99",
    price: "0",
    price_usdollar: "0",
    product_image: "",
    category: "support",
    amount: 0,
    includedInPlane: false,
  },

  {
    id: "eef120cb-4dae-7b73-4746-634d802d7962",
    name: "3rd Party Ordering - Monthly License",
    description: "",
    part_number: "3pdLIC",
    type: "Service",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "20",
    price_usdollar: "20",
    product_image: "",
    amount: 0,
    category: "support",
    includedInPlane: false,
  },

  {
    id: "ec09d953-d16c-06a1-0de1-6352bbed0308",
    name: "KDS - Monthly License",
    description: "",
    part_number: "KDSLIC",
    type: "Service",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "15",
    price_usdollar: "15",
    product_image: "",
    category: "support",
    amount: 0,
    includedInPlane: true,
  },
  {
    id: "dec57a5c-f8e6-444b-7623-6352bb58ec5f",
    name: "Reservations+ - Monthly License",
    description: "",
    part_number: "RESLIC",
    type: "Service",
    cost: "35",
    cost_usdollar: "35",
    currency_id: "-99",
    price: "35",
    price_usdollar: "35",
    product_image: "",
    category: "support",
    amount: 0,
    includedInPlane: true,
  },
  {
    id: "c37f082d-3204-8e84-b94f-6352bb6c484b",
    name: "Payroll Module - Monthly License",
    description: "",
    part_number: "PRLIC",
    type: "Service",
    cost: "35",
    cost_usdollar: "35",
    currency_id: "-99",
    price: "35",
    price_usdollar: "35",
    product_image: "",
    category: "support",
    amount: 0,
    includedInPlane: true,
  },

  {
    id: "b82c885e-197f-1691-cb7a-623c6fee2937",
    name: "Loyalty - Monthly License",
    description: "",
    part_number: "LOYLIC",
    type: "Service",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "25",
    price_usdollar: "25",
    product_image: "",
    category: "support",
    amount: 0,
    includedInPlane: false,
  },

  {
    id: "92e10639-015c-94b9-7de0-634d802dab49",
    name: "Credit Promotion",
    description: "",
    part_number: "credpromo",
    type: "Service",
    cost: "-1500",
    cost_usdollar: "-1500",
    currency_id: "-99",
    price: "0",
    price_usdollar: "0",
    product_image: "",
    category: "support",
    amount: 0,
    includedInPlane: false,
  },
  // monthly subscription

  {
    id: "24f40c0f-e70e-7d6c-fef2-623c6f1376b6",
    name: "STOVE STARTER Monthly Subscription",
    description: "",
    part_number: "TERMLIC",
    type: "Software",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "59",
    price_usdollar: "59",
    product_image: "GiftIcon",
    category: "subscription",
    amount: 0,
    planeItems: [
      "Cloud Based POS",
      "Full Reporting",
      " Employee Time Tracking",
      "Scheduling",
      "Online Ordering (+25/mo)",
      " Payroll (+35/mo)",
      " Kiosk Ordering (+35/mo)",
      "Gift Cards ($20/mo)",
      "eservations+ (+35/mo)",
      " KDS (+$15/mo)",
    ],
    includedInPlane: false,
  },

  {
    id: "f3d5ac84-5450-0369-ec55-6314e4b9373d",
    name: "STOVE ULTIMATE Monthly Subscription",
    description: "",
    part_number: "TERMLIC",
    type: "Service",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "139",
    price_usdollar: "139",
    product_image: "TrophyIcon",
    category: "subscription",
    amount: 0,
    planeItems: [
      "Everything from Basic",
      "Online Ordering",
      "Payroll",
      "Kiosk Ordering",
      "Mobile Ordering and Checkout",
      "E-Mail Marketing",
      "Smart Ordering AI (+35/mo)",
      "Reservations+ (+35/mo)",
      "Gift Cards (+$20/mo)",
    ],
    includedInPlane: false,
  },
  {
    id: "9bd90acd-bbe9-f8f0-c2d9-6314e4090f92",
    name: "STOVE PROFESSIONAL Monthly Subscription",
    description:
      "Cloud Based POS\n Full Reporting\n Employee Time Tracking\n Scheduling\nOnline Ordering\n Payroll\n Kiosk Ordering\n Mobile Ordering and Checkout\n E-Mail Marketing\n Delivery Dispatch\n Reservations+\n 3rd Party Order Aggregation\n SMS Marketing\n Smart Ordering AI\n Gift Cards",
    part_number: "TERMLIC",
    type: "Service",
    cost: "15",
    cost_usdollar: "15",
    currency_id: "-99",
    price: "199",
    price_usdollar: "199",
    product_image: "RocketLaunchIcon",
    category: "subscription",
    amount: 0,
    planeItems: [
      "Everything from Ultimate",
      "E-Mail Marketing",
      "Delivery Dispatch",
      "Reservations+",
      "3rd Party Order Aggregation",
      "SMS Marketing",
      "Smart Ordering AI",
      "Gift Cards",
    ],
    includedInPlane: false,
  },
];
