import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress, active, loaded, total } = useProgress();
  
  return (
    <Html center className="text-xl font-normal text-center text-white">
      <div>
        <div className="text-2xl mb-2">
          {active ? `${Math.round(progress)}% loaded` : 'Initializing...'}
        </div>
        <div className="max-w-md">
          {active ? (
            `Loading 3D avatar... (${loaded} of ${total} assets)`
          ) : (
            'Preparing 3D environment, please wait...'
          )}
        </div>
        {/* Optional: Add a progress bar */}
        <div className="w-64 bg-gray-700 rounded-full h-2 mt-4">
          <div 
            className="bg-[#F2ECF8] h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.max(progress, 5)}%` }}
          />
        </div>
      </div>
    </Html>
  )
}

export default Loader