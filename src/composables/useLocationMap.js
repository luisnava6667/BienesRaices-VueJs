import { ref } from 'vue'

export default function useLocationMap() {
  const zoom = ref(13)
    const center = ref([-34.603781, -58.381594])
    function pin(e){
        const marker = e.target.getLatLng()
        center.value = [marker.lat, marker.lng]
        console.log(center.value);
    }
  return {
    zoom,
    center,
    pin
  }
}
