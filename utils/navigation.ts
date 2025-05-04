import { type ValidPaths } from "@/utils/validPaths";

export interface NavigationLink {
  label: string;
  type: "link"
  link: ValidPaths;
  showInFooter: boolean;
}

export interface NavigationCategory {
  label: string;
  type: "category"
  innerLinks?: NavigationLink[];
  showInFooter: boolean;
}

export type NavigationItem = NavigationLink |  NavigationCategory;

export const navigation: NavigationItem[] = [
  { label: "Home", type: "link", link: "/", showInFooter: false},
  { label: "O mně", type: "link", link: "/about", showInFooter: false },
  {
    label: "Služby",
    showInFooter: true,
    type: "category",
    innerLinks: [
      {
        label: "Kompletní příprava na porod a péče v těhotenství",
        type: "link",
        link: "/sluzby/kompletni-priprava-na-porod-a-pece-v-tehotenstvi",
        showInFooter: true,
      },
      // { label: '* Doprovod k císařskému řezu', link: '/sluzby/doprovod-k-cisarskemu-rezu' },
      { label: "Péče v šestinedělí", type: "link", link: "/sluzby/pece-v-sestinedeli", showInFooter: true },
      { label: "Laktační poradenství", type: "link", link: "/sluzby/laktacni-poradenstvi", showInFooter: true },
      {
        label: "Těhotenské a rebozo masáže",
        link: "/sluzby/tehotenske-a-rebozo-masaze",
        type: "link",
        showInFooter: true
      },
      {
        label: "Individuální funkční cvičební plán",
        link: "/sluzby/individualni-funkcni-cvicebni-plan",
        type: "link",
        showInFooter: true
      },
      { label: "Bylinná napářka", type: "link", link: "/sluzby/bylinna-naparka", showInFooter: true },
      { label: "Spinning babies", type: "link", link: "/sluzby/spinning-babies", showInFooter: true },
      { label: "Zpracování placenty", type: "link", link: "/sluzby/zpracovani-placenty", showInFooter: true },
      { label: "Rituály", type: "link", link: "/sluzby/ritualy", showInFooter: true },
    ],
  },
  {
    label: "Kurzy a Workshopy",
    type: "category",
    showInFooter: true,
    innerLinks: [
      {
        label: "Předporodní kurzy",
        type: "link",
        link: "/kurzy-a-workshopy/predporodni-kurzy",
        showInFooter: true
      },
      {
        label: "Zážitkový předporodní kurz",
        type: "link",
        link: "/kurzy-a-workshopy/zazitkovy-predporodni-kurz",
        showInFooter: true
      },
      {
        label: "Fyzická příprava na porod",
        type: "link",
        link: "/kurzy-a-workshopy/fyzicka-priprava-na-porod",
        showInFooter: true
      },
      {
        label: "Kurz posilování středu těla a pánevního dna",
        type: "link",
        link: "/kurzy-a-workshopy/kurz-posilovani-stredu-tela-a-panevniho-dna",
        showInFooter: true
      },
    ],
  },
  { label: "Události", type: "link", link: "/events", showInFooter: false },
];


export interface SocialLink {
  link: string;
  icon: string;
  label?: string;
}
export type SocialLinks = Record<string, SocialLink>;

export const socialLinks: SocialLinks = {
  mail: {
    label: "lucieodpocatku@gmail.com",
    link: "mailto:lucieodpocatku@gmail.com",
    icon: "pi-envelope",
  },
  instagram: {
    link: "https://www.instagram.com/od_pocatku_s_dulou_lucii/",
    icon: "/icon/instagram-colored-filled.png",
  },
  facebook: {
    link: "https://www.facebook.com/profile.php?id=100087763303156",
    icon: "/icon/facebook-colored-filled.png",
  },
};
