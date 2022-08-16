import { ValidationSchema } from "./Context";

export const initialValues: ValidationSchema = {
  victimPlace: {
    value: false,
    error: "",
    required: true,
    validate: "checkbox",
  },
  victimRescued: {
    value: false,
    error: "",
    required: true,
    validate: "checkbox",
  },
  hospitalOccurrence: {
    value: "",
    error: "",
    required: true,
    validate: "text",
  },
  addressOccurrence: {
    value: "",
    error: "",
    required: true,
    validate: "text",
  },
  neighborhoodOccurrence: {
    value: "",
    error: "",
    required: true,
    validate: "text",
  },
  ais: {
    value: "",
    error: "",
    validate: "text",
  },
  cityOccurrence: {
    value: "",
    error: "",
    validate: "text",
  },
  selectedDate: {
    value: "",
    error: "",
    validate: "text",
  },
  dayWeek: {
    value: "",
    error: "",
    validate: "text",
  },
  selectedHour: {
    value: "",
    error: "",
    validate: "text",
  },
  camera: {
    value: false,
    error: "",
    required: true,
    validate: "checkbox",
  },
  suspect: {
    value: false,
    error: "",
    required: true,
    validate: "checkbox",
  },
  suspectName: {
    value: "",
    error: "",
    validate: "text",
  },
  infoSuspect: {
    value: "",
    error: "",
    validate: "text",
  },
  victimName: {
    value: "",
    error: "",
    validate: "text",
  },
  dn: {
    value: "",
    error: "",
    validate: "text",
  },
  victimFather: {
    value: "",
    error: "",
    validate: "text",
  },
  victimMother: {
    value: "",
    error: "",
    validate: "text",
  },
  victimGender: {
    value: "",
    error: "",
    validate: "text",
  },
  victimAddress: {
    value: "",
    error: "",
    validate: "text",
  },
  victimNeighborhood: {
    value: "",
    error: "",
    validate: "text",
  },
  victimCity: {
    value: "",
    error: "",
    validate: "text",
  },
  victimReference: {
    value: "",
    error: "",
    validate: "text",
  },
  victimScholarity: {
    value: "",
    error: "",
    validate: "text",
  },
};
