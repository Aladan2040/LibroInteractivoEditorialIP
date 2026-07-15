import '@google/model-viewer';

export default function MicrobitPage() {
  return (
    <model-viewer
      src="/models/microbit.glb"
      camera-controls
      auto-rotate
      touch-action="pan-y"
      camera-orbit="35deg 75deg auto"
      min-camera-orbit="auto auto 80%"
      max-camera-orbit="auto auto 250%"
      field-of-view="30deg"
      interaction-prompt="none"
      exposure="1"
      shadow-intensity="1"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
        outline: 'none'
      }}
    />
  );
}
