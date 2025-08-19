import BurgerAnimation from "../assets/samples/Burger.json"
import BusinessmanAnimation from "../assets/samples/Businessman looks through the telescope on a rocket.json"
import ColorfulTurkeyAnimation from "../assets/samples/Colorful Thanksgiving Turkey.json"
import DeathDanceAnimation from "../assets/samples/Death Dance.json"
import FireAnimation from "../assets/samples/Fire.json"
import HealthyFoodAnimation from "../assets/samples/Healthy food for diet & fitness.json"
import IsometricAnimation from "../assets/samples/Isometric animation for UIUX design landing page..json"
import LevelUpBadgesAnimation from "../assets/samples/Level Up Badges.json"
import LoaderCatAnimation from "../assets/samples/Loader cat.json"
import LoadingLoopAnimation from "../assets/samples/Loading loop animation.json"
import PropertySearchAnimation from "../assets/samples/Property Search House Morph 01.json"
import SandyLoadingAnimation from "../assets/samples/Sandy Loading.json"
import ScooterAnimation from "../assets/samples/Scooter.json"
import SolarHouseAnimation from "../assets/samples/Solar Powered House.json"
import StackAnimation from "../assets/samples/Stack Animation.json"
import RunningPigeonAnimation from "../assets/samples/running pigeon.json"

export const sampleAnimations = [
  {
    id: "burger",
    title: "Burger",
    author: "Nuraskar Esenamanov",
    authorUrl: "https://lottiefiles.com/Nuraskar2611",
    animationData: BurgerAnimation,
    featured: true,
  },
  {
    id: "fire",
    title: "Fire",
    author: "Mohsen Zamani",
    authorUrl: "https://lottiefiles.com/twlt1o42jpm59mva",
    animationData: FireAnimation,
    featured: true,
  },
  {
    id: "scooter",
    title: "Scooter",
    author: "Buryastorm",
    authorUrl: "https://lottiefiles.com/buryastorm",
    animationData: ScooterAnimation,
    featured: true,
  },
  {
    id: "businessman-telescope",
    title: "Businessman With Telescope",
    author: "Abdul Latif",
    authorUrl: "https://lottiefiles.com/animoox",
    animationData: BusinessmanAnimation,
    featured: false,
  },
  {
    id: "colorful-turkey",
    title: "Colorful Thanksgiving Turkey",
    author: "Abel Cabrerizo",
    authorUrl: "https://lottiefiles.com/abelcabrerizo",
    animationData: ColorfulTurkeyAnimation,
    featured: false,
  },
  {
    id: "death-dance",
    title: "Death Dance",
    author: "jignesh gajjar",
    authorUrl: "https://lottiefiles.com/jigneshgajjar",
    animationData: DeathDanceAnimation,
    featured: false,
  },
  {
    id: "healthy-food",
    title: "Healthy Food for Diet & Fitness",
    author: "Haikal G",
    authorUrl: "https://lottiefiles.com/rworr4rgm9d6h0bz",
    animationData: HealthyFoodAnimation,
    featured: false,
  },
  {
    id: "isometric-design",
    title: "Isometric UI/UX Design Landing",
    author: "Abdul Latif",
    authorUrl: "https://lottiefiles.com/animoox",
    animationData: IsometricAnimation,
    featured: false,
  },
  {
    id: "level-up-badges",
    title: "Level Up Badges",
    author: "Abdul Latif",
    authorUrl: "https://lottiefiles.com/animoox",
    animationData: LevelUpBadgesAnimation,
    featured: false,
  },
  {
    id: "loader-cat",
    title: "Loader Cat",
    author: "Diane Picchiottino",
    authorUrl: "https://lottiefiles.com/diane_soko",
    animationData: LoaderCatAnimation,
    featured: true,
  },
  {
    id: "loading-loop",
    title: "Loading Loop",
    author: "Aneesh Ravi",
    authorUrl: "https://lottiefiles.com/aneeshravi",
    animationData: LoadingLoopAnimation,
    featured: false,
  },
  {
    id: "property-search",
    title: "Property Search House Morph",
    author: "Andrew Malcolm",
    authorUrl: "https://lottiefiles.com/4hfe2jlqki",
    animationData: PropertySearchAnimation,
    featured: false,
  },
  {
    id: "sandy-loading",
    title: "Sandy Loading",
    author: "Parsa Navaei",
    authorUrl: "https://lottiefiles.com/m7ooeuaby6",
    animationData: SandyLoadingAnimation,
    featured: false,
  },
  {
    id: "solar-house",
    title: "Solar Powered House",
    author: "Jeffrey Christopher",
    authorUrl: "https://lottiefiles.com/zeffchris",
    animationData: SolarHouseAnimation,
    featured: false,
  },
  {
    id: "stack-animation",
    title: "Stack Animation",
    author: "Toonlab Studio",
    authorUrl: "https://lottiefiles.com/vqgpw3dl7ylx5bgc",
    animationData: StackAnimation,
    featured: false,
  },
  {
    id: "running-pigeon",
    title: "Running Pigeon",
    author: "Christina Bublyk",
    authorUrl: "https://lottiefiles.com/creatopotato",
    animationData: RunningPigeonAnimation,
    featured: false,
  },
]

export const featuredAnimations = sampleAnimations.filter(animation => animation.featured)