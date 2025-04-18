import { ProductType } from "./types";

export const productList: ProductType[] = [
  {
    id: "spark-game-pc",
    title: "Gaming PC - Spark (Basic)",
    imageUrl: "/images/configurator-systems/GAMEPC-Spark-V2-large.jpg",
    basePrice: 455.0,
    currency: "€",
    promotion: {
      endDate: "2025-04-28",
      description: "Spring deals!",
      price: 300,
    },
    description:
      "Our entry-level gaming PC. Especially for new gamers with a budget up to € 1,000. No fuss and choice stress, just enjoy gaming!",
    ratings: {
      compositionOptions: 3,
      processorGraphicsCapabilities: 3,
      priceQuality: 4,
    },
    link: "/game-pc/spark-game-pc",
  },
  {
    id: "amd-2024-game-pc",
    title: "Gaming PC - AMD (2024)",
    imageUrl: "/images/configurator-systems/AMD-Ryzen7-large.jpg",
    basePrice: 702.5,
    currency: "€",
    description:
      "AMD Ryzen 7000/9000 series processors for the best gaming experience. ✓ AMD (2024) Game PC configurator. ✓ Built by Game PC experts",
    ratings: {
      compositionOptions: 5,
      processorGraphicsCapabilities: 5,
      priceQuality: 3.5,
    },
    link: "/game-pc/amd-2024-game-pc",
  },
  {
    id: "intel-2024-game-pc",
    title: "Gaming PC - Intel (2024)",
    imageUrl: "/images/configurator-systems/INTEL-V2-large.jpg",
    basePrice: 600.0,
    currency: "€",
    description:
      "The new Intel DDR5 GamePC has a huge range of options. Suitable for the gamer who also uses the GamePC for work!",
    ratings: {
      compositionOptions: 5,
      processorGraphicsCapabilities: 4.5,
      priceQuality: 4,
    },
    link: "/game-pc/intel-2024-game-pc",
  },
  {
    id: "amd-actie-game-pc",
    title: "Gaming PC - AMD Promotion",
    imageUrl: "/images/configurator-systems/AMD-Ryzen-V2-large.jpg",
    basePrice: 547.5,
    currency: "€",
    description:
      "The most chosen Game PC of the moment. With this AMD confgurator you get the best Game performance for your money.",
    ratings: {
      compositionOptions: 4,
      processorGraphicsCapabilities: 4,
      priceQuality: 5,
    },
    link: "/game-pc/amd-actie-game-pc",
  },
  {
    id: "intel-12-game-pc",
    title: "Gaming PC - Intel Action",
    imageUrl: "/images/configurator-systems/INTEL-Actie-V2-large.jpg",
    basePrice: 525.0,
    currency: "€",
    description:
      "With this 12th/13th generation Intel configurator you get action on action. Here are all our offers on parts.",
    ratings: {
      compositionOptions: 4,
      processorGraphicsCapabilities: 3.5,
      priceQuality: 4.5,
    },
    link: "/game-pc/intel-12-game-pc",
  },
];
