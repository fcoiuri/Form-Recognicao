import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { styles } from "./CreatePDF.style";

interface CreatePDFProps {
  victimPlace?: string;
  victimRescued?: string;
  addressOccurrence?: string;
  neighborhoodOccurrence?: string;
  ais?: string;
  cityOccurrence?: string;
  selectedDate?: string;
  dayWeek?: string;
  selectedHour?: string;
  camera?: string;
  suspect?: string;
  hospitalOccurrence?: string;
  suspectName?: string;
  infoSuspect?: string;
  victimName?: string;
  dn?: string;
  victimFather?: string;
  victimMother?: string;
  victimGender?: string;
  victimAddress?: string;
  victimNeighborhood?: string;
  victimCity?: string;
  victimReference?: string;
  victimScholarity?: string;
}

export const CreatePDF: React.FC<CreatePDFProps> = ({
  victimPlace,
  victimRescued,
  hospitalOccurrence,
  addressOccurrence,
  neighborhoodOccurrence,
  ais,
  cityOccurrence,
  selectedDate,
  dayWeek,
  selectedHour,
  camera,
  suspect,
  suspectName,
  infoSuspect,
  victimName,
  dn,
  victimFather,
  victimMother,
  victimGender,
  victimAddress,
  victimNeighborhood,
  victimCity,
  victimReference,
  victimScholarity,
}) => {
  const quantity = Math.floor(Math.random() * 100) + 1;

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>
          RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME nº {quantity}/2022
        </Text>

        <Text style={styles.victimStatus}>
          {victimPlace} Vítima no local {victimRescued} Vítima socorrida –
          Hospital: {hospitalOccurrence}
        </Text>

        <View style={styles.table}>
          <View style={styles.tableRowTitle}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>
                Dados essenciais da ocorrência
              </Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>
                Endereço: {addressOccurrence}
              </Text>
            </View>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>
                Bairro: {neighborhoodOccurrence}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>Cidade: {cityOccurrence}</Text>
            </View>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>Data: {selectedDate}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>Dia da semana: {dayWeek}</Text>
            </View>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>
                Hora provável do crime: {selectedHour}
              </Text>
            </View>
            <View style={styles.tableCol}></View>
            <View style={styles.tableCol}></View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>AIS: {ais}</Text>
            </View>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>
                Há câmeras de vigilância no local ou no entorno?
                <Text style={styles.camera}> {camera}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.tableRowTitle}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Suspeitos</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColAnother}>
              <Text style={styles.tableCell}>Há suspeitos?</Text>
              <Text style={styles.camera}> {suspect}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColAnother}>
              <Text style={styles.tableCell}>
                Nome(s) / Cognome(s): {suspectName}
              </Text>
            </View>
            <View style={styles.tableColSecond}></View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColAnother}>
              <Text style={styles.tableCell}>
                Informações relevantes sobre o (s) suspeito (s): {infoSuspect}
              </Text>
            </View>
            <View style={styles.tableColSecond}></View>
          </View>

          <View style={styles.tableRowTitle}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Dados da vítima</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColAnother}>
              <Text style={styles.tableCell}>Nome: {victimName}</Text>
            </View>
            <View style={styles.tableColSecond}></View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>D.N: {dn}</Text>
            </View>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>Sexo: {victimGender}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColAnother}>
              <Text style={styles.tableCell}>Filiação: {victimFather}</Text>
              <Text style={styles.tableCell}>Filiação: {victimMother}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>Endereço: {victimAddress}</Text>
            </View>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>Bairro: {victimNeighborhood}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>Cidade: {victimCity}</Text>
            </View>
            <View style={styles.tableColSecond}>
              <Text style={styles.tableCell}>
                Referência: {victimReference}
              </Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColAnother}>
              <Text style={styles.tableCell}>
                Escolaridade: {victimScholarity}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
