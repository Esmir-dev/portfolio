const bosnianContent = {
  header: {
    firstLink: "O meni",
    secondLink: "Projekti",
    thirdLink: "CV",
    fourthLink: "Kontakt",
  },
  about: {
    title: `O MENI`,
    introduce: `Ja sam Junior Software Developer. \n
    Preko godinu i po dana učim programiranje kroz edukacije i samostalno učenje,
    posebno MERN tehnologije tj. Javascript, ReactJS, NodeJS, Express i MongoDb. \n
    Također koristim html i css te css frameworke kao Material-UI, Bootstrap, React-Bootstrap...\n
    Moja želja je nastaviti razvijati web aplikacije u ovim ali učiti i nove tehnologije.\n
    Također koristim i backend tehnologije, iako trenutno bolje poznajem frontend, 
    ali u budućnosti se vidim kao full stack ili backend developer. \n
    Nakon samostalnog učenja smatram da je vrijeme da započnem i zvanično svoju It karijeru.\n
    Smatram da kopaniji mogu donijeti dozu zrelosti, detaljnosti, odgovornosti, fleksibilnosti.\n
    Sebe smatram ambicioznim te priželjkujem kvalitetno okruženje i dobrog mentora uz koje se mogu razvijati kao osoba, ali pogotovo kako programer.\n
    Više informacija o meni, mojim vještinama, iskustvima i obrazovanju možete pronaći u CV sekciji.`,
  },
  projects: {
    todolist: "Todo lista",
    weatherApp: "Vremenska prognoza",
    videoApp: "Video pretraživač",
    membershipApp: "Memberšip",
    mernTodo: "MERN Todo lista",
    recommendationApp: "Aplikacija za preporuku knjiga",
  },
  description: {
    todolist: `Jednostavna Todo aplikacija, za svakodnevno korištenje. Napravljena u javascript frameworku; react-u. Aplikacija sadrži input i gumb za dodavanje, a podaci se spremaju u localStorage-u. Korisnik također može editovati i brisati listu.
    Najnoviji zadaci redaju se na vrh liste, dok stariji zadaci se potiskuju prema dnu liste.`,
    weatherApp: `Aplikacija vremenska prognoza je jednostavna aplikacija, koja nam predstavlja vremenske elemente u određenom gradu. Temperaturu, jačinu i smijer vjetra, oblačnost, te da li je dan ili noć. Podaci se spremaju u localStorage, i nakon osvježavanja stranice se ne brišu.
    Ako upisani grad ne postoji pojavit će se error.`,
    videoApp: `Jednostavna frontend aplikacija, u kojoj pretražujemo video snimke sa youtube-a. Korisitimo axios biblioteku preko koje povezujemo aplikaciju sa youtubom.
    Upisivanjem naziva video, pojavit će se 5 najgledanijih videa. Prvi kao video, a ostali kao slike koje na klik prelaze u video.`,
    membershipApp: `Memberšip aplikacija je full stack aplikacija napravljena u MERN stack tehnologijama. Logika aplikacije odrađena je kroz CRUD operacije.
    Također aplikacija sadrži i signup/login formu. Možemo se  prijaviti, editovati i izbrisati svoj nalog. Ostale korisnike ne možemo editovati zbog autentikacije i autorizacije.`,
    mernTodo: `Mern todo aplikacija, za dodavanje zadataka i razvrstavanje po kategorijama. Nakon prijave na svoj nalog, možemo postaviti svoje zadatke i razvrstat ih po kategorijama (in progress, in review, todo i done). Drag and drop opcijama možemo prebacivati zadatke iz jedne kategorije u drugu. Svaki zadatak možemo i izbrisati.`,
    recommendationApp: `Aplikacija za preporuku knjiga, napravljena je u ReactJS, koristeći react biblioteku zvanu axios.
    Ako ste ljubitelji knjiga, ovo je aplikacija za vas. N apočetnoj stranici su "random" knjige u kolonama i redovima.
    Upišite ime svoje omiljene knjige i aplikacija će vam izbaciti svaki naslov koji sadrži taj unos`,
  },
  contact: {
    contactMe: `AKO MISLITE DA SAM DOBAR KANDIDAT ZA VAŠU KOMPANIJU, \n BUDITE SLOBODNI KONTAKTIRATI ME.`,
  },
};

export default bosnianContent;
