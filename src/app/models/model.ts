

export interface PrintEcart {
    bonCommandeAdministratifId: string;
    factureId: string;
    intituleReception: string;
    lieuReception: string;
    dateReception: Date;
    numBordereauLivraison?: string;
    dateBordereauLivraison?: Date;
    fournisseur?: string;
    pvPresidentMatricule: string;
    pvPresidentNom: string;
    pvPresidentPrenom?: string;
    pvRapporteurMatricule: string;
    pvRapporteurNom: string;
    pvRapporteurPrenom?: string;
    pvMembreMatricule?: string;
    pvMembreNom?: string;
    pvMembrePrenom?: string;
    pvTechnicienMatricule?: string;
    pvTechnicienNom?: string;
    pvTechnicienPrenom?: string;
    numCorrection?: number;
    dateCorrection?: Date;
    montantFacture?: number;
    montantAE?: number;
}

export interface ImpressionCbmtDto {
    typeImpression: string;
    cdmtId: string | undefined;
    cdmtVersion: number;
    chCodeL: string | null;
    unite: number;
    activePage: string; // f" | "i" | autre
    checkDetailGM: boolean;
    checkAfficherTitre: boolean;
    checkAfficherChapitreDetail: boolean;
    checkAfficherRecap: boolean;
    checkAfficherSF: boolean;
    annee1: string | undefined;
    annee3: string | undefined;
    libelleFr: string;
    lblUnite: string;
}
export interface CadrageProjetGmBipDto {
    cadrageGMId: string;
    cdmtId: string;
    annee: number;
    chChapitreId: string;

    // Crédits d'Engagement / Paiements standards
    caRio: number;
    caFinex: number;
    caPPTE: number;
    caC2D: number;
    caIADM: number;
    caProv: number;
    caContrepartie: number;
    caRT: number;

    // Métadonnées
    caDateMaj: Date | string;
    caUserMaj: string|undefined
    version: number;

    // Autorisations d'Engagement (AE)
    caRioAe: number;
    caFinexAe: number;
    caPPTEAe: number;
    caC2DAe: number;
    caIADMAe: number;
    caProvAe: number;
    caContrepartieAe: number;
    caRTAe: number;

    // Autres indicateurs AE et CP
    caHepipAe: number;
    caCtdIAe: number;
    caHepipCp: number;
    caCtdICp: number;
    caHorsCtdI: number;
    caHorsCtdIAE: number;
}

export interface CadrageProjetGmbfDto {
    // Identifiants et contexte
    cadrageGMId: string;
    cdmtId: string;
    annee: number;
    chChapitreId: string;


    caSal: number;
    caDepPers: number;
    caBStage: number;
    caEau: number;
    caElec: number;
    caTel: number;
    caB1EtServ: number;
    caPPTE: number;
    caC2D: number;
    caIADM: number;
    caProv: number;
    caCarburant: number;

    // Métadonnées
    caDateMaj: Date | string;
    caUserMaj: string|undefined;
    version: number;


    caSalAe: number;
    caDepPersAe: number;
    caBStageAe: number;
    caEauAe: number;
    caElecAe: number;
    caTelAe: number;
    caB1EtServAe: number;
    caPPTEAe: number;
    caC2DAe: number;
    caIADMAe: number;
    caProvAe: number;
    caCarburantAe: number;


    caChargeFinDetteAe: number;
    caAutreHonEtdAe: number;
    caFraisFormPersAe: number;
    caCtdFAe: number;
    caAutreTransfertAe: number;
    caAutreDepenseAe: number;


    caChargeFinDetteCp: number;
    caAutreHonEtdCp: number;
    caFraisFormPersCp: number;
    caCtdFCp: number;
    caAutreTransfertCp: number;
    caAutreDepenseCp: number;


    caFinexCourantAe: number;
    caFinexCourantCp: number;
}


export interface ImpressionClimatDto {
    cdmtId: string;
  exMillesime: string;
  cdmtAnnee1: number;
  chCode: string;
  sndVersion: number
}
