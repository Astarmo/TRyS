//comentar y revisar codigo

class Materia {
  constructor(
    nombre,
    creditos,
    previas,
    nombreCompleto,
    semestre,
    opcional,
    libre,
    area
  ) {
    this.creditos = creditos;
    this.nombre = nombre;
    this.previas = previas;
    this.curso = `${nombre}Curso`;
    this.estado = 0;
    this.nombreCompleto = nombreCompleto;
    this.prioridad = 0;
    this.semestre = semestre;
    this.opcional = opcional;
    this.libre = libre;
    this.area = area;
    this.peso = 0;
  }
}

const CDIV = new Materia("CDIV", 13, [], "Cálculo DIV", "ambos", "no", "si", "creditosEnM");
const CDIVV = new Materia("CDIVV", 13, [CDIV.curso], "Cálculo DIVV", "ambos", "no", "si", "creditosEnM");
const MD1 = new Materia("MD1", 9, [], "Matemática Discreta 1", "ambos", "no", "si", "creditosEnM");
const P1 = new Materia("P1", 10, [], "Programación 1", "ambos", "no", "no", "creditosEnProg");
const GAL1 = new Materia("GAL1", 9, [], "Geometría y Álgebra Lineal 1", "ambos", "no", "si", "creditosEnM");
const P2 = new Materia("P2", 12, [P1.curso], "Programación 2", "ambos", "no", "no", "creditosEnProg");
const Ec = new Materia("Ec", 7, [], "Economía", "segundo", "si", "no", "creditosEnCHS");
const F1 = new Materia("F1", 10, [], "Física 1", "ambos", "si", "si", "creditosEnCE");
const GAL2 = new Materia("GAL2", 9, [GAL1.curso], "Geometría y Álgebra Lineal 2", "ambos", "no", "si", "creditosEnM");
const AAL = new Materia( "AAL",  9,  [GAL2.curso, CDIV], "Aplicaciones del Álgebra Lineal", "segundo", "si",  "no", "creditosEnMN");
const PYE = new Materia("PYE",  10, [CDIVV.curso, GAL1, CDIV], "Probabilidad y Estadistica",  "ambos",  "no", "si",  "creditosEnM");
const PCI = new Materia("PCI",  10, [PYE, CDIVV, GAL2], "Procesamiento cuántico de la información",  "primero",  "si", "no",  "creditosEnM");
const ITI = new Materia("ITI", 8, [PYE], "Int. a la Teoría de la Información", "primero", "si", "no", "creditosEnM");
const MD2 = new Materia("MD2", 9, [MD1.curso, GAL1.curso], "Matemática Discreta 2", "ambos", "no", "si", "creditosEnM");
const LG = new Materia("LG", 12, [MD1.curso], "Lógica", "primero", "no", "no", "creditosEnM");
const MN = new Materia("MN", 8, [CDIVV, P1, GAL2, GAL1, CDIV], "Métodos Numéricos", "segundo", "no", "no", "creditosEnMN");
const P4 = new Materia("P4",  15, [GAL1, CDIV, MD1, P2], "Programación 4", "primero", "no", "no", "creditosEnProg");
const IIO = new Materia("IIO", 10, [GAL2, PYE, CDIVV, CDIV, GAL1], "Int. a la Investigación de Operaciones", "primero", "no", "no", "creditosEnIO");
const ADA = new Materia("ADA", 10, [IIO], "Algoritmos de Aproximación", "segundo", "si", "no", "creditosEnIO");
const MMC = new Materia("MMC", 8, [PYE, IIO], "Métodos de Monte Carlo", "primero", "si", "no", "creditosEnMN");
const FDPE = new Materia("FDPE", 8, [IIO], "Fundamentos de Programación Entera", "primero", "si", "no", "creditosEnIO");
const MO = new Materia("MO", 6, [IIO], "Modelado y Optimización", "segundo", "si", "no", "creditosEnIO");
const IOGR = new Materia("IOGR", 6, [IIO], "Investigación de Oper. y Gest. de Riesgos", "segundo", "si", "no", "creditosEnIO");
const P3 = new Materia("P3", 15, [P2.curso, P1, MD1], "Programación 3", "segundo", "no", "si", "creditosEnProg");
const ALN = new Materia("ALN", 9, [P3, MN], "Álgebra Lineal Numérica", "segundo", "si", "no", "creditosEnMN");
const AC = new Materia("AC", 10, [LG.curso, P2.curso, P1, MD1.curso], "Arquitectura de Computadoras", "segundo", "no", "si", "creditosEnAC_SO_RC");
const CV = new Materia("CV", 10, [CDIVV.curso, GAL1, CDIV], "Cálculo Vectorial", "ambos", "si", "si", "creditosEnM");
const ED = new Materia("ED", 10, [GAL2, CDIVV.curso, GAL1, CDIV], "Int. a las Ec. Diferenciales", "segundo", "si", "si", "creditosEnM");
const TL = new Materia("TL", 12, [P3.curso, CDIV, GAL1, LG, MD1], "Teoría de Lenguajes", "primero", "no", "no", "creditosEnProg");
const FVC = new Materia("FVC", 5, [CV.curso, CDIVV], "Funciones de Variable Compleja", "primero", "si", "si", "creditosEnM");
const SO = new Materia("SO", 12, [AC.curso, GAL1, CDIV, P2, MD1], "Sistemas Operativos", "primero", "no", "no", "creditosEnAC_SO_RC");
const CCE = new Materia("CCE", 8, [PYE.curso, GAL1, CDIVV, MD1, CDIV], "Códigos para Corrección de Errores", "primero", "si", "no", "creditosEnM");
const TACCE = new Materia("TACCE", 7, [CCE.curso], "Temas avanzados en cód. para corr. de err.", "segundo", "si", "no", "creditosEnM");
const PMPPG = new Materia("PMPPG", 10, [P2, SO.curso, AC.curso], "Prog. masivamente paralela en p. gráficos", "primero", "si", "no", "creditosEnAC_SO_RC");
const FO = new Materia("FO", 6, [CDIVV, P1.curso, GAL2], "Fundamentos de Optimización", "primero", "si", "no", "creditosEnIO");
const OCA = new Materia("OCA", 10, [IIO], "Optimización Continua y Aplicaciones", "segundo", "si", "no", "creditosEnIO");
const FBD = new Materia("FBD", 15, [LG, P3, MD2], "Fundamentos de Bases de Datos", "segundo", "no", "no", "creditosEnBD_SI");
const BDNR = new Materia("BDNR", 10, [FBD], "Bases de Datos No Relacionales", "primero", "si", "no", "creditosEnBD_SI");
const CDI = new Materia("CDI", 8, [FBD], "Calidad de Datos e Información", "primero", "si", "no", "creditosEnBD_SI");
const RC = new Materia("RC", 12, [P3, SO.curso, CDIV, AC.curso], "Redes de Computadoras", "segundo", "no", "no", "creditosEnAC_SO_RC");
const TSI = new Materia("TSI", 10, [RC.curso, FBD, P3], "Taller de Seguridad Informática", "segundo", "si", "no", "creditosEnTall_Pasa_Proy");
const ADAR = new Materia("ADAR", 8, [P3, RC], "Análisis y Diseño de Al. Dis. en Redes", "segundo", "si", "no", "creditosEnAC_SO_RC");
const CAP = new Materia("CAP", 10, [P4.curso, RC.curso, SO.curso, AC.curso], "Computación de alta performance", "primero", "si", "no", "creditosEnAC_SO_RC");
const TP = new Materia("TP", 15, [P3, P4.curso], "Taller de Programación", "segundo", "no", "no", "creditosEnTall_Pasa_Proy");
const IPLN = new Materia("IPLN", 12, [P4, TP.curso, LG, P3, TL, PYE], "Int. al Procesamiento de Leng. Natural", "segundo", "si", "no", "creditosEnIAYR");
const IIS = new Materia("IIS", 10, [TP.curso, FBD.curso, P4.curso], "Taller Introductorio de Ing. de Software", "primero", "no", "no", "creditosEnIS");
const FWS = new Materia("FWS", 8, [IIS,FBD], "Fundamentos de la web semántica", "primero", "si", "no", "creditosEnBD_SI");
const PF = new Materia("PF", 10, [TL, P2, LG, MD1], "Programación Funcional", "segundo", "no", "no", "creditosEnProg");
const PFA = new Materia("PFA", 12, [PF.curso], "Programación Funcional Avanzada", "segundo", "si", "no", "creditosEnProg");
const PL = new Materia("PL", 10, [TL, P3, MD2, LG], "Programación Lógica", "primero", "no", "no", "creditosEnProg");
const PIS = new Materia("PIS", 15, [IIS.curso, P4], "Proyecto de Ingeniería de Software", "segundo", "no", "no", "creditosEnTall_Pasa_Proy");
const AA = new Materia("AA", 12, [LG, PYE, P3.curso, FBD.curso, P4, MD2], "Aprendizaje Automático", "segundo", "si", "no", "creditosEnIAYR");
const RNLN = new Materia("RNLN", 10, [P3, AA.curso, PYE], "Redes Neuronales para Leng. Natural", "segundo", "si", "no", "creditosEnIAYR");
const AE = new Materia("AE", 10, [P4, PYE, IIO], "Algoritmos Evolutivos", "segundo", "si", "no", "creditosEnIO");
const ICG = new Materia("ICG", 10, [P3, P4, GAL2.curso, GAL1], "Int. a la Computación Gráfica", "primero", "si", "no", "creditosEnProg");
const CGA = new Materia("CGA", 12, [ICG.curso], "Computación Gráfica Avanzada", "segundo", "si", "no", "creditosEnProg");
const FSI = new Materia("FSI", 12, [SO, FBD, P3, LG, RC], "Fundamentos de la Seguridad Informática", "primero", "si", "no", "creditosEnAC_SO_RC");
const Aux = new Materia("Aux", 0, [], "", "", "", "", "");
const MI = new Materia("MI", 4, [Aux], "Matemática Inicial", "ambos", "no", "no", "creditosEnM");
const CTS = new Materia("CTS", 8, [], "Ciencia, Tecnología y Sociedad", "primero", "si", "no", "creditosEnCHS");
const TRE = new Materia("TRE", 6, [P1], "Taller de Robótica Educativa", "primero", "si", "no", "creditosEnTall_Pasa_Proy");
const F2 = new Materia("F2", 10, [F1.curso, CDIV.curso], "Física 2", "ambos", "si", "si", "creditosEnCE");
const AGI = new Materia("AGI", 5, [Aux], "Administración General para Ingenieros", "primero", "si", "si", "creditosEnGO");
const CC = new Materia("CC", 8, [PYE.curso], "Control de Calidad", "primero", "si", "si", "creditosEnGO");
const PAI = new Materia("PAI", 5, [AGI.curso], "Práctica de Administración para Ingenieros", "segundo", "si", "si", "creditosEnGO");
const PCIC = new Materia("PCIC", 3, [], "Políticas Científicas en Inf. y Comp.", "segundo", "si", "no", "creditosEnCHS");
const ASS = new Materia("ASS", 10, [RC.curso, SO.curso, FBD.curso, IIS.curso, AC.curso], "Administración y Seguridad de Sistemas", "primero", "si", "no", "creditosEnBD_SI");
const Pasan = new Materia("Pasan", 10, [Aux], "Pasantía", "ambos", "si", "no", "creditosEnTall_Pasa_Proy");
const PG = new Materia("PG", 30, [Aux], "Proyecto de Grado", "ambos", "no", "no", "creditosEnTall_Pasa_Proy");

//Revisar todos otra vez

let Materias = [
  MI,
  MD1,
  CDIV,
  P1,
  GAL1,
  Ec,
  F1,
  CTS,
  PCIC,
  CDIVV,
  P2,
  GAL2,
  MD2,
  LG,
  //TRE,
  F2,
  AC,
  PYE,
  CC,
  PCI,
  MN,
  P4,
  AAL,
  CV,
  ED,
  AGI,
  TP,
  IIO,
  ADA,
  MMC,
  FDPE,
  P3,
  SO,
  Pasan,
  ITI,
  FVC,
  CCE,
  TACCE,
  PAI,
  TL,
  FBD,
  BDNR,
  CDI,
  RC,
  FO,
  OCA,
  AE,
  ICG,
  PMPPG,
  ALN,
  IIS,
  FWS,
  PF,
  PFA,
  PL,
  AA,
  CGA,
  FSI,
  CAP,
  ADAR,
  TSI,
  PIS,
  ASS,
  PG,
  IPLN,
  IOGR,
  MO,
  RNLN,
];

let MateriasPersona = new Set();
let materias = 0;
let opcionales = true;
let seleccion = false;
let semestreAct = "ambos";

//Cumplir areas

let creditosBloque = {
  creditosEnM: 0, // 70              | MI + MD1 + CDIV + GAL1 + CDIVV + GAL2 + MD2 + PYE + LOG = 88
  creditosEnCE: 0, // 10             | F1 = 10
  creditosEnProg: 0, // 60           | P1 + P2 + P3 + P4 + TL = 64
  creditosEnAC_SO_RC: 0, // 30       | AC + SO + RC = 36
  creditosEnBD_SI: 0, // 10          | FBD = 15
  creditosEnMN: 0, // 8              | MN = 8
  creditosEnIO: 0, // 10             | IIO = 10
  creditosEnIS: 0, // 10             | IIS = 10
  creditosEnTall_Pasa_Proy: 0, // 45 | PG + PIS + TP = 60
  creditosEnGO: 0, // 10             | AGI + PAI = 10
  creditosEnIAYR: 0, // 0            |
  creditosEnCHS: 0, // 10            | EC + PCIC = 10
  Total: 0,
};

// Total = 331 - faltan 139

// Funciones auxiliares

function displayBlock(elemento){
  document.getElementById(elemento).style.display = "block";
}

function displayNone(elemento){
  document.getElementById(elemento).style.display = "none";
}

function displayFlex(elemento){
  document.getElementById(elemento).style.display = "flex";
}

function cambiarColores(color1, color2, color3, color4){
  document.getElementById("primero").style.backgroundColor = color1;
  document.getElementById("segundo").style.backgroundColor = color2;
  document.getElementById("ambos").style.backgroundColor = color3;
  document.getElementById("libre").style.backgroundColor = color4;
}

// Funciones de Popup

function openPopup(texto) {
  if (!window.matchMedia("(min-width: 675px)").matches) {
    if (document.getElementById("checkbox").checked) {
      document.getElementById("checkbox").click();
    }
  }
  document.getElementById("popup-text").innerHTML = texto;
  displayFlex("boxPopup");
  document.getElementById('cerrar-popup').focus();
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  displayNone("boxPopup");
  document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
  var modal = document.getElementById("boxPopup");
  if (event.target == modal) {
    closePopup();
  }
};

// Funcion de MI

function toggleMI() {
  if (document.getElementById("MI").disabled == true) {
    document.getElementById("MI").disabled = false;
    MI.previas = [];
    CDIV.previas = [MI];
  } else {
    document.getElementById("MI").disabled = true;
    MI.previas = [Aux];
    CDIV.previas = [];
  }
  actualizar();
  localStorage.setItem("MI", document.getElementById("MI").disabled);
}

// Funciones de toggle

function toggleOpcionales() {
  if (opcionales) {
    opcionales = false;
    actualizar();
  } else {
    opcionales = true;
    actualizar();
  }
}

function toggleMateria(nombre) {
  let materiaActual = Materias.find((nombreAux) => nombreAux.nombre == nombre);
  switch (materiaActual.estado) {
    case 0:
      indicarPrevias(nombre);
      break;
    case 1:
      MateriasPersona.add(materiaActual.curso);
      break;
    case 2:
      MateriasPersona.add(materiaActual.nombre);
      break;
    case 3:
      MateriasPersona.delete(materiaActual.curso);
      MateriasPersona.delete(materiaActual.nombre);
      break;
    default:
      break;
  }
  actualizar();
}

function toggleBotones(valor) {
  semestreAct = valor;
  let colorSec = "lightgrey";
  let colorPrin = "lightskyblue";

  switch (valor) {
    case "primero":
      cambiarColores(colorPrin, colorSec, colorSec, colorSec);
      displayBlock("activarMI");
      break;
    case "segundo":
      cambiarColores(colorSec, colorPrin, colorSec, colorSec);
      displayBlock("activarMI");
      break;
    case "ambos":
      cambiarColores(colorSec, colorSec, colorPrin, colorSec);
      displayBlock("activarMI");
      break;
    case "libre":
      cambiarColores(colorSec, colorSec, colorSec, colorPrin);
      displayNone("activarMI");
      break;
    default:
      break;
  }
  actualizar();
  localStorage.setItem("semestre", semestreAct);
}

function toggleMenu() {
  if (document.getElementById("checkbox").checked) {
    displayFlex("navbar");
    seleccion = !seleccion;
  } else {
    displayNone("navbar")
    seleccion = !seleccion;
  }
}

// Actualiza el estado de la pagina

function actualizar() {
  creditosBloque = {
    creditosEnM: 0, // 70              | MI + MD1 + CDIV + GAL1 + CDIVV + GAL2 + MD2 + PYE + LOG = 88
    creditosEnCE: 0, // 10             | F1 = 10
    creditosEnProg: 0, // 60           | P1 + P2 + P3 + P4 + TL = 64
    creditosEnAC_SO_RC: 0, // 30       | AC + SO + RC = 36
    creditosEnBD_SI: 0, // 10          | FBD = 15
    creditosEnMN: 0, // 8              | MN = 8
    creditosEnIO: 0, // 10             | IIO = 10
    creditosEnIS: 0, // 10             | IIS = 10
    creditosEnTall_Pasa_Proy: 0, // 45 | PG + PIS + TP = 60
    creditosEnGO: 0, // 10             | AGI + PAI = 10
    creditosEnIAYR: 0,
    creditosEnCHS: 0, // 10            | EC + PCIC = 10
    Total: 0,
  };
  materias = 0;

  Materias.forEach((materia) => {
    if (opcionales == true) {
      mostrarBotonMateria(materia);
    } else {
      if (materia.opcional == "no") {
        mostrarBotonMateria(materia);
      } else {
        displayNone(materia.nombre);
      }
    }

    let estanTodas = true;

    materia.previas.forEach((previa) => {
      estanTodas =
        (MateriasPersona.has(previa.nombre) ||
          MateriasPersona.has(previa)) &&
        estanTodas;
    });

    if (materia == AGI && creditosBloque.Total >= 140) {
      estanTodas = true;
    }

    if (materia == CC) {
      estanTodas = creditosBloque.Total >= 80 && MateriasPersona.has("PYECurso")? true: false;
    }

    if (materia == Pasan && creditosBloque.Total >= 200) {
      estanTodas = true;
    }

    if (materia == ASS && estanTodas) {
      if (!((MateriasPersona.has("AGI")&&MateriasPersona.has("CC"))||(MateriasPersona.has("AGI")&&MateriasPersona.has("PAI")))) {
        estanTodas = false;
      }
    }

    if (materia == TP && !estanTodas) {
      if (MateriasPersona.has("P4")) {
        estanTodas = true;
      }
    }

    if (materia == PMPPG && !estanTodas){
      if ( ((MateriasPersona.has("AC")) || (MateriasPersona.has("SO")))&&(MateriasPersona.has("P2")) ) {
        estanTodas = true;
      }
    }

    if (materia == PG) {
      if (!estanTodas && creditosBloque.Total >= 380) {
        estanTodas = true;
      }

      if (!estanTodas && creditosBloque.Total >= 365) {
        const verificarSiEstan = ["P3Curso", "SOCurso", "IISCurso", "FBDCurso", "P4Curso", "TPCurso", "TLCurso", "PISCurso", "MNCurso"]
        estanTodas = verificarSiEstan.every(element => MateriasPersona.has(element));
      }

      if (!estanTodas && creditosBloque.Total >= 330) {
        if (
          creditosBloque.creditosEnMN >= 8 &&
          creditosBloque.creditosEnProg >= 60 &&
          creditosBloque.creditosEnTall_Pasa_Proy >= 15 &&
          creditosBloque.creditosEnM >= 70 &&
          creditosBloque.creditosEnIS >= 10 &&
          creditosBloque.creditosEnIO >= 10 &&
          creditosBloque.creditosEnBD_SI >= 10 &&
          creditosBloque.creditosEnGO >= 10 &&
          creditosBloque.creditosEnAC_SO_RC >= 30 &&
          creditosBloque.creditosEnCHS >= 10
        ) {
          estanTodas = true;
        }
      }
    }

    if (estanTodas) {
      if ( !MateriasPersona.has(materia.nombre) || !MateriasPersona.has(materia.curso)) {
        document.getElementById(materia.nombre).disabled = false;
        document.getElementById(materia.nombre).style.background = "lightcoral";
        materia.estado = 1;
      }
      if (MateriasPersona.has(materia.curso)) {
        document.getElementById(materia.nombre).style.background = "lightblue";
        materia.estado = 2;
      }
      if (MateriasPersona.has(materia.nombre)) {
        document.getElementById(materia.nombre).style.background = "lightgreen";
        sumarCreditos(materia);
        materias += 1;
        materia.estado = 3;
      }
    } else {
      if (MateriasPersona.has(materia.nombre)) {
        MateriasPersona.delete(materia.nombre);
      }
      if (MateriasPersona.has(materia.curso)) {
        MateriasPersona.delete(materia.curso);
      }
      materia.estado = 0;
      document.getElementById(materia.nombre).style.background = "gray";
    }
  });

  document.getElementById(
    "titulo"
  ).textContent = `Materias | Créditos: ${creditosBloque.Total}`;

  if (opcionales) {
    document.getElementById("op").innerHTML = "Opcionales: Si";
  } else {
    document.getElementById("op").innerHTML = "Opcionales: No";
  }
  localStorage.setItem("materias", JSON.stringify(Array.from(MateriasPersona.values())));
}

// Funciones generales

function reset() {
  MateriasPersona.clear();
  actualizar();
}

function sumarCreditos(materia) {
  creditosBloque.Total += materia.creditos;
  switch (materia.area) {
    case "creditosEnM":
      creditosBloque.creditosEnM += materia.creditos;
      break;
    case "creditosEnCE":
      creditosBloque.creditosEnCE += materia.creditos;
      break;
    case "creditosEnProg":
      creditosBloque.creditosEnProg += materia.creditos;
      break;
    case "creditosEnAC_SO_RC":
      creditosBloque.creditosEnAC_SO_RC += materia.creditos;
      break;
    case "creditosEnBD_SI":
      creditosBloque.creditosEnBD_SI += materia.creditos;
      break;
    case "creditosEnMN":
      creditosBloque.creditosEnMN += materia.creditos;
      break;
    case "creditosEnIO":
      creditosBloque.creditosEnIO += materia.creditos;
      break;
    case "creditosEnIS":
      creditosBloque.creditosEnIS += materia.creditos;
      break;
    case "creditosEnTall_Pasa_Proy":
      creditosBloque.creditosEnTall_Pasa_Proy += materia.creditos;
      break;
    case "creditosEnGO":
      creditosBloque.creditosEnGO += materia.creditos;
      break;
    case "creditosEnCHS":
      creditosBloque.creditosEnCHS += materia.creditos;
      break;
    case "creditosEnIAYR":
      creditosBloque.creditosEnIAYR += materia.creditos;
      break;
    default:
      break;
  }
}

function indicarPrevias(nombre) {
  let materiaAct = Materias.find((materia) => materia.nombre == nombre);

  let Exonerar = [];
  let Exoneradas = [];
  let Salvar = [];
  let Salvadas = [];

  materiaAct.previas.filter((materia) => {
    if (typeof materia == "string") {
      let materiaAux = Materias.find((elemento) => elemento.curso == materia);
      if (!MateriasPersona.has(materia)) {
        Salvar.push(materiaAux);
      }else{
        Salvadas.push(materiaAux);
      }
    } else {
      if (!MateriasPersona.has(materia.nombre)) {
        Exonerar.push(materia);
      }else{
        Exoneradas.push(materia);
      }
    }
  });

  let texto = `Para poder cursar ${materiaAct.nombreCompleto} te hace falta:<br/><br/>`;

  if (Exonerar.length + Exoneradas.length > 0) {
    texto += `<u>Exonerar</u>:<br/><br/>`;
  }
  Exonerar.forEach((materia) => {
    texto += `-${materia.nombreCompleto}<br/>`;
  });
  Exoneradas.forEach((materia) => {
    texto += `-<s>${materia.nombreCompleto}</s><br/>`;
  });

  if (Salvar.length + Salvadas.length > 0) {
    if (Exonerar.length + Exoneradas.length > 0) {
      texto += `<br/>`;
    }
    texto += `<u>Salvar curso de</u>:<br/><br/>`;
  }
  Salvar.forEach((materia) => {
    texto += `-${materia.nombreCompleto}<br/>`;
  });
  Salvadas.forEach((materia) => {
    texto += `-<s>${materia.nombreCompleto}</s><br/>`;
  });

  if (materiaAct == CC) {
    texto = `Para poder cursar ${materiaAct.nombreCompleto} se necesitan:<br/><br/>`;
    texto += `-80 créditos<br/><br/>`;
    texto += `<u>Salvar curso de</u>:<br/><br/>`;
    if (!MateriasPersona.has(PYE.curso)){
      texto += `-${PYE.nombreCompleto}<br/>`;
    }else{
      texto += `-<s>${PYE.nombreCompleto}</s><br/>`;
    }
  }

  if (materiaAct == ASS) {
    texto = `Para poder cursar ${materiaAct.nombreCompleto} se necesitan:<br/><br/>`;
    texto += `-10 créditos en el área de Gestión en Organizaciones<br/><br/>`;
    mat = [AC,SO,RC,FBD,IIS]
    texto += `<u>Salvar curso de</u>:<br/><br/>`;
    mat.forEach( (materia)=>{
      if (!MateriasPersona.has(materia.curso)){
        texto += `-${materia.nombreCompleto}<br/>`;
      }else{
        texto += `-<s>${materia.nombreCompleto}</s><br/>`;
      }
    } )
  }

  if (materiaAct == AGI) {
    texto = `Para poder cursar ${materiaAct.nombreCompleto} se necesitan:<br/><br/>`;
    texto += `-140 créditos`;
  }

  if (materiaAct == Pasan) {
    texto = `Para poder validar ${materiaAct.nombreCompleto} se necesitan:<br/><br/>`;
    texto += `-200 créditos`;
  }

  if (materiaAct == TP) {
    texto = `Para poder cursar ${materiaAct.nombreCompleto} se necesita alguna de las siguientes:<br/><br/>`;
    texto += `<u>Opción 1</u>:<br/>`;
    texto += `-Exonerar Programación 3 y Salvar Curso Programación 4<br/><br/>`;
    texto += `<u>Opción 2</u>:<br/>`;
    texto += `-Exonerar Programación 4<br/>`;
  }
  
  if (materiaAct == PMPPG) {
    texto = `Para poder cursar ${materiaAct.nombreCompleto} se necesita alguna de las siguientes:<br/><br/>`;
    texto += `<u>Opción 1</u>:<br/>`;
    texto += `-Salvar Curso Arquitectura de Computadoras, Salvar Curso Sistemas Operativos y Exonerar Programación 2<br/><br/>`;
    texto += `<u>Opción 2</u>:<br/>`;
    texto += `-Exonerar Arquitectura de Computadoras y Programación 2<br/><br/>`;
    texto += `<u>Opción 3</u>:<br/>`;
    texto += `-Exonerar Sistemas Operativos y Programación 2<br/>`;
  }

  if (materiaAct == PG) {
    texto = `Para poder cursar ${materiaAct.nombreCompleto} hay 3 opciones complejas.<br/><br/>`;
    texto += `Estas están contempladas, para mas información sobre cada una recomendamos averiguar con Bedelías.`;
  }
  openPopup(texto);

}

function info(){
  let texto = "<u>Funcionalidades</u><br/><br/>";
  texto+="-En celulares se puede abrir y cerrar el menú con el botón de arriba a la derecha.<br/><br/>"
  texto+="-Presionar el botón de una materia no habilitada muestra los requisitos necesarios para poder cursarla.<br/><br/>"
  texto+="-Mantener apretado el botón de cualquier materia muestra de qué materias es previa.<br/><br/>"
  texto+="-Dar clic en el nombre de un área muestra las materias que suman créditos a esa área."
  openPopup(texto);
}

function mostrarBotonMateria(materia){

  switch (semestreAct) {
    case "primero":
      if (materia.semestre == "primero" || materia.semestre == "ambos") {
        displayBlock(materia.nombre);
      } else {
        displayNone(materia.nombre)
      }
      break;

    case "segundo":
      if (materia.semestre == "segundo" || materia.semestre == "ambos") {
        displayBlock(materia.nombre);
      } else {
        displayNone(materia.nombre);
      }
      break;
    case "libre":
      if (materia.libre == "si") {
        displayBlock(materia.nombre);
      } else {
        displayNone(materia.nombre);
      }
      break;

    default:
      displayBlock(materia.nombre);
      break;
  }

}

function verAreas(){

    let texto = `<u>Cantidad de créditos por Área</u><br/><br/>`
    texto += `<b><u>Materias Básicas</u>: ${creditosBloque.creditosEnM + creditosBloque.creditosEnCE} (80)</b><br/>`
    texto += `-<span onclick="mostrarMaterias('m')">Matemática</span>: ${creditosBloque.creditosEnM} (70)<br/>`
    texto += `-<span onclick="mostrarMaterias('ce')">Ciencias Experimentales</span>: ${creditosBloque.creditosEnCE} (10)<br/><br/>`
    texto += `<b><u>Básico-Tec,Técnicas e Int.</u>: ${creditosBloque.creditosEnProg + creditosBloque.creditosEnAC_SO_RC + creditosBloque.creditosEnBD_SI + creditosBloque.creditosEnMN + creditosBloque.creditosEnIO + creditosBloque.creditosEnIS + creditosBloque.creditosEnTall_Pasa_Proy + creditosBloque.creditosEnGO + creditosBloque.creditosEnIAYR} (220)</b><br/>`
    texto += `-<span onclick="mostrarMaterias('p')">Programación</span>: ${creditosBloque.creditosEnProg} (60)<br/>`
    texto += `-<span onclick="mostrarMaterias('a')">Arq., S. OP., Redes de C.</span>: ${creditosBloque.creditosEnAC_SO_RC} (30)<br/>`
    texto += `-<span onclick="mostrarMaterias('b')">B. Datos y Sist. de I.</span>: ${creditosBloque.creditosEnBD_SI} (10)<br/>`
    texto += `-<span onclick="mostrarMaterias('cn')">Cálculo Numérico</span>: ${creditosBloque.creditosEnMN} (8)<br/>`
    texto += `-<span onclick="mostrarMaterias('i')">Investigación Operativa</span>: ${creditosBloque.creditosEnIO} (10)<br/>`
    texto += `-<span onclick="mostrarMaterias('is')">Ingeniería de Software</span>: ${creditosBloque.creditosEnIS} (10)<br/>`
    texto += `-<span onclick="mostrarMaterias('ai')">A. Integ., Tall., Pas. y Proy.</span>: ${creditosBloque.creditosEnTall_Pasa_Proy} (45)<br/>`
    texto += `-<span onclick="mostrarMaterias('go')">Gestión en Organizaciones</span>: ${creditosBloque.creditosEnGO} (10)<br/>`
    texto += `-<span onclick="mostrarMaterias('ia')">Int. Artificial y Robótica</span>: ${creditosBloque.creditosEnIAYR} (0)<br/><br/>`
    texto += `<b><u>Materias Complementarias</u>: ${creditosBloque.creditosEnCHS} (10)</b><br/>`
    texto += `-<span onclick="mostrarMaterias('ch')">Ciencias H. y S.</span>: ${creditosBloque.creditosEnCHS} (10)<br/>`
    openPopup(texto);

}

function mostrarMaterias(nombre){

  let area, nombreArea;

  switch (nombre) {
    case "m":
      area = "creditosEnM"
      nombreArea = "Matemática"
      break;
    case "ce":
      area = "creditosEnCE"
      nombreArea = "Ciencias Experimentales"
      break;
    case "p":
      area = "creditosEnProg"
      nombreArea = "Programación"
      break;
    case "a":
      area = "creditosEnAC_SO_RC"
      nombreArea = "Arq., S. OP., Redes de C."
      break;
    case "b":
      area = "creditosEnBD_SI"
      nombreArea = "B. Datos y Sist. de I."
      break;
    case "cn":
      area = "creditosEnMN"
      nombreArea = "Cálculo Numérico"
      break;
    case "i":
      area = "creditosEnIO"
      nombreArea = "Investigación Operativa"
      break;
    case "is":
      area = "creditosEnIS"
      nombreArea = "Ingeniería de Software"
      break;
    case "ai":
      area = "creditosEnTall_Pasa_Proy"
      nombreArea = "A. Integ., Tall., Pas. y Proy."
      break;
    case "go":
      area = "creditosEnGO"
      nombreArea = "Gestión en Organizaciones"
      break;
    case "ia":
      area = "creditosEnIAYR"
      nombreArea = "Int. Artificial y Robótica"
      break;
    case "ch":
      area = "creditosEnCHS"
      nombreArea = "Ciencias H. y S."
      break;
  
    default:
      break;
  }

  texto = `<u>Materias para ${nombreArea}</u>:<br/><br/>`;
  textoOcupadas = "<br/><u>Materias ya hechas</u>:<br/>"
  textoDisponible = "<u>Materias disponibles</u>:<br/>"

  Materias.forEach( (materia)=>{

    if ( materia.area == area ){
      if ( MateriasPersona.has(materia.nombre) ){
        textoOcupadas += `-${materia.nombreCompleto}<br/>`;
      }else{
        textoDisponible += `-${materia.nombreCompleto}<br/>`;
      }

    }

  } )

  document.getElementById("popup-text").innerHTML = texto + textoDisponible + textoOcupadas;

}

// Funciones de asignacion de peso y creacion del HTML

function asignarPesoMateria(materia){
  let maxPesoPrevia = 0;
  if (materia.previas.length == 0){
    materia.peso = 1;
  }
  materia.previas.forEach( (previa) => {

    let materiaA;
    if (typeof previa == "string") {
      materiaA = Materias.find((elemento) => elemento.curso == previa);
    }else{
      materiaA = previa;
    }

    if (materiaA.peso == 0){
      asignarPesoMateria(materiaA);
    }

    if (materiaA.peso >= maxPesoPrevia && materiaA!=Aux){
      maxPesoPrevia = materiaA.peso;
    }

    if (maxPesoPrevia>=materia.peso){
      materia.peso = maxPesoPrevia + 1;
    }

  } )
}

function asignarPesos(){
  let maxTotal = 0;
  AGI.peso = 3;
  PAI.peso = 4;
  Pasan.peso = 4;
  TP.peso = 4;
  PMPPG.peso = 4;
  Materias.forEach( (materia) => {
    if (materia.peso == 0){
      asignarPesoMateria(materia);
    }
    if (maxTotal < materia.peso){
      maxTotal = materia.peso;
    }
  } );

  PG.peso = maxTotal + 1;

  for(let i = 1; i<=PG.peso; i++){

    var containerDiv = document.createElement('div');
    containerDiv.className = 'container-section';
    var sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    sectionDiv.id = `section-materias-${i}`;
    containerDiv.appendChild(sectionDiv);
    document.getElementById("secciones").appendChild(containerDiv);

  }
}

function mostrarDeQueEsPrevia(materiaACalcular){
  cont1 = 0;
  cont2 = 0;
  texto = "";
  Materias.forEach( (materiaActual) => {
    if (materiaActual.previas.includes(materiaACalcular.curso)){
      if (cont1==0){
        texto += `La aprobación de ${materiaACalcular.nombreCompleto} es previa de :<br/><br/>`;
        cont1++
      }
      texto += `-${materiaActual.nombreCompleto}<br/>`
    }
  } )
  
  Materias.forEach( (materiaActual) => {
    if (materiaActual.previas.includes(materiaACalcular)){
      if (cont2==0){
        texto += `<br/>La exoneración de ${materiaACalcular.nombreCompleto} es previa de :<br/><br/>`;
        cont2++
      }
      texto += `-${materiaActual.nombreCompleto}<br/>`
    }
  } )
  if (cont1+cont2==0){
    texto = `${materiaACalcular.nombreCompleto} no es previa de ninguna materia <u>en esta página</u>.`
  }
  openPopup(texto)
}

seScrolleo = false;

function crearBotonesMaterias(){
  Materias.sort((materia1, materia2) => {
    if (materia1.peso !== materia2.peso) {
        return materia1.peso - materia2.peso;
    }
    if (materia1.opcional !== materia2.opcional) {
        return (materia1.opcional === "no" ? -1 : 1) - (materia2.opcional === "no" ? -1 : 1);
    }
    return materia1.nombreCompleto.localeCompare(materia2.nombreCompleto);
  });
  Materias.forEach( (materia) => {

    if (materia.nombre != "MI"){
      var button = document.createElement('button');
        button.textContent = `${materia.nombreCompleto} (${materia.creditos})` ;
        if (materia.opcional == "si"){
          button.textContent += "*";
        }
        button.id = materia.nombre;

        button.onclick = function() {
          seScrolleo = false;
          this.mouseIsDown = false;
          clearTimeout(this.idTimeout);
          toggleMateria(materia.nombre);
      };

        button.addEventListener('mousedown', function() {
          this.mouseIsDown = true;
          seScrolleo = false;
          this.idTimeout = setTimeout( () => {
            if(this.mouseIsDown && !seScrolleo) {
              mostrarDeQueEsPrevia(materia);
            }
          }, 800);
        });

        button.addEventListener('mouseleave', function() {
          clearTimeout(this.idTimeout);
          this.mouseIsDown = false;
        });

        button.addEventListener('touchstart', function() {
          this.mouseIsDown = true;
          seScrolleo = false;
          this.idTimeout = setTimeout( () => {
            if(this.mouseIsDown && !seScrolleo) {
              mostrarDeQueEsPrevia(materia);
            }
          }, 800);
        });

        button.addEventListener('touchmove', function() {
          clearTimeout(this.idTimeout);
          this.mouseIsDown = false;
        });

        let parent = document.getElementById(`section-materias-${materia.peso}`);
        parent.appendChild(button);
    }

  } );

}

// Util solo para mobile, para poder hacer scroll apretando un boton de una materia sin que aparezca de que es previa
document.addEventListener("scroll", function() {
  seScrolleo = true;
});

// Funciones y eventos de manejo de tamaño de ventana

function checkWidth() {
  if (window.matchMedia("(min-width: 675px)").matches) {
    displayNone("checkbox-container");
    displayFlex("navbar");
  } else {
    displayFlex("checkbox-container");
    if (seleccion) {
      this.document.getElementById("checkbox").checked = true;
      displayFlex("navbar");
    } else {
      this.document.getElementById("checkbox").checked = false;
      displayNone("navbar");
    }
  }
}

window.addEventListener("resize", function () {
  checkWidth();
});

// Inicio de pagina

function firstLoad() {
  if (localStorage.getItem("materias")) {
    MateriasPersona = new Set(JSON.parse(localStorage.getItem("materias")));
  }
  document.getElementById("MI").disabled = true;
  if (localStorage.getItem("MI") == "false") {
    toggleMI();
  }
  if (localStorage.getItem("semestre")) {
    semestreAct = localStorage.getItem("semestre");
    toggleBotones(semestreAct);
  }
  if (!localStorage.getItem("semestre") && localStorage.getItem("MI") != "false"){
    actualizar();
  }
  checkWidth();
}

asignarPesos()
crearBotonesMaterias()
firstLoad();