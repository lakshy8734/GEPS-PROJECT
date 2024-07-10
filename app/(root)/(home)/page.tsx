import { AboutUs } from "@/components/AboutUs"
import { AlertDialogCard } from "@/components/AlertDialogCard"
import Feature from "@/components/Feature"
import { HomeScreen } from "@/components/Homepage"
import KeyFeatures from "@/components/KeyFeatures"
import { RoadMap } from "@/components/RoadMap"
import Tokenomics from "@/components/Tokenomics"

const page = () => {
  return (
    <>
      <HomeScreen/>
      <AboutUs/>
      <Feature/>
      <Tokenomics/>
      <KeyFeatures/>
      <RoadMap/>
    </>
  )
}

export default page