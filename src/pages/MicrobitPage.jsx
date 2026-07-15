import '@google/model-viewer';

export default function MicrobitPage() {
  return (
    <div className="fixed inset-0 bg-[#0B1120]">
      <model-viewer
        src="/models/microbit.glb"
        camera-controls
        auto-rotate
        rotation-per-second="15deg"
        interaction-prompt="none"
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: '100%', height: '100%', outline: 'none', background: 'transparent' }}
      />
    </div>
  );
}
