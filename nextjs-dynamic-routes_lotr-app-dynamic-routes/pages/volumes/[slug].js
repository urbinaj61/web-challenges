import VolumeDetail from "../../components/VolumeDetail.jsx";
import { useRouter } from "next/router";

const volume = ({ volumes }) => {
  const router = useRouter();
  const slug = router.query.slug;

  // const foundVolume = volumes.find(volume => volume.slug === slug);
  const volumeIndex = volumes.findIndex(volume => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) return;
  return (
    <VolumeDetail
      // foundVolume={foundVolume}
      volume={volume}
      nextVolume={nextVolume}
      previousVolume={previousVolume}
    />
  );
};
export default volume;
