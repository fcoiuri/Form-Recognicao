import { ValidationSchema } from "Context";

export const week = [
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
  "Domingo",
];

export const initialValues: ValidationSchema = {
  victimPlace: {
    value: false,
    error: "",
    validate: "checkbox",
  },
  victimRescued: {
    value: false,
    error: "",
    validate: "checkbox",
  },
  hospitalOccurrence: {
    value: "",
    error: "",
    validate: "text",
  },
  addressOccurrence: {
    value: "",
    error: "",
    required: true,
    minLength: 4,
    validate: "text",
    helperText: "Endereço tem que ter no mínimo 4 caracteres",
  },
  neighborhoodOccurrence: {
    value: "",
    error: "",
    required: true,
    minLength: 3,
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
    required: true,
    minLength: 3,
  },
  selectedDate: {
    value: "",
    error: "",
    validate: "date",
    required: true,
    helperText: "Insira uma data correta",
  },
  dayWeek: {
    value: "",
    error: "",
    validate: "text",
  },
  selectedHour: {
    value: "",
    error: "",
    validate: "hour",
    required: true,
  },
  camera: {
    value: false,
    error: "",
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
    required: true,
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
    required: true,
    validate: "text",
  },
  victimGender: {
    value: "",
    error: "",
    required: true,
    validate: "text",
  },
  victimAddress: {
    value: "",
    error: "",
    required: true,
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
    required: true,
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
    validate: "select",
  },
};
